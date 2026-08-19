import { cn } from "@/lib/utils";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

type TeamMemberBlockProps = {
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

/**
 * TeamMemberBlock — rendered as an abstract visual block with an editorial
 * aesthetic. A warm neutral field with oversized initials stands in for
 * headshots while the team remains placeholder-only.
 */
export function TeamMemberBlock({ member, index }: TeamMemberBlockProps) {
  const initials = getInitials(member.name);

  return (
    <article className={cn("group relative")}>
      <div className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden border border-border">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-foreground/5"
        />
        <div className="absolute left-4 top-4 lg:left-6 lg:top-6">
          <span
            className="text-5xl lg:text-7xl font-bold leading-none text-accent/20"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {initials}
          </span>
        </div>
        <div className="relative z-10 p-4 lg:p-6">
          <p className="label-mono mb-2 text-foreground/70">{member.role}</p>
          <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            {member.bio}
          </p>
        </div>
      </div>
    </article>
  );
}
