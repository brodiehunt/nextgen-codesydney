"use client";
import { useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import useDimension from "@/app/hooks/useDimension";
import { ReactLenis } from "lenis/react";
import SectionTitle from "../shared/SectionTitle";
import GalleryImage from "./GalleryImage";
import { IoIosCloseCircle } from "react-icons/io";

const Column = ({
  images,
  y = 0,
  colNumber,
  initialTopPosition,
  handleToggleModal,
}) => {
  return (
    <motion.div
      style={{ y }}
      className={`w-[33%] h-[100%] relative flex flex-col gap-[2vw] ${initialTopPosition}`}
    >
      {images.map((image, index) => {
        return (
          <GalleryImage
            key={index}
            image={image}
            handleToggleModal={handleToggleModal}
          />
        );
      })}
    </motion.div>
  );
};

export default function GallerySection({ galleryData }) {
  // const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const container = useRef(null);
  const { height, width } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.3]);
  const { mainTitle, pseudoTitle, galleryImages } = galleryData;
  console.log(pseudoTitle);
  const handleToggleModal = (image) => {
    setModalImage(image);
  };
  console.log("titles", mainTitle, pseudoTitle);

  return (
    <>
      <section className="relative z-20 w-full mx-auto max-w-[1920px] px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 overflow-hidden md:my-8 lg:my-16">
        <SectionTitle psuedoTitle={pseudoTitle ? pseudoTitle : ""}>
          <span className="text-custom-primary">
            {mainTitle ? mainTitle : ""}
          </span>
        </SectionTitle>
        <ReactLenis root>
          <div
            ref={container}
            className="h-[100vh] md:h-[130vh] flex flex-row gap-[2vw] relative overflow-hidden md:my-8"
          >
            <Column
              colNumber={1}
              images={[galleryImages[0], galleryImages[1], galleryImages[9]]}
              initialTopPosition="top-[-60%] md:top-[-45%]"
              y={y}
              handleToggleModal={handleToggleModal}
            />
            <Column
              colNumber={2}
              images={[
                galleryImages[3],
                galleryImages[4],
                galleryImages[5],
                galleryImages[6],
              ]}
              initialTopPosition="top-[0%] md:top-[5%]"
              y={y2}
              handleToggleModal={handleToggleModal}
            />
            <Column
              colNumber={3}
              images={[galleryImages[7], galleryImages[8], galleryImages[2]]}
              y={y3}
              initialTopPosition="top-[-55%] md:top-[-45%]"
              handleToggleModal={handleToggleModal}
            />
          </div>
        </ReactLenis>
      </section>
      {modalImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-custom-dark/80 flex items-center justify-center z-50">
          <div className="p-4 w-full max-w-[800px] h-[80%] flex flex-col items-center justify-center relative">
            <button
              className="absolute top-0 right-0 group"
              onClick={() => handleToggleModal(null)}
            >
              <IoIosCloseCircle className="w-8 h-8 text-custom-light group-hover:text-custom-primary duration-200" />
            </button>
            <img
              src={modalImage.asset.url}
              alt={modalImage.alt}
              className="object-contain w-[100%] h-auto"
            />
            <p className="">{modalImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
