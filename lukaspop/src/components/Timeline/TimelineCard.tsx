"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

type Props = {
  year: string;
  title: string;
  description: string;
  active: boolean;
  dashed?: boolean;
};

function fixCzechOrphans(text: string) {
  return text.replace(/(^|\s)([A-Za-zÀ-ž])\s+/g, "$1$2\u00A0");
}

const TimelineCard = forwardRef<HTMLDivElement, Props>(
  ({ year, title, description, active, dashed }, dotRef) => {
    return (
      <div className="relative pl-16 md:pl-20">
        <div
          ref={dotRef}
          className={`absolute top-1/2 left-[5px] z-10 h-4 w-4 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
            dashed
              ? "border-dashed border-neutral-500 bg-transparent"
              : active
                ? "scale-110 border-white bg-white shadow-[0_0_10px_rgba(255,255,255,0.28)]"
                : "border-neutral-600 bg-neutral-700"
          }`}
        />

        <motion.div
          animate={
            dashed
              ? { opacity: 0.6, scale: 1 }
              : {
                  opacity: active ? 1 : 0.76,
                  scale: active ? 1 : 0.985,
                }
          }
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={`relative rounded-xl p-5 backdrop-blur md:p-6 ${
            dashed
              ? "border border-dashed border-neutral-600 bg-neutral-900/20"
              : "border border-neutral-700 bg-neutral-900/40"
          }`}
        >
          <span
            className={`absolute top-4 right-4 text-xs ${
              dashed ? "text-neutral-500 italic" : "text-neutral-500"
            }`}
          >
            {year}
          </span>

          <h3
            className={`text-base font-semibold md:text-lg ${
              dashed ? "text-neutral-300" : "text-white"
            }`}
          >
            {fixCzechOrphans(title)}
          </h3>

          <p
            className={`mt-2 text-sm leading-relaxed md:mt-3 ${
              dashed ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            {fixCzechOrphans(description)}
          </p>
        </motion.div>
      </div>
    );
  }
);

TimelineCard.displayName = "TimelineCard";

export default TimelineCard;
