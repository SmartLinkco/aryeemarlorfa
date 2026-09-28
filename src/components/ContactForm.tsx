"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { topics, type Topic } from "@/lib/content";
import { site } from "@/lib/site";

const allowed = new Set(topics.map((topic) => topic.value));

export function ContactForm() {
  const params = useSearchParams();
  const initial = params.get("topic");
  const startTopic: Topic = initial && allowed.has(initial as Topic) ? (initial as Topic) : "consulting";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<Topic>(startTopic);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const topicLabel = useMemo(() => topics.find((item) => item.value === topic)?.label ?? "Other", [topic]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Add a valid email address.";
    if (message.trim().length < 12) next.message = "A few sentences help the placeholder form feel real.";
    setErrors(next);
    if (Object.keys(next).length) {
      setDone(false);
      return;
    }
    setDone(true);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <form onSubmit={onSubmit} noValidate className="space-y-5 lg:col-span-7">
        <div>
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            className="mt-2 min-h-12 w-full border border-ink/15 bg-foam px-3 py-3 text-base outline-none"
          />
          {errors.name && (
            <p role="alert" className="mt-1 text-sm text-clay">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            className="mt-2 min-h-12 w-full border border-ink/15 bg-foam px-3 py-3 text-base outline-none"
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-sm text-clay">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="topic" className="text-sm">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value as Topic)}
            className="mt-2 min-h-12 w-full border border-ink/15 bg-foam px-3 py-3 text-base outline-none"
          >
            {topics.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-2 min-h-12 w-full border border-ink/15 bg-foam px-3 py-3 text-base outline-none"
          />
          {errors.message && (
            <p role="alert" className="mt-1 text-sm text-clay">
              {errors.message}
            </p>
          )}
        </div>
        <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-sm text-cream hover:bg-moss sm:w-auto">
          Send placeholder note
        </button>
        {done && (
          <p role="status" className="text-sm leading-relaxed text-moss">
            Thank you, {name.trim()}. Your {topicLabel.toLowerCase()} note stayed in this browser. Nothing was emailed.
            When this brand is real, the form can be wired to {site.email}.
          </p>
        )}
      </form>

      <aside className="h-fit border border-line bg-mist/60 p-6 lg:col-span-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-leaf">Calendar</p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight">Prefer a set time?</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          Scheduling is not connected. Use the form and mention two times that suit you. Nothing is booked from this page.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-ink/20 px-5 text-sm hover:border-ink sm:w-auto"
          aria-expanded={calendarOpen}
          aria-controls="calendar-stub"
          onClick={() => setCalendarOpen((value) => !value)}
        >
          Open calendar placeholder
        </button>
        {calendarOpen && (
          <p id="calendar-stub" className="mt-4 text-sm leading-relaxed text-ink/80">
            Imagine a quiet week grid here. For the prototype, write the topic — consulting or speaking works well — and
            the hours you keep. A person, not a widget, would answer.
          </p>
        )}
        <p className="mt-8 text-sm">
          Or write directly:{" "}
          <a className="inline-flex min-h-11 items-center underline decoration-ink/30 underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </aside>
    </div>
  );
}
