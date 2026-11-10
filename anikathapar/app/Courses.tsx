"use client";

import { useState } from "react";

// Add past semesters here — newest first
const semesters = [
  {
    label: "Fall 2026",
    courses: [
      { code: "CS 354", name: ["Operating", "Systems"] },
      { code: "CS 408", name: ["Software", "Testing"] },
      { code: "PHYS 272", name: ["Electric and", "Magnetic Interactions"] },
      { code: "ANTH 205", name: ["Human Cultural", "Diversity"] },
    ],
  },
  {
    label: "Spring 2026",
    courses: [
      { code: "CS 252", name: ["Systems", "Programming"] },
      { code: "CS 307", name: ["Software", "Engineering 1"] },
      { code: "CS 471", name: ["Introduction to", "AI"] },
      { code: "COM 217", name: ["Scientific Writing", "& Presentation"] },
    ],
  },
  {
    label: "Fall 2025",
    courses: [
      { code: "CS 250", name: ["Computer", "Architecture"] },
      { code: "CS 251", name: ["Data Structures", "& Algorithms"] },
      { code: "STAT 350", name: ["Introduction to", "Statistics"] },
      { code: "ENTR 310", name: ["Management", "for New Ventures"] },
    ],
  },
  {
    label: "Spring 2025",
    courses: [
      { code: "CS 240", name: ["Programming", "in C"] },
      { code: "CS 182", name: ["Foundations of", "Computer Science"] },
      { code: "SCLA 101", name: ["Critical Thinking", "& Communication"] },
      { code: "MA 260", name: ["Linear", "Algebra"] },
    ],
  },
  {
    label: "Fall 2024",
    courses: [
      { code: "CS 180", name: ["Object-Oriented", "Programming"] },
      { code: "MA 261", name: ["Multivariate", "Calculus"] },
      { code: "ENTR 200", name: ["Entrepreneurship", "& Innovation"] },
      { code: "TDM 101", name: ["The Data", "Mine"] },
    ],
  },
];

// Pixel-art petal shapes (each cell is one "pixel"): 1 = light pink, 2 = mid pink, 3 = deep pink
const petalShapes = [
  [
    [0, 1, 0],
    [1, 2, 1],
    [0, 3, 0],
  ],
  [
    [1, 1, 0],
    [2, 2, 1],
    [0, 3, 0],
  ],
  [
    [0, 1],
    [2, 3],
  ],
];
const petalColors = ["", "#fbd3e4", "#f4a6c8", "#e27aa8"];

