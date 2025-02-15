
import React from 'react';
import blobVector from '../assets/skills/blob vector.png';

import {skills} from "../assets/projectData"



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
                            className="w-32 h-32 rounded-3xl gap-x-12 z-20" 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillSection;