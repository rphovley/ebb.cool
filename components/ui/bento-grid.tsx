import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  description: string;
  children?: ReactNode;
  backgroundComponent?: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  description,
  children,
  backgroundComponent,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-end overflow-hidden rounded-xl h-full",
      "border bg-card/20 shadow-sm",
      className,
    )}
    {...props}
  >
    {children}
    <div className="z-10 m-2 rounded-lg bg-[--background]/75 p-4 backdrop-blur-lg">
      <div className="pointer-events-none flex transform-gpu flex-col gap-1 transition-all duration-300">
        <h2 className="text-xl font-semibold text-card-foreground">
          {name}
        </h2>
        <p className="max-w-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
