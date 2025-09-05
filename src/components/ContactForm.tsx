"use client";

import { useState } from "react";
import { Send, Check, AlertCircle, Loader2, Mail, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState(false);

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
      setShowAnimation(true);
      // Delay the success status to show animation first
      setTimeout(() => {
        setStatus("success");
      }, 2000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unexpected error");
    }
  }

  return (
    <div className="relative">
      <form action={onSubmit} className="space-y-1.5">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input id="name" name="name" required className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
        <input id="subject" name="subject" required className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea id="message" name="message" rows={3} required className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" style={{ height: '153px' }} />
      </div>
      <div className="space-y-2">
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

      </div>

      {/* Animated Success Overlay */}
      {showAnimation && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-50"
          onClick={() => setShowAnimation(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Flying Letter Animation */}
            <div className="absolute animate-letter-fly">
              <div className="relative">
                <Mail className="h-12 w-12 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Success Message (appears after letter flies away) */}
            <div className="animate-success-appear" onClick={(e) => e.stopPropagation()}>
              <div className="relative text-center glass rounded-2xl p-8 border border-white/20 backdrop-blur-md epic-hover">
                <div className="mb-4 animate-bounce-in">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. I&apos;ll get back to you soon!</p>
                
                <button
                  onClick={() => setShowAnimation(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Status Messages (for errors only now) */}
      {status === "error" && (
        <div className="mt-3">
          <div className="flex items-center gap-2 p-3 rounded-lg glass border border-red-200/50 backdrop-blur-sm animate-slide-in-up bg-red-50/50 dark:bg-red-900/20">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <div>
              <p className="text-sm font-semibold text-red-600 dark:text-red-400">Failed to send message</p>
            </div>
          </div>
        </div>
      )}
      </form>
    </div>
  );
}


