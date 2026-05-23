"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

const WELCOME: Message = {
  id: "welcome",
  role: "assistant",
  text: "Cześć! Jestem asystentem ZIĘBUD Expert. Mogę pomóc ze zgłoszeniem awarii, wyceną WUKO, kamery, separatora albo serwisu obiektu. Od czego zaczynamy?",
};

const QUICK_REPLIES = [
  "Ile kosztuje WUKO?",
  "Mam zator w budynku",
  "Potrzebuję kamery do kanalizacji",
  "Szukam serwisu dla wspólnoty",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const messageCounter = useRef(0);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#chatbot") setOpen(true);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    messageCounter.current += 1;
    const userMsg: Message = {
      id: `u-${messageCounter.current}`,
      role: "user",
      text: trimmed,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      messageCounter.current += 1;
      const stub: Message = {
        id: `a-${messageCounter.current}`,
        role: "assistant",
        text: "Najkrótsza droga to formularz zgłoszenia. Zostaw adres, objawy i typ obiektu, a wrócimy z właściwą usługą, wyceną albo pytaniami doprecyzowującymi.",
      };
      setMessages((m) => [...m, stub]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Zamknij czat" : "Otwórz czat z ekspertem AI"}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-24 right-5 z-50 flex items-center gap-2 rounded-full shadow-[0_10px_30px_-6px_rgba(0,212,255,0.55)] transition md:bottom-5",
          "bg-navy-900 text-white hover:bg-navy-800",
          "px-4 py-3 sm:px-5 sm:py-3.5",
        )}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <>
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-aqua-500 text-navy-900">
              <MessageCircle className="h-4 w-4" />
              <span className="absolute inset-0 animate-ping rounded-full bg-aqua-400 opacity-30" />
            </span>
            <span className="hidden pr-1 text-sm font-semibold sm:inline">
              Ekspert AI
            </span>
          </>
        )}
      </button>

      <div
        id="chatbot"
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-3 bottom-24 z-40 origin-bottom-right overflow-hidden rounded-3xl border border-border bg-white shadow-[0_40px_80px_-20px_rgba(10,22,40,0.35)] transition-all sm:inset-auto sm:bottom-24 sm:right-5 sm:w-[420px]",
          "md:bottom-24",
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
        style={{ maxHeight: "calc(100dvh - 7rem)" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border bg-navy-900 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-aqua-500/15 text-aqua-300">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold">Ekspert AI</p>
              <p className="flex items-center gap-1.5 text-[11px] text-navy-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua-400" />
                Online · odpowiadamy w ≤ 15 min
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Zamknij czat"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div
          className="flex flex-col gap-3 overflow-y-auto bg-muted/30 px-4 py-5"
          style={{ maxHeight: "48vh" }}
        >
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
          {typing && <TypingBubble />}
          <div ref={endRef} />
        </div>

        {messages.length <= 1 && (
          <div className="border-t border-border bg-white px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-600">
              Szybkie pytania
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-navy-800 transition hover:border-aqua-400 hover:text-aqua-700"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border bg-white px-3 py-3"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Zadaj pytanie lub opisz projekt..."
            className="flex-1"
            aria-label="Treść wiadomości"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Wyślij"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-md bg-navy-900 text-white"
            : "rounded-bl-md bg-white text-navy-900 ring-1 ring-inset ring-border",
        )}
      >
        {message.text}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 ring-1 ring-inset ring-border">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-400 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-400 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-400" />
        </div>
      </div>
    </div>
  );
}
