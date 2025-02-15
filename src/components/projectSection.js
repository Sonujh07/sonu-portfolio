import React from "react";
import "../css/ProjectSection.css";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import ProjectImage from '../assets/projectImage.jpg'

import HTML from '../assets/skills/HTML.png';
import CSS from '../assets/skills/CSS.png';
import JavaScript from '../assets/skills/Javascript.svg';
import ReactLogo from '../assets/skills/React.png';
import NodeJs from '../assets/skills/NodeJs.svg';
import Redux from '../assets/skills/Redux.svg';
import Tailwind from '../assets/skills/Tailwind.png';
import Express from '../assets/skills/Express.png';
import Git from '../assets/skills/Git.svg';
import GitHub from '../assets/skills/Github.svg';
import MongoDB from '../assets/skills/MongoDB.svg';

const projects = [
  {
    id: 1,
    number: "01",
    title: "Learn And Spark",
    description: "A ed-tech platform that provides a learning environment with digital educational services or tools for students, teachers, or institutions.",
    skills: [
      { src: HTML, alt: 'HTML Logo' },
      { src: CSS, alt: 'CSS Logo' },
      { src: JavaScript, alt: 'JavaScript Logo' },
      { src: ReactLogo, alt: 'React Logo' },
      { src: NodeJs, alt: 'Node.js Logo' },
      { src: Redux, alt: 'Redux Logo' },
      { src: Tailwind, alt: 'Tailwind CSS Logo' },
      { src: Express, alt: 'Express Logo' },
      { src: Git, alt: 'Git Logo' },
      { src: GitHub, alt: 'GitHub Logo' },
      { src: MongoDB, alt: 'MongoDB Logo' },
    ],
    imageUrl: { ProjectImage },
    githubLink: "https://github.com/Sonujh07/learnAndSpark",
    liveLink: "https://learn-and-spark.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <div className="project-section px-2 xs:px-4 sm:px-6 lg:px-8 py-4 sm:py-8" id="projects">
      <h2 className="page-header text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 ">Projects</h2>
      <div className="project-container flex flex-col rounded-full gap-2 lg:gap-6 xs:gap-1 sm:gap-2">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card relative bg-cover bg-center p-4 sm:p-6 lg:p-20 shadow-lg  `}
           
          >
            {/* Project Number */}
            <div
              className={`project-number absolute text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-white ${
                index % 2 === 1 ? "project-number-left" : "project-number-right"
              }`}
            >
              {project.number}
            </div>

            {/* Project Content */}
            <div
              className={`project-content  mt-1 sm:mt-6 lg:mt-8 `}
            >
              {/* Skills Section */}
              <div className="project-skills-container flex flex-wrap gap-2 mb-2 sm:mb-4 justify-start sm:justify-end">
                {project.skills.map((skill, index) => (
                  <img
                    key={index}
                    src={skill.src}
                    alt={skill.alt}
                    className="project-skill w-6 h-6 xs:w-4 xs:h-4 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                ))}
              </div>

              {/* Project Title */}
              <h2 className="project-heading text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="project-subHeading text-xs xs:text-sm sm:text-base lg:text-lg text-gray-200 mb-2 sm:mb-4">
                {project.description}
              </p>

              {/* Buttons and Links */}
              <div className="btn-grp flex flex-row ">
                <button className="btn-pink btn-project px-4 py-2 sm:px-6 sm:py-3 text-xs xs:text-sm lg:text-base font-medium text-white rounded bg-blue-400 hover:bg-pink-600">
                  Read More
                </button>
                <a href={project.githubLink} className="text-white hover:text-gray-300 text-lg xs:text-xl">
                  <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-red-700 hover:text-white rounded-full" />
                </a>
                <a href={project.liveLink} className="text-white hover:text-gray-300 text-lg xs:text-xl">
                  <FaLink className="w-8 h-8 sm:w-10 sm:h-10 hover:text-red-400 rounded-full" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
