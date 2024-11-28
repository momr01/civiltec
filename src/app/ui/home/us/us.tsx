"use client";

import React from "react";
import MainTitle from "../../components/mainTitle/mainTitle";
import BtnMore from "../../components/btnMore/btnMore";
import { useRouter } from "next/navigation";

const Us = () => {
  const router = useRouter();

  const handleNewPage = () => {
    router.push("/nosotros");
  };

  return (
    <section id="us" className="pb-10 lg:pb-0">
      <MainTitle text="nosotros" color="black" />

      <p className="uppercase lg:text-lg text-center tracking-wider lg:w-[80%] mx-auto font-semibold">
        Nos atraen los desafíos, generar obras de alto valor, no sólo económico
        sino también humano y social.
      </p>
      <div className="flex justify-center mt-20">
        <BtnMore
          text="más información"
          onClick={handleNewPage}
          moreHeight={true}
          moreWidth={false}
          isGreen={false}
          textIsWhite={true}

        />
      </div>
    </section>
  );
};

export default Us;
