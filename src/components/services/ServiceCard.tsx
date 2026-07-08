import Image from "next/image";
import Link from "next/link";
import { Service } from "@/content/services";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ChevronRight } from "lucide-react";
import { withBasePath } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card card-interactive panel-ticks spectral-edge relative flex flex-col justify-between overflow-hidden p-6 transition-all duration-300"
    >
      <div className="relative z-10 flex-grow">
        <Text className="label-mono text-muted-light">
          {service.number}
        </Text>
        <Heading level="h3" className="mt-2">
          {service.title}
        </Heading>
        <Text className="mt-4 text-muted">
          {service.shortDescription}
        </Text>
      </div>

      {service.overviewVisual && (
        <div
          className={`absolute inset-0 transition-transform duration-300 group-hover:scale-105 ${
            index % 2 === 0 ? "translate-x-1/4" : "-translate-x-1/4"
          }`}
        >
          <Image
            src={withBasePath(service.overviewVisual)}
            alt={service.title}
            fill
            className="object-cover object-center opacity-20"
          />
        </div>
      )}

      <div className="relative z-10 mt-6 flex items-center justify-between">
        <span className="flex items-center text-sm font-medium text-accent-strong transition-colors group-hover:text-accent">
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};
