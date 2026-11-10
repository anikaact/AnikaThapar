import Sticker, { type StickerType } from "./Stickers";

const experiences: {
  company: string;
  role: string;
  location: string;
  dates: string;
  color: string;
  accent: string;
  sticker: { type: StickerType; color: string };
  bullets: string[];
}[] = [
  {
    company: "Flovision",
    role: "Software Engineering Intern",
    location: "Remote",
    dates: "Oct 2025 – Aug 2026",
    color: "#FFF0A3",
    accent: "#E8C547",
    sticker: { type: "star", color: "#F5C842" },
    bullets: [
      "Engineered a DVR buffer system for live HLS streams using GCP (Cloud Run, Cloud Storage, Valkey, BigQuery) synchronized with custom Flutter client engine, enabling customers to rewind up to 30 minutes of live playback.",
      "Integrated L2 caching layer using Valkey and optimized backend queries, containerized with Docker and deployed via AWS ECS and ECR, reducing analytics page load time from 3.2s to under 50ms.",
      "Optimized a computer vision data pipeline by managing AWS S3 buckets containing 1,000+ hours of raw facility video data, benchmarking multiple OCR engines to achieve 99.5% text detection accuracy.",
    ],
  },
  {
    company: "Continuity Pharma",
    role: "Fullstack Software Engineer",
    location: "West Lafayette, IN",
    dates: "Feb 2025 – May 2025",
    color: "#C2EBC2",
    accent: "#6FBF6F",
    sticker: { type: "gem", color: "#5CC28A" },
    bullets: [
      "Developed persistent Python-based relay client on a Raspberry Pi connecting to an EC2-hosted backend, implementing exponential backoff and heartbeat monitoring, reducing manual restarts by 95%.",
      "Optimized backend data pipelines to support partial system operations, maintaining uninterrupted data flow.",
    ],
  },
  {
    company: "Sierra Ventures",
    role: "Software Engineer Intern",
    location: "San Mateo, CA",
    dates: "May 2025 – Aug 2025",
    color: "#FFB3C1",
    accent: "#E8738F",
    sticker: { type: "heart", color: "#F27BA0" },
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
    color: "#B3D4FF",
    accent: "#6FA3E8",
    sticker: { type: "butterfly", color: "#F7A8D0" },
    bullets: [
      "Developed Python script using pexpect and multi-threading to detect core dumps, improved detection by 5x.",
      "Implemented 4 Jinja2 templates to streamline configuration testing across multiple networking protocols.",
    ],
  },
];

// Sticker clusters scattered over the background (like a decorated photo)
const clusters: { type: StickerType; color: string; size: number; rotate: number; pos: string }[] = [
  // top-left
  { type: "heart", color: "#7FD6D0", size: 34, rotate: -15, pos: "top-[6%] left-[3%]" },
  { type: "gem", color: "#E0A040", size: 62, rotate: 10, pos: "top-[4%] left-[8%]" },
  { type: "round", color: "#F5C842", size: 50, rotate: 0, pos: "top-[5%] left-[15%]" },
  { type: "gem", color: "#C93A6B", size: 66, rotate: -8, pos: "top-[11%] left-[2%]" },
  { type: "star", color: "#4FC9C0", size: 74, rotate: 8, pos: "top-[10%] left-[9%]" },
  { type: "heart", color: "#F7A8C8", size: 40, rotate: 12, pos: "top-[10%] left-[16%]" },
  { type: "sparkle", color: "#F0B8D8", size: 34, rotate: 0, pos: "top-[17%] left-[3%]" },
  { type: "butterfly", color: "#F7A8D0", size: 50, rotate: -10, pos: "top-[18%] left-[8%]" },
  { type: "star", color: "#E8C860", size: 40, rotate: -12, pos: "top-[16%] left-[15%]" },
  // top-right
  { type: "sparkle", color: "#ffffff", size: 30, rotate: 0, pos: "top-[5%] right-[6%]" },
  { type: "heart", color: "#E0405A", size: 46, rotate: 10, pos: "top-[8%] right-[12%]" },
  { type: "star", color: "#F27BA0", size: 38, rotate: -8, pos: "top-[12%] right-[5%]" },
  { type: "round", color: "#D8D8E8", size: 30, rotate: 0, pos: "top-[16%] right-[10%]" },
  // middle edges
  { type: "sparkle", color: "#FFE58A", size: 28, rotate: 0, pos: "top-[45%] left-[4%]" },
  { type: "heart", color: "#F7A8C8", size: 32, rotate: -10, pos: "top-[52%] right-[4%]" },
  // bottom-right
  { type: "round", color: "#F5DD7A", size: 52, rotate: 0, pos: "bottom-[16%] right-[10%]" },
  { type: "star", color: "#F27BA0", size: 40, rotate: 15, pos: "bottom-[14%] right-[5%]" },
  { type: "gem", color: "#F7B8C8", size: 52, rotate: 0, pos: "bottom-[9%] right-[4%]" },
  { type: "gem", color: "#E0A040", size: 60, rotate: -12, pos: "bottom-[8%] right-[13%]" },
  { type: "star", color: "#D63A84", size: 34, rotate: -8, pos: "bottom-[6%] right-[8%]" },
  { type: "gem", color: "#C93A6B", size: 62, rotate: 8, pos: "bottom-[2%] right-[17%]" },
  { type: "star", color: "#4FC9C0", size: 76, rotate: -6, pos: "bottom-[1%] right-[7%]" },
  { type: "heart", color: "#7FD6D0", size: 40, rotate: 10, pos: "bottom-[3%] right-[2%]" },
  // bottom-left
  { type: "sparkle", color: "#ffffff", size: 30, rotate: 0, pos: "bottom-[10%] left-[6%]" },
  { type: "butterfly", color: "#B9A8F7", size: 46, rotate: 12, pos: "bottom-[4%] left-[4%]" },
];

