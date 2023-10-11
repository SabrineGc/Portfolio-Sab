import React from "react";
import Main from "./component/Main"
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Resume from "./component/Resume.jsx";
import Footer from "./component/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

