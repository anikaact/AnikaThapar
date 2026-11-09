const experiences = [
  {
    company: "Flovision Solutions",
    role: "Software Engineering & Machine Learning Intern",
    location: "Remote",
    dates: "Oct 2025 – Present",
    setNumber: "ML-001",
    cardColor: "#FFF0A3",
    studColor: "#F0D870",
    textColor: "#000000",
    bullets: [
      "Deployed a centralized AI agent management system using Docker, AWS ECS, and AWS ECR, improving internal efficiency for software and machine learning teams through scalable workflows and reduced configuration overhead.",
      "Optimized a computer vision data pipeline by managing Amazon S3 buckets containing 1,000+ hours of raw facility video data, benchmarking multiple OCR engines to achieve 99.5% text detection accuracy.",
    ],
  },
  {
    company: "Sierra Ventures",
    role: "Software Engineer Intern",
    location: "San Mateo, CA",
    dates: "May 2025 – Aug 2025",
    setNumber: "SWE-002",
    cardColor: "#FFB3C1",
    studColor: "#F090A0",
    textColor: "#000000",
    bullets: [
      "Architected an automated data scraping pipeline using BeautifulSoup to extract 1,500+ startup profiles, reducing manual data entry by 15 hours/week and enabling real-time due diligence processing for the investment team.",
      "Created Python workflows with OpenAI API, applying prompt engineering to enrich due diligence and sourcing.",
    ],
  },
  {
    company: "Arrcus",
    role: "Backend Engineer Intern",
    location: "San Jose, CA",
    dates: "Jun 2024 – Aug 2024",
    setNumber: "BE-003",
    cardColor: "#B3D4FF",
    studColor: "#8ABBF0",
    textColor: "#000000",
    bullets: [
      "Developed Python script using pexpect and multi-threading to detect core dumps, improved detection by 5x.",
      "Built automated email notification system, delivering comprehensive core dump reports to engineering team.",
      "Implemented 4 Jinja2 templates to streamline configuration testing across multiple networking protocols.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="career"
      className="w-full py-16 px-8 md:px-16 mt-40"
      style={{
        backgroundColor: "#e8e8e8",
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.12) 2px, transparent 2px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative w-fit mx-auto">
          <img
            src="/lego_orchid.png"
            alt="Lego Orchid"
            className="h-38 absolute -top-5 left-14 -translate-x-1/2 -mt-32"
          />
          <div className="bg-black px-8 py-3">
            <h2 className="text-white text-3xl">career builds</h2>
          </div>
        </div>
        <p className="text-xl text-center mt-6">here are some sets I&apos;ve been building ^-^</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experiences.map((exp) => (
          <div key={exp.company} className="border-4 border-black overflow-hidden flex flex-col">

            {/* Colored header */}
            <div style={{ backgroundColor: exp.cardColor }} className="px-4 pt-3 pb-2">
              <div className="flex justify-between items-start gap-2">
                <span style={{ color: exp.textColor }} className="font-bold text-lg leading-tight">{exp.company}</span>
                <span style={{ color: exp.textColor }} className="text-xs opacity-75 whitespace-nowrap mt-1">SET #{exp.setNumber}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span style={{ color: exp.textColor }} className="text-sm">{exp.dates}</span>
                <span style={{ color: exp.textColor }} className="text-xs opacity-80">{exp.location}</span>
              </div>
            </div>

            {/* Stud row */}
            <div
              className="flex px-3 py-1.5 gap-1.5 overflow-hidden"
              style={{ backgroundColor: exp.studColor }}
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: exp.cardColor, border: "1.5px solid rgba(0,0,0,0.25)" }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="p-4 bg-white flex-1">
              <h3 className="text-xl font-bold mb-3">{exp.role}</h3>
              <p className="text-xs tracking-widest font-bold mb-2" style={{ opacity: 0.5 }}>BUILD STEPS:</p>
              <ol className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="font-bold flex-shrink-0">[{i + 1}]</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Footer */}
            <div className="bg-black px-4 py-1.5 flex justify-end">
              <span className="text-white text-xs font-bold tracking-[0.3em]">LEGO®</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
