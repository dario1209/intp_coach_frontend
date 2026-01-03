import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default:
    "border-transparent bg-deco-gold text-deco-navy hover:bg-deco-bronze",
  secondary:
    "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200",
  destructive:
    "border-transparent bg-red-500 text-white hover:bg-red-600",
  outline: "text-slate-700 border-slate-300",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-deco-gold focus:ring-offset-2",
          badgeVariants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
