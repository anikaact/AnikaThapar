"use client";

import { useState } from "react";

const activities = [
  {
    name: "Undergraduate Student Board",
    role: "Panels & Social Wellness Lead",
    description:
      "The Computer Science Undergraduate Board is dedicated to improving the student experience for CS/DS/AI students at Purdue - whether by managing CS193, hosting forums for student advocacy, or maintaining a database of undergrad-tailored resources, USB is continually creating initiatives that will uphold our values.",
    favorite:
      "Being able to host events that students love! As the lead of 2 initiatives, I've had the privilege of being able to host events such as Love in Lawson and Career Panels. I've also been able to meet the MOST amazing, kind, and hardworking people :)",
    link: "purdueusb.com",
    href: "https://purdueusb.com",
    image: "/USB.png",
    imageAlt: "Undergraduate Student Board group photo",
    imageLeft: true,
  },
  {
    name: "Kappa Theta Pi Purdue",
    role: "Vice President of Marketing",
    description:
      "Kappa Theta Pi is the nation's first professional technology fraternity, founded at the University of Michigan in 2012. Our Alpha Kappa Chapter at Purdue brings together students passionate about technology to build careers, skills, and lifelong friendships.",
    favorite:
      "As a founding member, it was incredible to see the interest and community that we have been able to build in such a short amount of time! Each one of our brothers is an incredible person, and I'm always impressed with their professional development through KTP Purdue.",
    link: "ktppurdue.vercel.app/",
    href: "https://ktppurdue.vercel.app/",
    image: "/KTP.png",
    imageAlt: "Kappa Theta Pi Purdue chapter photo",
    imageLeft: false,
  },
  {
    name: "Purdue Stack",
    role: "Full Stack Software Engineer",
    description:
      "Purdue Stack bridges the gap between classroom theory and production-scale reality, crafting full-stack software and premium user experiences. Through this club, students are able to work on real client projects.",
    favorite:
      "The hours we spent working in the lab! I was lucky to be able to work for Continuity Pharma, building a web interface for their pharmaceutical manufacturing data visualization platform. I loved bonding with my team; they made the long stretches of coding feel short!",
    link: "www.purduestack.org/",
    href: "https://www.purduestack.org/",
    image: "/Stack.png",
    imageAlt: "Purdue Stack club working session",
    imageLeft: true,
  },
];

// Watercolor washes: [cx, cy, rx, ry, color, opacity] in a 1440 x 2000 canvas
const washes: [number, number, number, number, string, number][] = [
  // pale light near the surface
  [720, 80, 900, 260, "#ffffff", 0.85],
  [250, 260, 380, 220, "#bfe6ee", 0.55],
  [1180, 320, 420, 240, "#c9def5", 0.5],
  // mid-water blues, teals and a hint of lilac
  [180, 820, 340, 360, "#9fd6e2", 0.45],
  [1260, 900, 360, 380, "#a9d3ef", 0.45],
  [720, 1050, 620, 300, "#cdeaf0", 0.5],
  [400, 1350, 300, 220, "#d9d4f1", 0.35],
  [1050, 1400, 320, 240, "#bfe8dc", 0.45],
  // deeper water toward the floor
  [300, 1800, 520, 300, "#8fcbd8", 0.5],
  [1150, 1820, 520, 320, "#93c4e3", 0.5],
  [720, 1950, 800, 200, "#a8dccf", 0.45],
];

// Painted seaweed strands rising from the floor: [x, height, color]
const kelp: [number, number, string][] = [
  [60, 420, "#8cc9b4"],
  [110, 300, "#a6d8c2"],
  [170, 360, "#7fbfae"],
  [1280, 380, "#8cc9b4"],
  [1340, 460, "#7fbfae"],
  [1395, 300, "#a6d8c2"],
];

/** Full-bleed painted underwater scene: soft blooms, paper grain and seaweed. */
function WatercolorSea() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 2000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sea-depth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4fbfc" />
          <stop offset="0.45" stopColor="#dff2f5" />
          <stop offset="1" stopColor="#c3e4ea" />
        </linearGradient>
        <linearGradient id="sea-bottom-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.82" stopColor="#8fa876" stopOpacity="0" />
          <stop offset="0.94" stopColor="#8fa876" stopOpacity="0.75" />
          <stop offset="1" stopColor="#8fa876" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="sea-top-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="0.06" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="0.22" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.38" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {/* Wobbly, bleeding edges like pigment on wet paper */}
        <filter id="sea-bleed" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="90" />
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="sea-kelp" x="-50%" y="-10%" width="200%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="9" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" />
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        {/* Paper texture */}
        <filter id="sea-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="2" />
          <feColorMatrix values="0 0 0 0 0.25  0 0 0 0 0.4  0 0 0 0 0.45  0 0 0 0.09 0" />
        </filter>
      </defs>

      <rect width="1440" height="2000" fill="url(#sea-depth)" />

      <g filter="url(#sea-bleed)">
        {washes.map(([cx, cy, rx, ry, color, opacity], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill={color} opacity={opacity} />
        ))}
      </g>

      <g filter="url(#sea-kelp)" opacity="0.55">
        {kelp.map(([x, h, color], i) => (
          <path
            key={i}
            d={`M${x} 2000 C${x - 30} ${2000 - h * 0.25} ${x + 30} ${2000 - h * 0.5} ${x} ${2000 - h * 0.7} S${x - 20} ${2000 - h * 0.95} ${x + 8} ${2000 - h}`}
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
        ))}
      </g>

      <rect width="1440" height="2000" filter="url(#sea-paper)" />

      {/* Fade the top into the white page above for a seamless transition */}
      <rect width="1440" height="2000" fill="url(#sea-top-fade)" />

      {/* Fade the bottom into the green courses section below */}
      <rect width="1440" height="2000" fill="url(#sea-bottom-fade)" />
    </svg>
  );
}

