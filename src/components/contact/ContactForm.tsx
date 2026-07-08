"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const labelClasses =
  "block label-mono text-muted mb-2";

const inputClasses =
  "w-full bg-transparent border-0 border-b border-border-strong px-0 py-3 text-base text-foreground placeholder:text-muted-light transition-colors focus-visible:outline-none focus-visible:border-accent";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "pending" | "success">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("pending");

    // In a real application, this would send data to a backend service.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    setFormData(initialState);
    requestAnimationFrame(() => successRef.current?.focus());
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="border-t border-accent-border py-8"
      >
        <p className="heading-block text-foreground">Message sent.</p>
        <p className="mt-2 description-sm">
          Thank you for reaching out — we&apos;ll respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your name"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@company.com"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClasses}
          placeholder="Project context, timeline, and what success looks like..."
          required
          aria-required="true"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          pending={status === "pending"}
          className="btn-glow-hover"
        >
          {status === "pending" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
