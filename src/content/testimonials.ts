export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonialsContent = {
  label: "Testimonials",
  title: "Trusted by teams building ambitious products",
  subtitle:
    "From startups to enterprises and everything in between, see for yourself the impact of a senior engineering partner.",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Runtime Studio was an exceptional partner and the best development collaborators I've had the pleasure of working with. They do complex work on extremely fast timelines and manage the pre-launch process to deliver the best possible product.",
    author: "VP of Engineering",
    role: "B2B SaaS Scaleup",
  },
  {
    quote:
      "Working with them was comparable to having another co-founder on the team, but without the commitment or cost. A true strategic thought partner who adapts scope in real time based on what the business actually needs.",
    author: "Founder & CEO",
    role: "Early-stage Startup",
  },
  {
    quote:
      "They didn't just write tests. They rebuilt our entire approach to quality and made our team self-sufficient. Our release confidence has never been higher.",
    author: "Head of Quality",
    role: "Fintech Platform",
  },
  {
    quote:
      "10/10 communicators — the best I've encountered in the tech space. They go the extra mile, respond quickly, and their engineering rigour holds up under real production load.",
    author: "Product Director",
    role: "Healthcare Technology",
  },
];

export const recognition = [
  "Top Development Partner",
  "5-Star Client Rating",
  "Verified Reviews",
  "Enterprise-Ready Delivery",
];
