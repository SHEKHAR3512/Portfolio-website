import React, { useEffect, useState } from "react";
import NavBar from "../Layout/NavBar";
import NavigationCircles from "./NavigationCircles";
import { letters, professionTexts, aboutText, socialIcons } from "../data";
import rodeImage from "../../public/Images/road.png";

const Hero = () => {
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextVisable, setTextVisable] = useState(false);
  const [roadImageOpacity, setRoadImageOpacity] = useState(0.5);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % professionTexts.length;
        setCurrentText(professionTexts[currentIndex]);
        setIsRotating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="home" className="relative z-10 w-full h-screen flex flex-col justify-center items-center isolate">
      <NavBar />
      <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0">
        <h1 className=" flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bold mt-8 md:mt-0">
          <span className="flex mx-auto md:mx-0">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="inline-block md:w-38 w-32 xl:-mr-20 -mr-24  "
              >
                {letter.char}
              </span>
            ))}
          </span>
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden text-center">
            I'm
            <span
              className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 font-extrabold transform origin-left transition-transform duration-300 ease-in ${
                isRotating ? "hidden md: rotate-[100deg]" : "rotate-0"
              }`}
            >
              {currentText}
            </span>
            Devloper
          </span>
        </h1>
        <button
          className="xl:w-[400px] md:w-[300px] w-[270px] bg-gray-900 dark:bg-gray-200 md:py-1 py-0 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-white dark:text-gray-900 tracking-widest rounded-r-4xl flex justify-between items-center md:mr-auto md:mx-0 mx-auto transition-colors duration-500"
          onClick={() => {
            setTextVisable(!isTextVisable);
          }}
          onMouseEnter={() => setRoadImageOpacity(0.8)}
          onMouseLeave={() => setRoadImageOpacity(0.5)}
        >
          {isTextVisable ? "Hide My Story" : "Read My Story"}
          <i
            className={`bx ${isTextVisable ? "bx-book-alt" : "bx-book-open"}`}
          ></i>
        </button>
        <div className="flex md:gap-12 gap-2 mr-auto absolute md:relative left-4 md:left-auto top-20 md:top-auto flex-col md:flex-row">
          {socialIcons.map((socal, index) => (
            <a
            href={socal.link} 
            key={index}
            target="_blank" 
            rel="noopener noreferrer" 
              className="xl:text-3xl md:text-2xl dark:hover:text-white hover:text-gray-900 transition-colors duration-500 text-red-500 dark:text-yellow-500 "
            >
              <i className={socal.icon}></i>
            </a>
          ))}
        </div>
        <div className="lg:w-[600px] md:w-2[500px] w-[350px] absolute left-1/2 -translate-x-1/2 -z-10">
          <img
            src={rodeImage}
            alt="Road Image"
            className="w-full mx-auto transition-opacity duration-300"
            style={{ opacity: roadImageOpacity }}
          />
          <span className="xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide  absolute -top-5 xl:right-22 lg:right-2/6 md:right-16 right-10 rotate-[3.5deg] animate-bounce">
            Looking For New Challenges
          </span>
          <div
            className={`xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-base text-xs font-light text-gray-900 dark:text-gray-200 text-justify tracking-wide transform overflow-y-auto origin-top custom-scrollbar ${
              isTextVisable ? "scale-y-100" : "scale-y-0"
            } trasi`}
          >
            <p className="xl:py-3 py-1 px-1 [&::first-letter]:text-[30px] [&::first-letter]:ml-5 [&::first-letter]:text-red-500 dark:[&::first-letter]:text-yellow-500">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
      <NavigationCircles section="home" />
    </div>
  );
};

export default Hero;
