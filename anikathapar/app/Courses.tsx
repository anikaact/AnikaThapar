"use client";

import { useState } from "react";

// Add past semesters here — newest first
const semesters = [
  {
    label: "Spring 2026",
    courses: [
      { code: "CS 252", name: ["Systems", "Programming"] },
      { code: "CS 307", name: ["Software", "Engineering 1"] },
      { code: "CS 407", name: ["Introduction to", "AI"] },
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

export default function Courses() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section
      id="courses"
      className="relative w-full py-16 overflow-hidden mt-40"
      style={{ backgroundColor: "#8fa876" }}
    >
      {/* Cherry blossom tree - behind everything */}
      <img
        src="/mc_cherry_tree.png"
        alt=""
        className="absolute top-0 right-0 h-100 -mt-20 w-auto pointer-events-none z-0"
      />

      {/* Blossoms at the base of the tree */}
      <img src="/blossom_2.png" alt="" className="absolute top-60 h-34 right-[1%] w-auto pointer-events-none z-0" />
      <img src="/blossom_3.png" alt="" className="absolute top-50 h-34 right-[6%] w-auto pointer-events-none z-0" />
      <img src="/blossom_1.png" alt="" className="absolute top-60 h-34 right-[11%] w-auto pointer-events-none z-0" />
      <img src="/blossom_2.png" alt="" className="absolute top-70 h-34 right-[15%] w-auto pointer-events-none z-0" />
      <img src="/blossom_3.png" alt="" className="absolute top-60 h-34 right-[3%] w-auto pointer-events-none z-0" />

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
