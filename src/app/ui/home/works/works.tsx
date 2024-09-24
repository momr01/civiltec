"use client";

import { worksItems } from "@/data/worksItems";
import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

const Works = () => {


  // Configuración de columnas según el tamaño de pantalla
  const breakpointColumnsObj = {
    default: 4, // Para pantallas grandes
    1100: 3, // Para pantallas medianas
    700: 2, // Para pantallas pequeñas
    500: 1, // Para pantallas muy pequeñas
  };

  return (
    <section>
      <h2>Obras</h2>
      {/* <div
        className="grid grid-flow-dense gap-0 w-full h-full"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative">
            <Image
              src={img}
              alt={`collage-img-${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div> */}
      <div className="border border-black h-[710px] overflow-hidden">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex"
          columnClassName="flex flex-col"
        >
          {worksItems.map((src, index) => (
            <div key={index} className="p-0">
              <Image
                src={src}
                alt={`img-${index}`}
                className="w-full h-auto rounded"
              />
            </div>
          ))}
        </Masonry>
      </div>

      <div>
        <button>Ver más</button>
      </div>
    </section>
  );
};

export default Works;
