"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "./glowing-effect";

interface GlowingExpCardWithEffectProps {
  className?: string;
  iconSrc: string;
  title: string;
  description: string;
}

export const GlowingExpCardWithEffect = ({
  className,
  iconSrc,
  title,
  description,
}: GlowingExpCardWithEffectProps) => {
  return (
    <div className={cn("exp-card relative", className)}>
      <div className="relative z-10 flex flex-col items-center p-6">
        <img src={iconSrc} alt="service" className="mb-4" />
        <h4 className="card-header text-center mb-3">{title}</h4>
        <p className="card-text text-center">{description}</p>
      </div>
      <GlowingEffect 
        disabled={false} 
        glow={true} 
        blur={10}
        spread={30}
        borderWidth={2}
        variant="default"
        inactiveZone={0.4}
        proximity={100}
        movementDuration={1.5}
      />
    </div>
  );
};