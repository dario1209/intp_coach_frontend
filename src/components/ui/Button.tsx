import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-deco-gold text-deco-navy hover:bg-deco-bronze",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-deco-gold bg-transparent hover:bg-deco-gold/10 text-deco-gold",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "hover:bg-deco-gold/10 text-current",
    link: "text-deco-gold underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deco-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

