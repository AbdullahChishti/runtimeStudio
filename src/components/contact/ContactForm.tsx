"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

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

const inputClasses =
  "w-full rounded-sm border border-border-strong bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

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
        className="panel border-accent-border p-8 text-center panel-ticks"
      >
        <p className="heading-card text-foreground">Message sent.</p>
        <p className="mt-2 description-sm">
          Thank you for reaching out — we&rsquo;ll respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
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
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
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
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClasses}
          required
          aria-required="true"
        />
      </div>

      <Button type="submit" size="lg" pending={status === "pending"} className="w-full sm:w-auto btn-glow-hover">
        {status === "pending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
