
import React from 'react';
import blobVector from '../assets/skills/blob vector.png'; // Adjust the path as needed
import HTML from '../assets/skills/HTML.png';
import CSS from '../assets/skills/CSS.png';
import JavaScript from '../assets/skills/Javascript.svg';
import ReactLogo from '../assets/skills/React.png';
import NodeJs from '../assets/skills/NodeJs.svg';
import Next from '../assets/skills/Next.svg';
import Redux from '../assets/skills/Redux.svg';
import Tailwind from '../assets/skills/Tailwind.png';
import Bootstrap from '../assets/skills/Bootstrap.svg';
import MaterialUI from '../assets/skills/MaterialUI.svg';
import Express from '../assets/skills/Express.png';
import Git from '../assets/skills/Git.svg';
import GitHub from '../assets/skills/Github.svg';
import GraphQL from '../assets/skills/Graphql.svg';
import MongoDB from '../assets/skills/MongoDB.svg';
import Vercel from '../assets/skills/Vercel.svg';
import ChartJs from '../assets/skills/ChartJs.svg';
import Bash from '../assets/skills/Bash.svg';
import Docker from '../assets/skills/Docker.svg';
import K8s from '../assets/skills/K8s.svg';

const skills = [
    { src: HTML, alt: 'HTML Logo' },
    { src: CSS, alt: 'CSS Logo' },
    { src: JavaScript, alt: 'JavaScript Logo' },
    { src: ReactLogo, alt: 'React Logo' },
    { src: NodeJs, alt: 'Node.js Logo' },
    // { src: Next, alt: 'Next.js Logo' },
    { src: Redux, alt: 'Redux Logo' },
    { src: Tailwind, alt: 'Tailwind CSS Logo' },
    // { src: Bootstrap, alt: 'Bootstrap Logo' },
    // { src: MaterialUI, alt: 'Material UI Logo' },
    { src: Express, alt: 'Express Logo' },
    { src: Git, alt: 'Git Logo' },
    { src: GitHub, alt: 'GitHub Logo' },
    { src: GraphQL, alt: 'GraphQL Logo' },
    { src: MongoDB, alt: 'MongoDB Logo' },
    { src: Vercel, alt: 'Vercel Logo' },
    { src: ChartJs, alt: 'Chart.js Logo' },
//     { src: Bash, alt: 'Bash Logo' },
//     { src: Docker, alt: 'Docker Logo' },
//     { src: K8s, alt: 'Kubernetes Logo' },
];

const SkillSection = () => {
    return (
        <div  className="container mx-auto p-4  mt-12">
            <div className=" text-center text-3xl font-bold mb-8">Skills</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="skill-container-left">
                    <h2 className=" text-2xl font-semibold">
                        <span className="text-blue-500 font-medium text-4xl">M</span>e and
                        <br />
                        My Tech Stack
                    </h2>

                    <div className="mt-4">
                        <p className="mb-2">
                        Developed Learn and Spark, a full-stack MERN-based EdTech platform, 
                        implementing CRUD operations, optimized MongoDB database management, and seamless API integrations.
                         Integrated Razorpay for secure payments, course cart functionality, and a rating system.
                          
                        </p>
                        <p className="mb-2">
                        Built a secure password reset feature using a link-based authentication method. Other projects include
                         a Razorpay Clone, a JavaScript Weather App, and multiple portfolio websites, showcasing proficiency in React.js, 
                         Express.js, Node.js, MongoDB, Tailwind CSS,
                         and REST API development. Passionate about creating scalable, maintainable, and user-friendly applications.
                        </p>
                        <p>
                        Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), I have experience developing dynamic platforms, API integrations,
                         and secure payment solutions. I thrive in problem-solving environments
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center relative gap-3">
                    <img src={blobVector} className="blob-style w-60 h-60 mt-20 absolute z-10" alt="Blob vector" />

                    {skills.map((skill, index) => (
                        <img
                            key={index}
                            src={skill.src}
                            alt={skill.alt}
                            className="w-32 h-32 rounded-3xl gap-x-12 z-20" // Ensure skills logos are above blob
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSection;