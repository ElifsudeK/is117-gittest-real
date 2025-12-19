import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: "default" | "wide" | "narrow" | "none";
  spacing?: "default" | "compact" | "loose" | "none";
  background?: "default" | "muted" | "accent";
}

export function Section({ 
  children, 
  className, 
  container = "default", 
  spacing = "default",
  background = "default",
  ...props 
}: SectionProps) {
  
  const containerStyles = {
    default: "container mx-auto px-6 md:px-12",
    wide: "container-wide",
    narrow: "container mx-auto px-6 max-w-3xl",
    none: "",
  };

  const spacingStyles = {
    default: "py-16 md:py-24",
    compact: "py-8 md:py-16",
    loose: "py-24 md:py-32",
    none: "",
  };

  const bgStyles = {
    default: "bg-background",
    muted: "bg-secondary/30",
    accent: "bg-accent/10",
  };

  return (
    <section 
      className={cn(
        spacingStyles[spacing],
        bgStyles[background],
        className
      )} 
      {...props}
    >
      <div className={containerStyles[container]}>
        {children}
      </div>
    </section>
  );
}
