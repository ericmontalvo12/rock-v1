"use client";

import { Check } from "lucide-react";

const trustPoints = [
  "Research-Backed",
  "Fully Disclosed",
  "Batch Tested",
  "30-Day Guarantee",
];

export function TrustBar() {
  return (
    // Only show on mobile (hidden on sm+)
    <section className="sm:hidden bg-[#0b1320] py-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-white/80 text-xs font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
