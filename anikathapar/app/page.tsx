import Courses from "./Courses";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with background image */}
      <div
        className="relative w-full h-120 bg-cover bg-center"
        style={{ backgroundImage: "url('/grassylaptop.jpg')" }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>
        
        {/* Header content */}
        <div className="relative h-full flex items-start justify-between px-8 md:px-16 pt-16">
          <h1 className="text-5xl md:text-6xl text-black">
            Anika Thapar
          </h1>
          <nav className="flex flex-col md:text-1l gap-2 text-right">
            <a href="#courses" className="text-black underline hover:opacity-70">
              Courses
            </a>
            <a href="#career" className="text-black underline hover:opacity-70">
              Career
            </a>
            <a href="#purdue" className="text-black underline hover:opacity-70">
              Purdue
            </a>
            <a href="#gallery" className="text-black underline hover:opacity-70">
              Gallery
            </a>
          </nav>
        </div>
      </div>

      {/* Main content area */}
      <main className="flex-1 bg-white p-8 md:p-16">
        {/* About Me Section */}
        <div className="flex flex-col items-center mt-50">
          {/* Smiski + text share a relative container so smiski moves with the text */}
          <div className="relative max-w-2xl w-full">
            {/* Smiski Image - adjust top/left relative to the text block */}
            <img src="/laptopsmiski.png" alt="Laptop Smiski" className="h-45 w-45 absolute top-0 left-0 -mt-29.5 ml-34" />

            {/* About Me Title */}
            <div className="bg-black px-8 py-3 mb-2 w-fit mx-auto">
              <h2 className="text-white text-3xl">about me</h2>
            </div>

            {/* About Me Content */}
            <div className="text-left">
              <p className="mb-6 text-xl">Hi! I'm Anika :) A little about me:</p>
              <ul className="list-disc list-inside space-y-3 text-xl">
                <li>Junior @ Purdue University</li>
                <li>Computer Science major, specializing in SWE and MI</li>
                <li>Pursuing a certificate in Entrepreneurship & Innovation</li>
                <li>LOVES crafts, hiking, and playing pickleball</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Courses />
    </div>
  );
}
