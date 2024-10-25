"use client";

import React from "react";
import MainTitle from "../../components/mainTitle/mainTitle";
import BtnMore from "../../components/btnMore/btnMore";

const Us = () => {
  return (
    <section id="us">
      <MainTitle text="nosotros" color="black" />

      <p className="uppercase text-lg text-center tracking-wider w-[80%] mx-auto font-semibold">
        Nos atraen los desafíos, generar obras de alto valor, no sólo económico
        sino también humano y social.
      </p>
      <div className="flex justify-center mt-20">
        <BtnMore
          text="más información"
          onClick={() => console.log("mas")}
          moreHeight={true}
          moreWidth={false}
        />
      </div>
    </section>
  );
};

export default Us;
