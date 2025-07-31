"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
const people = [
  {
    id: 1,
    name: "Paul",
    designation: "Senior Software Engineer",
    image:
      "/images/paul.jpg",
    link: "https://x.com/PaulHovley",
  },
  {
    id: 2,
    name: "Nathan",
    designation: "Founder",
    image:
      "/images/nathan.jpg",
    link: "https://x.com/nathan_covey",
  },
  {
    id: 3,
    name: "Arthur",
    designation: "Founder",
    image:
      "/images/arthur.jpg",
    link: "https://x.com/arthuryuzbashew",
  },
  {
    id: 4,
    name: "Dudu",
    designation: "Designer & Founder",
    image:
      "/images/dudu.jpg",
    link: "https://x.com/dudufolio",
  },
  {
    id: 5,
    name: "Luis",
    designation: "Full Stack Developer",
    image:
      "/images/luis.jpg",
    link: "https://x.com/luis_insights",
  },
  {
    id: 6,
    name: "Camden",
    designation: "Founder",
    image:
      "/images/camden.jpg",
    link: "https://x.com/camden_bean",
  },
  {
    id: 7,
    name: "Jesco",
    designation: "Founder",
    image:
      "/images/jesco.jpg",
    link: "https://x.com/GameDevMadeEasy",
  },
  {
    id: 8,
    name: "Tanner",
    designation: "Software Engineer",
    image:
      "/images/tanner.jpg",
    link: "https://x.com/TannerSDev",
  },
  {
    id: 9,
    name: "Nebojsa",
    designation: "Backend Engineer",
    image:
      "/images/nebojsa.jpg",
    link: "https://x.com/nebojsacoding",
  },
  {
    id: 10,
    name: "Juan",
    designation: "Senior Software Engineer",
    image:
      "/images/juan.jpg",
    link: "https://x.com/DonJuanDiablo",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
} 