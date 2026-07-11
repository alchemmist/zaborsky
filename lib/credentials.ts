import { promises as fs } from "fs";
import path from "path";
import { hashPassword, timingSafeEqual } from "@/lib/auth";

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
const AUTH_FILE = path.join(DATA_DIR, "auth.json");

type AuthFile = { passwordHash?: string };

async function readAuth(): Promise<AuthFile> {
  try {
    const raw = await fs.readFile(AUTH_FILE, "utf8");
    return JSON.parse(raw) as AuthFile;
  } catch {
    return {};
  }
}

async function writeAuth(data: AuthFile): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tmp = `${AUTH_FILE}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf8");
  await fs.rename(tmp, AUTH_FILE);
}

export async function verifyPassword(plain: string): Promise<boolean> {
  const stored = (await readAuth()).passwordHash;
  const envPass = process.env.ADMIN_PASSWORD;
  if (envPass && timingSafeEqual(plain, envPass)) {
    return true;
  }
  if (stored) {
    const incoming = await hashPassword(plain);
    return Boolean(incoming) && timingSafeEqual(incoming, stored);
  }
  return false;
}

export async function verifyCredentials(
  user: string,
  pass: string
): Promise<boolean> {
  const envUser = process.env.ADMIN_USER;
  if (!envUser) return false;
  if (!timingSafeEqual(user, envUser)) return false;
  return verifyPassword(pass);
}

export async function changePassword(
  current: string,
  next: string
): Promise<{ ok: boolean; error?: string }> {
  if (!(await verifyPassword(current))) {
    return { ok: false, error: "Текущий пароль неверный" };
  }
  if (!next || next.length < 4) {
    return { ok: false, error: "Новый пароль слишком короткий (мин. 4 символа)" };
  }
  const hash = await hashPassword(next);
  if (!hash) {
    return { ok: false, error: "Сервер не настроен (нет ADMIN_SECRET)" };
  }
  await writeAuth({ passwordHash: hash });
  return { ok: true };
}
