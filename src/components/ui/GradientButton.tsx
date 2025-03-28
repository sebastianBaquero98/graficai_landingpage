
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const GradientButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: GradientButtonProps) => {
  const sizeClasses = {
    default: "py-2 px-4 text-sm",
    sm: "py-1 px-3 text-xs",
    lg: "py-3 px-6 text-base",
  };

  const variantClasses = {
    default:
      "bg-gradient-to-r from-dataviz-600 via-dataviz-500 to-dataviz-400 hover:from-dataviz-700 hover:via-dataviz-600 hover:to-dataviz-500 text-white shadow-md",
    outline:
      "bg-transparent hover:bg-gradient-to-r hover:from-dataviz-600/10 hover:via-dataviz-500/10 hover:to-dataviz-400/10 border border-dataviz-500 text-dataviz-600",
  };

  return (
    <button
      className={cn(
        "font-medium rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-dataviz-500/50",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
