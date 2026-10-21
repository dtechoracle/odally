import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "success" | "warning" | "error" | "neutral" | "info";
}

const badgeVariants = {
  default: "bg-slate-100 text-slate-700 border-transparent",
  outline: "border-slate-200 bg-white text-slate-600",
  success: "bg-green-50 text-green-700 border-transparent",
  warning: "bg-amber-50 text-amber-700 border-transparent",
  error: "bg-red-50 text-red-700 border-transparent",
  neutral: "bg-slate-50 text-slate-500 border-transparent",
  info: "bg-sky-50 text-sky-700 border-transparent",
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
