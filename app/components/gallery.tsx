import React from "react";
import { galleryImages } from "../lib/data";
import Image from "next/image";

function Gallery() {
  return (
    <section className="flex flex-col items-center mx-40 gap-6" id="gallery">
      <h2 className="font-bold text-3xl text-red-500">Gallery</h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12 sm:grid-cols-2 sm:gap-8">
        {galleryImages.map((image, index) => (
          <li
            className="h-52 md:h-72 rounded-t-xl relative flex justify-center"
            key={image.name}
          >
            <Image
              alt={image.name}
              src={image.url}
              className="cover rounded"
              width={720}
              height={720}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