/** A see-through bubble with a little highlight. */
function Bubble({ size }: { size: number }) {
  return (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        border: "1.5px solid rgba(255, 255, 255, 0.85)",
        background: "radial-gradient(circle at 32% 30%, rgba(255,255,255,0.9) 0 12%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.05) 70%)",
        boxShadow: "0 0 6px rgba(255, 255, 255, 0.5)",
      }}
    />
  );
}

// Bubbles that rise from the bottom of the section to the top, then respawn.
// duration = seconds for one full trip; negative delay = already mid-trip on page load.
const bubbles = [
  { size: 14, left: "4%", duration: 18, delay: 0 },
  { size: 9, left: "7%", duration: 22, delay: -6 },
  { size: 20, left: "10%", duration: 26, delay: -15 },
  { size: 11, left: "15%", duration: 19, delay: -11 },
  { size: 16, left: "22%", duration: 24, delay: -3 },
  { size: 8, left: "30%", duration: 17, delay: -9 },
  { size: 12, left: "38%", duration: 23, delay: -18 },
  { size: 18, left: "47%", duration: 27, delay: -7 },
  { size: 10, left: "55%", duration: 20, delay: -14 },
  { size: 14, left: "63%", duration: 25, delay: -2 },
  { size: 9, left: "71%", duration: 18, delay: -12 },
  { size: 22, left: "79%", duration: 28, delay: -20 },
  { size: 11, left: "86%", duration: 21, delay: -5 },
  { size: 16, left: "91%", duration: 24, delay: -16 },
  { size: 10, left: "95%", duration: 19, delay: -8 },
  { size: 13, left: "97%", duration: 26, delay: -22 },
];

// Light rays streaming down from the surface
const rays = [
  { left: "8%", width: 90, rotate: 18, opacity: 0.5 },
  { left: "22%", width: 50, rotate: 14, opacity: 0.35 },
  { left: "42%", width: 120, rotate: 10, opacity: 0.4 },
  { left: "63%", width: 60, rotate: 6, opacity: 0.35 },
  { left: "78%", width: 100, rotate: 2, opacity: 0.45 },
];

export default function Purdue() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section
      id="purdue"
      className="relative w-full pt-40 pb-52 px-8 md:px-24 mt-40 overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <WatercolorSea />

      {/* Light rays */}
      {rays.map((r, i) => (
        <div
          key={`ray-${i}`}
          className="absolute -top-20 pointer-events-none"
          style={{
            left: r.left,
            width: r.width,
            height: "75%",
            transform: `rotate(${r.rotate}deg)`,
            transformOrigin: "top",
            background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0))",
            filter: "blur(14px)",
            opacity: r.opacity,
            animation: `rayShimmer 6s ease-in-out ${i * 1.1}s infinite`,
          }}
        />
      ))}

      {/* Bubbles: each column spans the full section height and slides up by 100% of it */}
      {bubbles.map((b, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: b.left, animation: `bubbleFloat ${b.duration}s linear ${b.delay}s infinite` }}
        >
          <div
            className="absolute bottom-0"
            style={{ animation: `bubbleWobble ${2.5 + (i % 4) * 0.6}s ease-in-out ${i * 0.3}s infinite alternate` }}
          >
            <Bubble size={b.size} />
          </div>
        </div>
      ))}

      {/* Title */}
      <div className="relative z-10 flex flex-col items-center mb-10">
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-fit">
            <img
              src="/mofusand.png"
              alt="Mofusand"
              className="h-15 absolute top-0 left-1/2 -translate-x-1/2 -mt-15"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-black px-8 py-3 flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <h2 className="text-white text-3xl">Purdue involvement</h2>
            </button>
          </div>
        </div>
        <p className="text-xl text-center mt-6">
          I love staying active on campus! Here are some of my Purdue activities ^-^
        </p>
      </div>

      {/* Collapsible Activities */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="relative z-10 flex flex-col gap-10 max-w-5xl mx-auto py-4">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className="bg-white/55 backdrop-blur-sm rounded-3xl border border-white p-6 md:p-8"
                style={{ boxShadow: "0 8px 30px rgba(80, 150, 170, 0.15)" }}
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    activity.imageLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <img
                    src={activity.image}
                    alt={activity.imageAlt}
                    className="w-72 h-56 object-cover flex-shrink-0 rounded-2xl"
                    style={{ boxShadow: "0 4px 16px rgba(80, 150, 170, 0.2)" }}
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl text-center md:text-left mb-3">{activity.name}</h3>
                    <p className="text-base mb-1">
                      <span className="font-bold">Role:</span> {activity.role}
                    </p>
                    <p className="text-base mb-1">
                      <span className="font-bold">Description:</span> {activity.description}
                    </p>
                    <p className="text-base mb-1">
                      <span className="font-bold">Favorite part:</span> {activity.favorite}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Link:</span>{" "}
                      <a href={activity.href} className="underline hover:opacity-70" target="_blank" rel="noopener noreferrer">
                        {activity.link}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
