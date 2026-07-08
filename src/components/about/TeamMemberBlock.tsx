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
 * TeamMemberBlock — rendered as an abstract visual block rather than a photo
 * card. A colored field, faint drafting texture, and oversized initials stand
 * in for headshots while the team remains placeholder-only.
 */
export function TeamMemberBlock({ member, index }: TeamMemberBlockProps) {
  // Rotate the signal hue across the team for distinct, abstract fields.
  const hue = (24 + index * 75) % 360;
  const initials = getInitials(member.name);

  return (
    <article className={cn("group relative")}>
      <div className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `linear-gradient(145deg, oklch(0.58 0.18 ${hue}) 0%, oklch(0.38 0.12 ${hue}) 100%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 field-dots opacity-25"
        />
        <div className="absolute left-4 top-4 lg:left-6 lg:top-6">
          <span className="font-mono text-5xl lg:text-7xl font-bold leading-none text-white/25">
            {initials}
          </span>
        </div>
        <div className="relative z-10 p-4 lg:p-6">
          <p className="label-mono mb-2 text-white/75">{member.role}</p>
          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            {member.bio}
          </p>
        </div>
      </div>
    </article>
  );
}
