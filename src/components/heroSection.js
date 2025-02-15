import React, { useEffect, useState } from 'react';
import profilePhoto from '../assets/profilePhoto.png';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const textArray = ['Coder', 'Full Stack Mern Developer', 'Backend Developer', 'Frontend Developer'];

    if (charIndex < textArray[currentWordIndex].length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + textArray[currentWordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      const nextWordTimeout = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setCurrentText('');
        setCharIndex(0);
      }, 2000);

      return () => clearTimeout(nextWordTimeout);
    }
  }, [charIndex, currentWordIndex]);

  return (
    <section className=" flex relative w-10/12 mx-auto h-[calc(100vh-6rem)] flex-col-reverse lg:flex-row justify-between items-center px-4 py-20 xs:px-6 xs:py-10 sm:px-8 lg:px-20 gap-4 xs:gap-4">
      <div className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-heroSectionBackground before:bg-cover before:bg-center before:z-0"></div>
      <div className="absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/60 after:via-black/60 after:to-black/60 after:z-0 after:blur-md"></div>

      {/* Left Content */}
      <div className="relative text-white flex flex-col space-y-6 lg:space-y-16 xs:space-y-8 sm:space-y-6 md:space-y-6 w-full lg:w-[55%] z-10">
        <div>
          <p className="text-base xs:text-lg sm:text-xl font-sans">Hi! I'm Sonu Kumar</p>
        </div>
        <div className='sm:text-lg'>
          <p className="text-base xs:text-lg">I am a</p>
          <div>
            <span className="text-blue-300 font-semibold text-xl xs:text-2xl lg:text-3xl sm:text-lg">#</span>
            <span className="text-orange-300 font-semibold text-2xl xs:text-xl lg:text-4xl sm:text-2xl block-inline">{currentText}</span>
          </div>
        </div>
        <div>
          <p className="text-xs xs:text-sm md:text-base lg:text-lg">
          I am a dedicated Full-Stack Developer with a strong passion for building efficient, scalable, and user-friendly web application
          </p>
        </div>
        <div>
          <a href={`${process.env.PUBLIC_URL}/SonuCV.pdf`} download="Sonu_Resume.pdf" className="relative inline-flex items-center justify-center w-auto px-5 py-2 xs:px-6 xs:py-3 font-bold text-white bg-indigo-600 rounded-md transition-all hover:ring-2 ring-offset-2 ring-indigo-500 focus:outline-none">
            Download CV
          </a>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex justify-center items-center w-full xs:w-2/3 sm:w-4/6 md:w-[48%] lg:w-[45%] z-10 xs:pt-20 lg:scale-100 lg:transform ">
        <img src={profilePhoto} alt="profilePhoto"
          className="w-2/3 xs:w-1/2 sm:w-1/2 lg:w-screen md:h-full lg:h-[70%] object-fit" />
      </div>
    </section>
  );
};

export default HeroSection;
