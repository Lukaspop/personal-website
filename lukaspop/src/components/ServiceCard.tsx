"use client";

import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconColor?: string;
}

export function ServiceCard({ title, description, icon, iconColor }: ServiceCardProps) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8">
      <div
        className="absolute top-6 right-6"
        style={{ color: iconColor ?? "rgba(255,255,255,0.3)" }}
      >
        {icon}
      </div>
      <h3 className="pr-12 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-relaxed text-neutral-400">{description}</p>
    </div>
  );
}
