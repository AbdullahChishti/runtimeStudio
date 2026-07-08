import { GenerativeBackground } from "@/components/ui/GenerativeBackground";
import { TeamMemberCard } from "@/components/about/TeamMemberCard";
import { InteractiveDataViz } from "@/components/ui/InteractiveDataViz";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Runtime Studio is a senior technical consultancy for quality engineering, AI systems, and modern software delivery.",
  path: "/about",
});

// No real photography yet — TeamMemberCard falls back to initials when
// `image` is omitted. Add a file under public/images/team/ and set `image`
// once real headshots are available.
const teamMembers = [
  {
    name: "Placeholder Team Member 01",
    role: "Founding Partner",
    description: "Leads the vision and strategy for Runtime Studio, focusing on AI-native solutions.",
    expertise: [0.7, 0.8, 0.6, 0.9, 0.75], // Example data for InteractiveDataViz
  },
  {
    name: "Placeholder Team Member 02",
    role: "Head of Engineering",
    description: "Oversees the technical development and implementation of our core platforms.",
    expertise: [0.9, 0.7, 0.85, 0.6, 0.92], // Example data for InteractiveDataViz
  },
  // Add more team members as needed
];

export default function AboutPage() {
  return (
    <div className="relative isolate min-h-screen">
      <GenerativeBackground className="absolute inset-0 z-0" density={0.5} accentRatio={0.05} />
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="heading-display text-gradient-spectral mb-4">
            Building the Future of AI-Native Software
          </h1>
          <p className="description-standard mx-auto max-w-3xl text-balance">
            At Runtime Studio, we believe AI-native products demand a new design paradigm. We are
            a team of innovators dedicated to creating computational substrates that behave, not
            just depict, intelligence.
          </p>
        </header>

        <section className="mb-24">
          <h2 className="heading-section text-center mb-12">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="description-standard text-pretty">
                Founded on the principle that AI interfaces should be living, adaptive systems,
                Runtime Studio emerged from a desire to move beyond conventional &ldquo;AI
                aesthetics.&rdquo;
                We observed a landscape filled with generic dark canvases and glowing orbs,
                realizing that the true potential of AI-native design lay in embracing its
                computational nature.
              </p>
              <p className="pull-quote text-gradient-accent">
                The brand isn&apos;t a color. It&apos;s a function - and the interface is the field
                it renders.
              </p>
              <p className="description-standard text-pretty">
                Our journey began with a simple question: What if every color, size, rhythm, and
                motion was derived at runtime from a small set of axes and functions, rather than
                fixed assets? This led us to develop The Latent Field, our unique visual language
                that allows our products to behave computationally, offering a truly next-gen
                user experience.
              </p>
            </div>
            <div className="relative h-96 w-full panel-ticks bg-surface-elevated flex items-center justify-center">
                <span className="text-muted-light text-xl">Storytelling Visual Placeholder</span>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="heading-section text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="heading-section text-center mb-12">Our Expertise in Action</h2>
          <div className="field-lattice p-8 rounded-[var(--radius-lg)] bg-surface-subtle">
            <p className="description-standard text-center mb-8">
              We translate complex AI challenges into intuitive, performant, and beautiful
              solutions. Our approach is rooted in a deep understanding of emergent systems.
            </p>
            {/* Example of an interactive expertise display */}
            <div className="max-w-4xl mx-auto">
                <InteractiveDataViz label="Innovation Trajectory" seed={123} samples={40} height={180} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
