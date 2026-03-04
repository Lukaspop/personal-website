"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WaveEffects() {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let effect: any;

    const init = async () => {
      if (!vantaRef.current) return;

      const WAVES = (await import("vanta/dist/vanta.waves.min")).default;

      effect = WAVES({
        el: vantaRef.current,
        THREE,
        gyroControls: false,
        color: 0x1d1d1d,
        shininess: 20,
        waveHeight: 15,
        waveSpeed: 1.1,
        zoom: 1.12,
        scale: 1,
        scaleMobile: 1,
      });
    };

    init();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 h-full w-full" />;
}
