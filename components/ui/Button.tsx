"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const base =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
