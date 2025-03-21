
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
      "bg-gradient-to-r from-ocean-600 via-ocean-500 to-ocean-400 hover:from-ocean-700 hover:via-ocean-600 hover:to-ocean-500 text-white shadow-md",
    outline:
      "bg-transparent hover:bg-gradient-to-r hover:from-ocean-600/10 hover:via-ocean-500/10 hover:to-ocean-400/10 border border-ocean-500 text-ocean-600",
  };

  return (
    <button
      className={cn(
        "font-medium rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-ocean-500/50",
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
