"use client";

import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconColor?: string;
}

// fix na české jednopísmenné předložky
function fixCzechOrphans(text: string) {
  return text.replace(/(^|\s)([A-Za-zÀ-ž])\s+/g, "$1$2\u00A0");
}

// převede hex barvu na rgba s průhledností
function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "");

  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((char) => char + char)
          .join("")
      : cleanHex;

  const r = parseInt(fullHex.slice(0, 2), 16);
  const g = parseInt(fullHex.slice(2, 4), 16);
  const b = parseInt(fullHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ServiceCard({ title, description, icon, iconColor = "#ffffff" }: ServiceCardProps) {
  const accent = iconColor;
  const iconBg = hexToRgba(accent, 0.18);

  return (
    <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#0D0D0D]">
      {/* Icon */}
      <div
        className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{
          backgroundColor: iconBg,
        }}
      >
        <div
          style={{
            color: accent,
          }}
        >
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="pr-14 text-xl leading-snug font-semibold text-white">
        {fixCzechOrphans(title)}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-relaxed text-neutral-400">{fixCzechOrphans(description)}</p>
    </div>
  );
}
