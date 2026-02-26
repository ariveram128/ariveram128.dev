"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const channels = [
  {
    label: "GITHUB",
    value: "github.com/ariveram128",
    href: "https://github.com/ariveram128",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/ariveram128",
    href: "https://linkedin.com/in/ariveram128",
  },
  {
    label: "EMAIL",
    value: "mrvnlxndrrvr2@gmail.com",
    href: "mailto:mrvnlxndrrvr2@gmail.com",
  },
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-2 font-mono text-xs tracking-widest text-faint">
          <span className="text-cyan">{">"}</span> SYS://CONTACT
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          OPEN <span className="text-cyan glow-cyan">CHANNEL</span>
        </h1>
        <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-dim">
          Have a project in mind, a question, or just want to connect? Transmit
          a message and I&apos;ll respond as quickly as possible.
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-5">
        {/* Form */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border border-line bg-surface p-6">
                <div className="mb-6 flex items-center gap-3 border-b border-line pb-3">
                  <div className="h-2 w-2 rounded-full bg-neon" />
                  <span className="font-mono text-[10px] tracking-widest text-faint">
                    COMPOSE TRANSMISSION
                  </span>
                </div>

                <div className="space-y-5">
                  <TerminalInput
                    label="DESIGNATION"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your name"
                    required
                  />
                  <TerminalInput
                    label="COMM_ADDR"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                  <TerminalInput
                    label="SUBJECT"
                    value={form.subject}
                    onChange={(v) => setForm({ ...form, subject: v })}
                    placeholder="What's this about?"
                    required
                  />

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-mono text-xs text-faint">
                      <span className="text-cyan">{">"}</span> MESSAGE
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Speak freely..."
                      required
                      rows={5}
                      className="w-full resize-none border border-line bg-base px-4 py-3 font-mono text-sm text-body outline-none transition-colors placeholder:text-faint focus:border-cyan/40 focus:bg-elevated"
                    />
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 border border-cyan/30 bg-cyan/5 py-3 font-mono text-sm tracking-widest text-cyan transition-all hover:border-cyan/60 hover:bg-cyan/10"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-cyan/50 transition-colors group-hover:text-cyan">
                  ▓
                </span>
                TRANSMIT MESSAGE
              </motion.button>
            </form>
          ) : (
            <motion.div
              className="border border-neon/30 bg-neon/5 p-8"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-4 font-display text-lg font-bold tracking-wide text-neon glow-green">
                TRANSMISSION SENT
              </div>
              <p className="font-mono text-sm text-dim">
                <span className="text-faint">{">"}</span> Your message has been
                received. I&apos;ll respond through the provided comm channel as
                soon as possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-6 font-mono text-xs text-faint transition-colors hover:text-cyan"
              >
                → SEND ANOTHER
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Channels sidebar */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <div className="border border-line bg-surface p-6">
            <div className="mb-6 flex items-center gap-3 border-b border-line pb-3">
              <div className="h-2 w-2 rounded-full bg-amber" />
              <span className="font-mono text-[10px] tracking-widest text-faint">
                ALTERNATE CHANNELS
              </span>
            </div>

            <div className="space-y-5">
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                >
                  <span className="font-mono text-[10px] text-faint">
                    {ch.label}
                  </span>
                  <p className="mt-0.5 font-mono text-sm text-dim transition-colors group-hover:text-cyan">
                    → {ch.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-4">
              <p className="font-mono text-[10px] text-faint">
                <span className="text-amber">●</span> RESPONSE TIME: ~24H
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TerminalInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 font-mono text-xs text-faint">
        <span className="text-cyan">{">"}</span> {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border border-line bg-base px-4 py-2.5 font-mono text-sm text-body outline-none transition-colors placeholder:text-faint focus:border-cyan/40 focus:bg-elevated"
      />
    </div>
  );
}
