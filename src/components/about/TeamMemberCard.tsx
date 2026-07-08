import Image from "next/image";
import { cn, withBasePath } from "@/lib/utils";
import { InteractiveDataViz } from "@/components/ui/InteractiveDataViz";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  expertise: number[];
  image?: string;
};

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  // Rotate the signal hue based on the index for unique visual elements
  const dynamicHue = (24 + index * 60) % 360; // Rotate hue by 60 degrees for each member

  return (
    <div
      className={cn("card panel-ticks p-6 flex flex-col items-center text-center card-interactive")}
      style={{ "--signal-hue": dynamicHue } as React.CSSProperties} // Apply dynamic hue
    >
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full mb-4 border border-border-strong bg-surface-elevated">
        {member.image ? (
          <Image
            src={withBasePath(member.image)}
            alt={member.name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-out"
          />
        ) : (
          <span className="label-mono text-lg text-accent" aria-hidden="true">
            {getInitials(member.name)}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-accent mb-3 text-sm">{member.role}</p>
      <p className="description-sm mb-6 text-balance">{member.description}</p>
      <div className="w-full">
        <InteractiveDataViz
          data={member.expertise}
          label="Expertise Field"
          unit="%"
          variant="wave"
          height={80}
          className="!rounded-[var(--radius-md)]"
        />
      </div>
    </div>
  );
}
