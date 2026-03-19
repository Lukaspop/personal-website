"use client";

import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconColor?: string;
}

export function ServiceCard({ title, description, icon, iconColor }: ServiceCardProps) {
  const accent = iconColor ?? "#FAFAFA";

  return (
    <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8">
      <div
        className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{
          background: iconColor ? `${accent}30` : "rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            color: accent,
            filter: `drop-shadow(0 0 8px ${accent})`,
          }}
        >
          {icon}
        </div>
      </div>

      <h3 className="text-primary pr-12 text-xl font-semibold">{title}</h3>

      <p className="mt-5 leading-relaxed text-neutral-400">{description}</p>
    </div>
  );
}
