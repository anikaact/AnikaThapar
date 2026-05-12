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

export default function Purdue() {
  return (
    <section id="purdue" className="w-full py-16 px-8 md:px-24 bg-white mt-40">
      {/* Title */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-fit">
            <img
              src="/mofusand.png"
              alt="Mofusand"
              className="h-15 absolute top-0 left-1/2 -translate-x-1/2 -mt-15"
            />
            <div className="bg-black px-8 py-3">
              <h2 className="text-white text-3xl">Purdue involvement</h2>
            </div>
          </div>
        </div>
        <p className="text-xl text-center mt-6">
          I love staying active on campus! Here are some of my Purdue activities ^-^
        </p>
      </div>

      {/* Activities */}
      <div className="flex flex-col gap-0 max-w-5xl mx-auto">
        {activities.map((activity, i) => (
          <div key={activity.name}>
            <div
              className={`flex flex-col md:flex-row gap-8 items-center py-10 ${
                activity.imageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <img
                src={activity.image}
                alt={activity.imageAlt}
                className="w-72 h-56 object-cover flex-shrink-0"
              />

              {/* Content */}
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

            {/* Divider between activities */}
            {i < activities.length - 1 && (
              <hr className="border-t border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
