import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ProjectData } from "../assets/projectData";

const MinorProject = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto gap-6">
      <h1 className="mx-auto font-semibold text-2xl sm:text-3xl text-center">
        My Learning Journey
      </h1>

      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full sm:w-[45em] md:w-[55em] lg:w-[65em] h-[15em] sm:h-[20em] md:h-[22em] lg:h-[25em]"
      >
        {ProjectData.map((data, index) => (
          <SwiperSlide key={index} className="rounded-2xl mb-10">
            <div className="flex relative flex-col gap-6 sm:gap-10 w-full h-full">
              {/* Background Image */}
              <img
                src={data.image}
                alt="alternate"
                className="absolute w-full h-full z-0 opacity-20 rounded-2xl object-cover"
              />

              {/* Content Container */}
              <div className="flex flex-col gap-2 sm:gap-4 p-4 sm:p-8 md:p-12 lg:p-16">
                {/* Heading */}
                <p className="text-lg sm:text-xl md:text-2xl font-semibold z-10 text-blue-800">
                  {data.heading}
                </p>

                {/* Subheading */}
                <p className="w-full sm:w-[28em] md:w-[35em] text-sm sm:text-base md:text-lg font-medium z-10 text-gray-900">
                  {data.subHeading}
                </p>

                {/* Action Buttons */}
                <div className="relative flex gap-3 sm:gap-5 z-10">
                  {/* GitHub Link */}
                  <a
                    href={data.gitHubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-950 hover:text-gray-300 text-lg sm:text-xl"
                  >
                    <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:bg-red-700 hover:text-white rounded-full transition duration-300" />
                  </a>

                  {/* Live Demo Link */}
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-950 hover:text-gray-300 text-lg sm:text-xl"
                  >
                    <FaLink className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:text-red-400 rounded-full transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MinorProject;
