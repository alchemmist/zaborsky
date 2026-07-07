import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Заборский — заборы и благоустройство под ключ";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const [oswaldBold, oswaldRegular] = await Promise.all([
    readFile(join(process.cwd(), "assets/Oswald-Bold.ttf")),
    readFile(join(process.cwd(), "assets/Oswald-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1d262b",
          padding: "80px",
          fontFamily: "Oswald",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "10px",
            background: "#5c7887",
            marginBottom: "48px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: "150px",
            fontWeight: 700,
            letterSpacing: "18px",
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          ЗАБОРСКИЙ
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontSize: "46px",
            fontWeight: 400,
            letterSpacing: "8px",
            color: "#a9bcc6",
          }}
        >
          ЗАБОРЫ И БЛАГОУСТРОЙСТВО ПОД КЛЮЧ
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: "34px",
            fontWeight: 400,
            letterSpacing: "2px",
            color: "#5c7887",
          }}
        >
          заборский.рф
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Oswald", data: oswaldBold, style: "normal", weight: 700 },
        { name: "Oswald", data: oswaldRegular, style: "normal", weight: 400 },
      ],
    }
  );
}