// Soft white twinkles in the background
const twinkles = [
  "top-[24%] left-[30%]", "top-[8%] left-[40%]", "top-[30%] right-[25%]", "top-[60%] left-[12%]",
  "top-[70%] right-[22%]", "top-[85%] left-[35%]", "top-[40%] right-[12%]", "top-[92%] right-[40%]",
];

export default function Experience() {
  return (
    <section
      id="career"
      className="relative w-full pt-64 pb-28 px-8 md:px-16 overflow-hidden"
      style={{
        // Dreamy blurred-garden backdrop
        backgroundColor: "#e9efdc",
        backgroundImage: [
          // Blend in from the green courses section above
          "linear-gradient(180deg, #8fa876 0px, rgba(143, 168, 118, 0.6) 90px, rgba(143, 168, 118, 0) 280px)",
          "radial-gradient(circle at 12% 18%, rgba(255, 210, 228, 0.9), transparent 38%)",
          "radial-gradient(circle at 88% 25%, rgba(196, 228, 180, 0.95), transparent 42%)",
          "radial-gradient(circle at 75% 88%, rgba(232, 212, 255, 0.8), transparent 40%)",
          "radial-gradient(circle at 18% 82%, rgba(255, 238, 196, 0.85), transparent 40%)",
          "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6), transparent 60%)",
        ].join(","),
      }}
    >
      {/* Twinkles */}
      {twinkles.map((pos, i) => (
        <div key={i} className={`absolute ${pos}`} style={{ animation: `twinkle 2.4s ease-in-out ${i * 0.3}s infinite` }}>
          <Sticker type="sparkle" color="#ffffff" size={14 + (i % 3) * 6} />
        </div>
      ))}

      {/* Sticker clusters */}
      {clusters.map((s, i) => (
        <div key={i} className={`absolute hidden lg:block ${s.pos}`}>
          <Sticker type={s.type} color={s.color} size={s.size} rotate={s.rotate} />
        </div>
      ))}

      {/* Title */}
      <div className="relative z-10 flex flex-col items-center mb-14">
        <div className="relative w-fit mx-auto">
          <img
            src="/lego_orchid.png"
            alt="Lego Orchid"
            className="h-39 absolute -top-5 right-10 translate-x-1/2 -mt-32"
          />
          <div className="bg-black px-8 py-3">
            <h2 className="text-white text-3xl">career</h2>
          </div>
          <Sticker type="sparkle" color="#FFE58A" size={30} className="absolute -bottom-4 -right-4" />
        </div>
        <div className="flex items-center gap-5 mt-8">
          <div className="relative">
            <img
              src="/dessert_sticker.png"
              alt="Pastel dessert illustration sticker"
              className="h-24 w-24 object-cover rounded-2xl border-[5px] border-white -rotate-6 hover:rotate-0 transition-transform"
              style={{ boxShadow: "0 4px 10px rgba(120, 60, 90, 0.3)" }}
            />
            <Sticker type="sparkle" color="#FFE58A" size={24} className="absolute -top-3 -right-3" />
          </div>
          <p className="text-xl text-center px-4 py-1 rounded-full bg-white/70">
            here&apos;s where I&apos;ve been working ^-^
          </p>
          <div className="relative">
            <img
              src="/bunny_sticker.png"
              alt="Bunnies circling a heart illustration sticker"
              className="absolute -top-14 -right-16 h-20 w-20 object-cover rounded-2xl border-[5px] border-white rotate-12 hover:rotate-0 transition-transform"
              style={{ boxShadow: "0 4px 10px rgba(120, 60, 90, 0.3)" }}
            />
            <img
              src="/lego_monkey.png"
              alt="Lego monkey minifigure with a banana"
              className="h-24 w-24 object-cover rounded-2xl border-[5px] border-white rotate-6 hover:rotate-0 transition-transform"
              style={{ boxShadow: "0 4px 10px rgba(120, 60, 90, 0.3)" }}
            />
            <Sticker type="heart" color="#F27BA0" size={28} rotate={-15} className="absolute -bottom-2 -left-3" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={exp.company}
            className="relative flex flex-col rounded-3xl border-[5px] border-white bg-white/80 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
            style={{ boxShadow: "0 6px 18px rgba(120, 60, 90, 0.18)" }}
          >
            {/* Corner sticker */}
            <Sticker
              type={exp.sticker.type}
              color={exp.sticker.color}
              size={56}
              rotate={idx % 2 ? 12 : -12}
              className={`absolute -top-8 z-10 ${idx % 2 ? "-right-8" : "-left-8"}`}
            />

            {/* Header */}
            <div
              className="px-5 pt-4 pb-3 rounded-t-[1.2rem]"
              style={{ background: `linear-gradient(135deg, ${exp.color}, #ffffff)` }}
            >
              <div className="flex justify-between items-start gap-2">
                <span className="font-bold text-xl leading-tight">{exp.company}</span>
                <span
                  className="text-xs whitespace-nowrap mt-1 px-2.5 py-0.5 rounded-full bg-white"
                  style={{ border: `1.5px solid ${exp.accent}` }}
                >
                  {exp.location}
                </span>
              </div>
              <span className="text-sm opacity-75">{exp.dates}</span>
            </div>

            {/* Content */}
            <div className="px-5 pt-3 pb-5 flex-1">
              <h3 className="text-lg font-bold mb-3">{exp.role}</h3>
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2.5 text-sm">
                    <Sticker type="star" color={exp.accent} size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
