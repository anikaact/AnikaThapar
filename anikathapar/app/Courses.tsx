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
  // {
  //   label: "Fall 2025",
  //   courses: [
  //     { code: "CS 180", name: ["Problem Solving &", "Object-Oriented Programming"] },
  //   ],
  // },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative w-full py-16 overflow-hidden"
      style={{ backgroundColor: "#8fa876" }}
    >
      {/* Cherry blossom tree - behind everything */}
      <img
        src="/mc_cherry_tree.png"
        alt=""
        className="absolute top-0 right-0 h-100 -mt-20 w-auto pointer-events-none z-0"
      />

      {/* Scattered blossoms */}
      <img src="/blossom_1.png" alt="" className="absolute bottom-20 h-34 left-[15%] pointer-events-none z-0" />
      <img src="/blossom_2.png" alt="" className="absolute bottom-20 h-34 left-[28%] pointer-events-none z-0" />
      <img src="/blossom_3.png" alt="" className="absolute bottom-20 h-34 right-[25%] pointer-events-none z-0" />
      <img src="/blossom_1.png" alt="" className="absolute bottom-20 h-34 right-[10%] pointer-events-none z-0" />

      {/* Blossoms at the base of the tree */}
      <img src="/blossom_2.png" alt="" className="absolute bottom-30 h-24 right-[1%] h-16 w-auto pointer-events-none z-0" />
      <img src="/blossom_3.png" alt="" className="absolute bottom-35 h-34 right-[6%] h-12 w-auto pointer-events-none z-0" />
      <img src="/blossom_1.png" alt="" className="absolute bottom-40 h-34 right-[11%] h-14 w-auto pointer-events-none z-0" />
      <img src="/blossom_2.png" alt="" className="absolute bottom-20 h-34 right-[15%] h-10 w-auto pointer-events-none z-0" />
      <img src="/blossom_3.png" alt="" className="absolute bottom-12 h-34 right-[3%] h-10 w-auto pointer-events-none z-0" />

      {/* Title */}
      <div className="relative z-10 flex justify-center mb-30">
        <div className="bg-black px-8 py-3">
          <h2 className="text-white text-3xl">courses</h2>
        </div>
      </div>

      {/* Semesters */}
      {semesters.map((semester) => (
        <div key={semester.label} className="relative z-10 mb-12">
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
        </div>
      ))}
    </section>
  );
}