/** Tiny blocky cherry blossom petal to match the pixel-art tree. */
function PixelPetal({ shape, pixel }: { shape: number[][]; pixel: number }) {
  return (
    <svg
      width={shape[0].length * pixel}
      height={shape.length * pixel}
      viewBox={`0 0 ${shape[0].length} ${shape.length}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {shape.map((row, y) =>
        row.map((c, x) => (c ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={petalColors[c]} /> : null))
      )}
    </svg>
  );
}

// Petals falling from the top of the section to the bottom, then starting over.
// More petals start toward the right, under the tree. Negative delay = already mid-fall on load.
const petals = [
  { left: "3%", duration: 16, delay: -4, shape: 0, pixel: 4 },
  { left: "9%", duration: 21, delay: -12, shape: 2, pixel: 4 },
  { left: "16%", duration: 18, delay: -1, shape: 1, pixel: 3 },
  { left: "23%", duration: 24, delay: -17, shape: 0, pixel: 5 },
  { left: "31%", duration: 17, delay: -8, shape: 2, pixel: 3 },
  { left: "38%", duration: 22, delay: -14, shape: 1, pixel: 4 },
  { left: "46%", duration: 19, delay: -6, shape: 0, pixel: 3 },
  { left: "53%", duration: 25, delay: -20, shape: 2, pixel: 5 },
  { left: "60%", duration: 18, delay: -3, shape: 1, pixel: 4 },
  { left: "66%", duration: 20, delay: -11, shape: 0, pixel: 4 },
  { left: "71%", duration: 16, delay: -15, shape: 2, pixel: 3 },
  { left: "76%", duration: 23, delay: -2, shape: 1, pixel: 5 },
  { left: "80%", duration: 17, delay: -9, shape: 0, pixel: 4 },
  { left: "84%", duration: 21, delay: -18, shape: 2, pixel: 4 },
  { left: "88%", duration: 15, delay: -5, shape: 1, pixel: 3 },
  { left: "92%", duration: 19, delay: -13, shape: 0, pixel: 5 },
  { left: "95%", duration: 22, delay: -7, shape: 2, pixel: 4 },
  { left: "98%", duration: 18, delay: -16, shape: 1, pixel: 3 },
];

export default function Courses() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section
      id="courses"
      className="relative w-full pt-44 pb-28 overflow-hidden"
      style={{ backgroundColor: "#8fa876" }}
    >
      {/* Cherry blossom tree - behind everything */}
      <img
        src="/mc_cherry_tree.png"
        alt=""
        className="absolute top-0 right-0 h-100 w-auto pointer-events-none z-0"
      />

      {/* Blossoms at the base of the tree */}
      <img src="/blossom_2.png" alt="" className="absolute top-80 h-34 right-[1%] w-auto pointer-events-none z-0" />
      <img src="/blossom_3.png" alt="" className="absolute top-70 h-34 right-[6%] w-auto pointer-events-none z-0" />
      <img src="/blossom_1.png" alt="" className="absolute top-80 h-34 right-[11%] w-auto pointer-events-none z-0" />
      <img src="/blossom_2.png" alt="" className="absolute top-90 h-34 right-[15%] w-auto pointer-events-none z-0" />
      <img src="/blossom_3.png" alt="" className="absolute top-80 h-34 right-[3%] w-auto pointer-events-none z-0" />

      {/* Falling petals: each column spans the section height and slides down by 100% of it */}
      {petals.map((p, i) => (
        <div
          key={`petal-${i}`}
          className="absolute inset-y-0 pointer-events-none z-20"
          style={{ left: p.left, animation: `petalFall ${p.duration}s linear ${p.delay}s infinite` }}
        >
          <div
            className="absolute top-0"
            style={{ animation: `petalSway ${2.8 + (i % 4) * 0.5}s ease-in-out ${i * 0.4}s infinite alternate` }}
          >
            <PixelPetal shape={petalShapes[p.shape]} pixel={p.pixel} />
          </div>
        </div>
      ))}

      {/* Title */}
      <div className="relative z-10 flex justify-center items-center gap-3 mb-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black px-8 py-3 flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <h2 className="text-white text-3xl">courses</h2>
        </button>
      </div>

      {/* Collapsible Semesters */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          {semesters.map((semester) => (
            <div key={semester.label} className="relative z-10 -mb-5 pb-16">
              <p className="text-center text-white text-2xl mb-10">{semester.label}</p>

              {/* Course cards */}
              <div className="flex justify-center gap-6 px-8 -mt-10 flex-wrap items-end">
                {semester.courses.map((course) => (
                  <div
                    key={course.code}
                    className="flex flex-col items-center justify-center text-center w-[260px] h-[160px]"
                    style={{
                      backgroundImage: "url('/sign.png')",
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      fontFamily: "var(--font-vt323)",
                    }}
                  >
                    <p className="text-black text-2xl mb-0" style={{ letterSpacing: "0.3em" }}>{course.code}</p>
                    {course.name.map((line, i) => (
                      <p key={i} className="text-black text-lg" style={{ letterSpacing: "0.2em", lineHeight: "2" }}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Blossoms at the bottom of this row */}
              <img src="/blossom_1.png" alt="" className="absolute bottom-10 h-34 left-[15%] pointer-events-none z-0" />
              <img src="/blossom_2.png" alt="" className="absolute bottom-10 h-34 left-[28%] pointer-events-none z-0" />
              <img src="/blossom_3.png" alt="" className="absolute bottom-10 h-34 right-[25%] pointer-events-none z-0" />
              <img src="/blossom_1.png" alt="" className="absolute bottom-10 h-34 right-[10%] pointer-events-none z-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
