import { Section, SectionHeader } from "@/components/ui/Section";
import { ServiceTag } from "@/components/services/ServiceTag";
import { techStack, techStackContent } from "@/content/techStack";
import { accentClasses } from "@/content/services";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  return (
    <Section border field="lattice">
      <SectionHeader
        label={techStackContent.label}
        title={techStackContent.title}
        description={techStackContent.subtitle}
        align="center"
      />

      <div className="border-t border-border">
        {techStack.map((category) => {
          const accent = accentClasses[category.accent];

          return (
            <div
              key={category.category}
              className="grid grid-cols-1 items-start gap-6 border-b border-border py-10 lg:grid-cols-12 lg:gap-6 lg:py-12"
            >
              <div className="lg:col-span-4">
                <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {category.category}
                </h3>
                <p className={cn("mt-2 label-mono", accent.text)}>
                  {category.scope}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="max-w-xl description-standard">
                  {category.description}
                </p>
              </div>

              <div className="lg:col-span-3">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {category.tools.map((tool) => (
                    <ServiceTag key={tool} accent={category.accent}>
                      {tool}
                    </ServiceTag>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
