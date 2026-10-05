"use client";
import { ButtonHTMLAttributes } from "react";

// reusable button with site themes
const Button = ({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`flex w-full items-center justify-between bg-forest px-4 py-4 text-sm text-cream transition-colors hover:bg-forest-hover disabled:opacity-60 ${className}`}
      {...props}
    />
  );
};

export default Button;
