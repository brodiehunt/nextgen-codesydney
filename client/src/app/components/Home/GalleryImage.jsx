"use client";
import { useState } from "react";

export default function GalleryImage({ image, handleToggleModal }) {
  const {
    asset: { url },
    alt,
    caption,
  } = image;

  return (
    <div
      className={`group w-[100%] h-[100%] rounded-lg overflow-hidden relative cursor-pointer`}
      onClick={() => handleToggleModal(image)}
    >
      <img
        src={url}
        alt={alt}
        className="h-[100%] w-[100%] object-cover object-center relative z-10"
      />
      <p className="hidden group-hover:flex transition-all duration-200 absolute bottom-0 p-2 bg-custom-dark/80 w-full z-50 text-custom-light ">
        {caption}
      </p>
    </div>
  );
}
