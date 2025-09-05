"use client";

import { useState } from "react";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error");
    }
  }

  return (
    <form action={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
        <input id="subject" name="subject" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
      </div>
      <div className="space-y-4">
        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={status === "loading" || status === "success"} 
          className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden epic-hover transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center gap-2 transition-all duration-300">
            {status === "loading" && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            {status === "success" && (
              <Check className="h-4 w-4" />
            )}
            {status === "idle" && (
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            )}
            {status === "error" && (
              <Send className="h-4 w-4" />
            )}
            
            {status === "loading" && "Sending Message..."}
            {status === "success" && "Message Sent!"}
            {status === "idle" && "Send Message"}
            {status === "error" && "Try Again"}
          </span>
        </button>

        {/* Status Messages with Animations */}
        <div className="min-h-[60px] flex items-center">
          {status === "success" && (
            <div className="flex items-center gap-3 p-4 rounded-xl glass border border-white/20 backdrop-blur-sm animate-slide-in-up">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-green-600 dark:text-green-400">Message sent successfully!</p>
                <p className="text-sm text-foreground/70">I&apos;ll get back to you as soon as possible.</p>
              </div>
            </div>
          )}
          
          {status === "error" && (
            <div className="flex items-center gap-3 p-4 rounded-xl glass border border-red-200/50 backdrop-blur-sm animate-slide-in-up bg-red-50/50 dark:bg-red-900/20">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-red-600 dark:text-red-400">Failed to send message</p>
                <p className="text-sm text-red-500 dark:text-red-300">{errorMessage}</p>
              </div>
            </div>
          )}
          
          {status === "loading" && (
            <div className="flex items-center gap-3 p-4 rounded-xl glass border border-blue-200/50 backdrop-blur-sm animate-slide-in-up bg-blue-50/50 dark:bg-blue-900/20">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
              <div>
                <p className="font-semibold text-blue-600 dark:text-blue-400">Sending your message...</p>
                <p className="text-sm text-blue-500 dark:text-blue-300">This will only take a moment.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}


