"use client";
import { useEffect, useState } from "react";
import TechieCard from "./TechieCard";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { LuMoveLeft } from "react-icons/lu";
import TechiesCardsNav from "./TechiesCardsNav";

export default function TechiesCards({ techiesData }) {
  const [windowWidth, setWindowWidth] = useState(null);
  const [techies, setTechies] = useState(techiesData);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const barSizeAsPercentage = Math.round(100 / techies.length);
  const leftAlignmentOfBar = currentActiveIndex * barSizeAsPercentage;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowWidth);
  const handlePrevClick = () => {
    if (currentActiveIndex === 0) {
      setCurrentActiveIndex(techies.length - 1);
    } else {
      setCurrentActiveIndex(currentActiveIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentActiveIndex === techies.length - 1) {
      setCurrentActiveIndex(0);
    } else {
      setCurrentActiveIndex(currentActiveIndex + 1);
    }
  };

  return (
    <section className="relative z-20 w-full max-w-[1920px] mx-auto px-4 md:px-6  lg:px-10 overflow-x-hidden">
      <div className="lg:whitespace-nowrap overflow-hidden">
        {techies &&
          techies.map((techie, index) => {
            return (
              <TechieCard
                activeIndex={currentActiveIndex}
                // isCardActive={currentActiveIndex === index}
                isCardActive={
                  windowWidth >= 1024 ? currentActiveIndex === index : true
                }
                isLargeScreen={windowWidth >= 1024}
                techieData={techie}
                isLastCard={currentActiveIndex === techies.length - 1}
                key={index}
                index={index}
              />
            );
          })}
      </div>
      <div className="hidden lg:block">
        <TechiesCardsNav
          techiesLength={techies.length}
          currentProject={currentActiveIndex}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
        {/* <div className="relative w-[200px] h-1 rounded-full bg-custom-light/10 mb-4 hidden lg:block">
          <div
            style={{ transform: `translateX(${currentActiveIndex * 100}%)` }}
            className={`h-1 w-[${barSizeAsPercentage}%] bg-custom-light/40 rounded-full transition-all duration-1000 ease-in-out`}
          ></div>
        </div>
        <button
          className="text-custom-light p-4 rounded-full border-custom-light border-solid border-[1px]"
          onClick={handlePrevClick}
        >
          0{currentActiveIndex + 1}
        </button>
        <button className="text-custom-light" onClick={handleNextClick}>
          0{techies.length}
        </button> */}
      </div>
    </section>
  );
}
