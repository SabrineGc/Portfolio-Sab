import React from 'react';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiAngularSimple,
} from 'react-icons/di';
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiMiro,
  SiVercel,
  SiTrello,
} from 'react-icons/si';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" >
    <div className="container mx-auto flex flex-col items-center py-16"> 
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Technical Skills</h1>
      <div className="tech-skills-container">
        <div className="tech-category">
          <DiJavascript1 className="icon" />
          <DiNodejs className="icon" />
          <DiReact className="icon" />
          <DiMongodb className="icon" />
          <DiMysql className="icon" />
          <DiGit className="icon" />
          <DiAngularSimple className="icon" />
          <SiPrisma className="icon" />
          <SiFirebase className="icon" />
          <SiJquery className="icon" />
          <SiPostgresql className="icon" />
          <SiNextdotjs className="icon" />
        </div>
        <div className="tech-category">
          <SiTrello className="icon" />
          <SiVisualstudiocode className="icon" />
          <SiPostman className="icon" />
          <SiMiro className="icon" />
          <SiVercel className="icon" />
        </div>
      </div>
    </div>
    </section>
  );
}
