"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TimelineCard from "./TimelineCard";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type Props = {
  data: TimelineItem[];
  heading: string;
  subheading: string;
};

export function Timeline({ data, heading, subheading }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [dotStates, setDotStates] = useState<boolean[]>(() => data.map(() => false));

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 35%"],
  });

  const rawProgressPx = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const progressPx = useMotionValue(0);

  const smoothProgressPx = useSpring(progressPx, {
    stiffness: 90,
    damping: 22,
    mass: 0.55,
  });

  useEffect(() => {
    const unsubscribe = rawProgressPx.on("change", (latest) => {
      const timelineEl = timelineRef.current;
      if (!timelineEl) return;

      const totalHeight = timelineEl.offsetHeight;
      progressPx.set(latest * totalHeight);
    });

    return () => unsubscribe();
  }, [rawProgressPx, progressPx]);

  useEffect(() => {
    const unsubscribe = smoothProgressPx.on("change", (beamY) => {
      const timelineEl = timelineRef.current;
      if (!timelineEl) return;

      const timelineRect = timelineEl.getBoundingClientRect();

      const nextStates = dotRefs.current.map((dot) => {
        if (!dot) return false;

        const dotRect = dot.getBoundingClientRect();
        const dotCenterInTimeline = dotRect.top - timelineRect.top + dotRect.height / 2;

        return beamY >= dotCenterInTimeline;
      });

      setDotStates((prev) => {
        const changed =
          prev.length !== nextStates.length ||
          prev.some((value, index) => value !== nextStates[index]);

        return changed ? nextStates : prev;
      });
    });

    return () => unsubscribe();
  }, [smoothProgressPx]);

  const beamOpacity = useTransform(smoothProgressPx, (value) => (value > 2 ? 1 : 0));

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-7xl pt-8 pb-24">
      <div className="grid gap-14 md:grid-cols-2 md:gap-24">
        <div className="h-fit md:sticky md:top-1/2 md:-translate-y-1/2">
          <h2 className="text-3xl font-bold text-white md:text-5xl">{heading}</h2>

          <p className="mt-4 max-w-sm text-neutral-400 md:mt-6">{subheading}</p>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute top-0 left-3 h-full w-[2px] bg-neutral-800" />

          <motion.div
            style={{
              height: smoothProgressPx,
              opacity: beamOpacity,
            }}
            className="absolute top-0 left-3 w-[2px] origin-top bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500"
          />

          <div className="space-y-14 md:space-y-20">
            {data.map((item, index) => (
              <TimelineCard
                key={`${item.year}-${item.title}-${index}`}
                {...item}
                active={dotStates[index]}
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
