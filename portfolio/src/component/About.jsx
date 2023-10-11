import React from "react";
// import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <div className="container mx-auto flex px-10 md:px-0 flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
        <p className="text-lg md:text-xl mb-12 leading-relaxed text-center max-w-2xl">
          I am a passionate full-stack JavaScript developer with a strong foundation in web development technologies. 
          My expertise includes creating robust, scalable, and user-friendly applications using modern frameworks and libraries.
          I am dedicated to crafting elegant and efficient solutions to complex problems.
        </p>
        {/* <GitHubCalendar 
        username="SabrineGc"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        /> */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
          >
            Work With Me
          </a>
          <a
            href="#projects"
            className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}
