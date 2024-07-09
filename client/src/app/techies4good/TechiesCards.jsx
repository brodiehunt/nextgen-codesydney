"use client";
import { useState } from "react";
import TechieCard from "./TechieCard";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function TechiesCards({ techiesData }) {
  const [techies, setTechies] = useState(techiesData);
  const [direction, setDirection] = useState(0);
  console.log(techies);
  const handleNextTechie = () => {
    setDirection(1);
    const newTechieOrder = [...techies.slice(1), techies[0]];
    setTechies(newTechieOrder);
  };

  const handlePreviousTechie = () => {
    setDirection(-1);
    const newTechieOrder = [
      techies[techies.length - 1],
      ...techies.slice(0, techies.length - 1),
    ];
    setTechies(newTechieOrder);
  };
  return (
    <section className="relative z-20 w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 overflow-x-hidden">
      <div className="md:whitespace-nowrap w-max-content lg:translate-x-[-480px]">
        <AnimatePresence initial={false}>
          {techies &&
            techies.map((techieData, index) => {
              return (
                <TechieCard
                  key={techieData.id}
                  techieData={techieData}
                  index={index}
                  uniqueKey={techieData.name + "1"}
                />
              );
            })}
          {/* {techies &&
            techies.map((techieData, index) => {
              return (
                <TechieCard
                  key={techieData.name + "1"}
                  techieData={techieData}
                  index={3 + index}
                  uniqueKey={techieData.name + "2"}
                />
              );
            })} */}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between">
        <button onClick={handlePreviousTechie}>Click Me</button>
        <button onClick={handleNextTechie}>Click me</button>
      </div>
    </section>
  );
}
