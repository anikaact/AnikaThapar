import Courses from "./Courses";
import Purdue from "./Purdue";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with background image */}
      <div
        className="relative w-full h-140 bg-cover bg-center"
        style={{ backgroundImage: "url('/grassylaptop.jpg')" }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>
        
        {/* Header content */}
        <div className="relative h-full flex items-start justify-between px-8 md:px-16 pt-16">
          <h1 className="text-5xl md:text-6xl text-black">
            Anika Thapar
          </h1>
          <nav className="flex flex-col md:text-1l gap-1 text-right text-xl">
            <a href="#about" className="text-black underline hover:opacity-70">
              about me
            </a>
            <a href="#purdue" className="text-black underline hover:opacity-70">
              purdue
            </a>
            <a href="#courses" className="text-black underline hover:opacity-70">
              courses
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

            {/* Exclamation marks flanking the smiski */}
            <span style={{ position: 'absolute', top: 0, marginTop: '-5.5rem', left: '12.5rem', display: 'inline-block', animation: 'sway 1.2s linear infinite', animationDelay: '0s', fontSize: '1.5rem' }}>!</span>
            <span style={{ position: 'absolute', top: 0, marginTop: '-4.8rem', left: '11.8rem', display: 'inline-block', animation: 'sway 1.2s linear infinite', animationDelay: '0.5s', fontSize: '1.3rem' }}>!</span>

            {/* About Me Title */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="bg-black px-8 py-3">
                <h2 className="text-white text-3xl">about me</h2>
              </div>
            </div>

            {/* About Me Content */}
            <div className="text-left">
              <p className="mb-6 text-xl">Hi! I'm Anika :) A little about me:</p>
              <ul className="list-disc list-inside space-y-3 text-xl">
                <li>CS @ Purdue University</li>
                <li>Pursuing a certificate in Entrepreneurship & Innovation</li>
                <li>LOVES crafts, hiking, and playing pickleball</li>
              </ul>
              <div className="flex gap-6 mt-6 text-xl">
                <a href="https://www.linkedin.com/in/anika-thapar/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">LinkedIn</a>
                <a href="https://github.com/anikaact" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">GitHub</a>
                <a href="/Anika_Thapar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Purdue />
      <Courses />
    </div>
  );
}
