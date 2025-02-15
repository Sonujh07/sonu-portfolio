import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between w-10/12 mx-auto relative py-8 space-y-8 md:space-y-0">
      {/* First Section of the footer */}
      <div className="flex flex-col text-left gap-y-4 md:gap-y-7 w-full md:w-1/3  md:text-left">
        <div className="relative flex justify-center md:justify-start items-center h-8 w-full mb-4">

          {/* Adjust circle position and size based on screen breakpoints */}
            <div className="absolute z-0 left-20 xs:left-6 sm:left-8 md:left-15 h-7 w-7 xs:h-8 xs:w-8 md:h-9 md:w-9 rounded-full bg-coolBlue"></div>
          
          {/* Text size and alignment based on breakpoints */}
                  <p className="absolute xs:left-6 sm:left-8 md:left-15 h-7 w-7 xs:h-8 xs:w-8 md:h-9 md:w-9 text-lg xs:text-xl sm:text-2xl font-raleway font-semibold z-10 text-black">
                      Sonu.tech
                </p>
        </div>

        <p className="text-sm md:text-base px-4 md:px-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et molestias
          excepturi sint occaecati.
        </p>
        <p className="text-sm md:text-base">singhsonujh07@gmail.com</p>
      </div>

      {/* Second Section of footer */}
      <div className="flex flex-col gap-y-4 md:gap-y-7 w-full md:w-1/5 text-center md:text-left">
        <div className="font-semibold">Explore Links</div>
        <div>Home</div>
        <div>About</div>
        <div>Portfolio</div>
      </div>

      {/* Third Section of footer */}
      <div className="flex flex-col gap-y-4 md:gap-y-7 w-full md:w-1/5 text-center md:text-left">
        <div className="font-semibold">Follow Me</div>
        <div className="flex justify-center md:justify-start gap-x-4 text-2xl">
        <a href="www.facebook.com" target="_blank">
        <ImFacebook2 
        className="border h-12 w-12 text-center p-1 rounded-lg transition duration-700 ease-in-out transform  hover:bg-white hover:text-blue-400" />
        </a>
          <a href="www.x.com">
          <BsTwitterX 
          className="h-12 w-12 text-center p-1 border rounded-lg transition duration-700 ease-in-out transform  hover:bg-black hover:text-white" />
          </a>
          <a href="www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram 
          className="h-12 w-12 text-center p-1 border rounded-lg transition duration-700 ease-in-out transform  hover:bg-red-600 hover:text-white" 
          />
          </a>
          <a href="https://www.linkedin.com/in/sonu-kumar-bca/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
           className="h-12 w-12 text-center p-1 border rounded-lg transition duration-700 ease-in-out transform  hover:bg-blue-400 hover:text-white"  
          />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
