"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const budgetOptions = [
  "Under £25k",
  "£25k – £50k",
  "£50k – £100k",
  "£100k+",
  "Not sure yet",
];

const startOptions = [
  "Immediately",
  "Within 1 month",
  "1 – 3 months",
  "3+ months",
  "Exploring options",
];

type FormData = {
  name: string;
  email: string;
  company: string;
  building: string;
  help: string;
  budget: string;
  startDate: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  building: "",
  help: "",
  budget: "",
  startDate: "",
};

function Field({
  label,
  id,
  children,
  required,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
      >
        {label}
        {required && <span className="text-foreground"> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-light transition-colors focus:border-foreground focus:outline-none";

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border bg-surface p-8 lg:p-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Message received
        </p>
        <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We&apos;ll review your enquiry and respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" id="name" required>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
        </Field>
        <Field label="Work email" id="email" required>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <Field label="Company" id="company" required>
        <input
          id="company"
          type="text"
          required
          autoComplete="organization"
          className={inputClass}
          value={form.company}
          onChange={update("company")}
          placeholder="Company name"
        />
      </Field>

      <Field label="What are you building?" id="building" required>
        <textarea
          id="building"
          required
          rows={3}
          className={cn(inputClass, "resize-y")}
          value={form.building}
          onChange={update("building")}
          placeholder="Brief description of your product or project"
        />
      </Field>

      <Field label="How can we help?" id="help" required>
        <textarea
          id="help"
          required
          rows={4}
          className={cn(inputClass, "resize-y")}
          value={form.help}
          onChange={update("help")}
          placeholder="Tell us about your challenge, goals, and timeline"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Budget range" id="budget">
          <select
            id="budget"
            className={inputClass}
            value={form.budget}
            onChange={update("budget")}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Ideal start date" id="startDate">
          <select
            id="startDate"
            className={inputClass}
            value={form.startDate}
            onChange={update("startDate")}
          >
            <option value="">Select timing</option>
            {startOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send enquiry
      </Button>

      <p className="text-sm text-muted">
        Prefer email?{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-foreground underline-offset-4 hover:underline"
        >
          {siteConfig.email}
        </a>
      </p>
    </form>
  );
}
