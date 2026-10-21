import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38c6ec] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:-translate-y-px",
  {
    variants: {
      variant: {
        default: "bg-[#000000] text-white hover:opacity-90 shadow-sm",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline: "border border-[#ededed] bg-white text-[#000000] hover:bg-[#f2f2f2] shadow-sm",
        secondary: "bg-[#f2f2f2] text-[#000000] hover:bg-[#e6e6e6]",
        ghost: "text-[#b8b8b8] hover:bg-[#f2f2f2] hover:text-[#000000]",
        link: "text-[#38c6ec] underline-offset-4 hover:underline",
        hero: "bg-[#000000] text-white hover:opacity-90 shadow-lg",
        accent: "bg-[#38c6ec] text-white hover:opacity-90 shadow-sm",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 px-6 rounded-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
