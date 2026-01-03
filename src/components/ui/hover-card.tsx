"use client";

import * as React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

interface HoverCardProps {
  children: React.ReactNode;
}

export function HoverCard({ children }: HoverCardProps) {
  return <Popover className="relative">{children}</Popover>;
}

interface HoverCardTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export function HoverCardTrigger({ children, asChild }: HoverCardTriggerProps) {
  return <PopoverButton as={asChild ? React.Fragment : "div"}>{children}</PopoverButton>;
}

interface HoverCardContentProps {
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
}

export function HoverCardContent({ children, side = "top", className = "" }: HoverCardContentProps) {
  const sideClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <PopoverPanel
      className={`absolute z-50 rounded-md shadow-lg p-4 ${sideClasses[side]} ${className}`}
    >
      {children}
    </PopoverPanel>
  );
}
