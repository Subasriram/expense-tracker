"use client";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`p-4 shadow-md rounded-lg bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
