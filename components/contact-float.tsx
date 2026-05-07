"use client";

import { useState, useEffect } from "react";

export function ContactFloat() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowModal(true), 10);
    } else {
      setShowModal(false);
    }
  }, [open]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const subject = encodeURIComponent("Заявка с сайта ZABORSKY");
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\n${comment ? `Комментарий: ${comment}` : ""}`
    );
    
    const mailtoUrl = `mailto:prometiz@inbox.ru?subject=${subject}&body=${body}`;
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setOpen(false);
    setName("");
    setPhone("");
    setComment("");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        <div className="relative mb-2">
          <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 bg-white z-0" />
          <div className="relative z-10 rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#5c7887] shadow-lg">
            <p>Есть вопросы? Пиши!</p>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5c7887] text-white shadow-lg transition hover:bg-[#4a6575] hover:shadow-xl"
          aria-label="Связаться с нами"
          suppressHydrationWarning
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'} `} suppressHydrationWarning>
          <div className={`w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold uppercase tracking-[0.18em] text-slate-900">
                Связаться с нами
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 transition hover:text-slate-600"
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium uppercase tracking-[0.14em] text-slate-700">
                  Имя *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-[#5c7887] focus:outline-none"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium uppercase tracking-[0.14em] text-slate-700">
                  Номер телефона *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-[#5c7887] focus:outline-none"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium uppercase tracking-[0.14em] text-slate-700">
                  Комментарий
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-[#5c7887] focus:outline-none resize-none"
                  placeholder="Ваше сообщение (необязательно)"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#5c7887] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#4a6575]"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
