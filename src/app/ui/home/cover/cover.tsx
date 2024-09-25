"use client";
import { logoBlack } from "@/assets/img/logo/logo";
import { mainCover } from "@/assets/img/mainCover/mainCover";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./cover.module.css";

const Cover = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Cambia el tamaño según tu breakpoint deseado
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar el tamaño inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Fondo del div principal */}
      <div className={styles.mainImgContainer}>
        <Image src={mainCover} alt="civiltec" layout="fill" objectFit="cover" />
      </div>

      {/* Fondo de la esquina inferior izquierda recortada */}
      <div
        className={
          isMobile ? styles.coverUnderFigMobile : styles.coverUnderFigWeb
        }
      >
        <div className={styles.logoContainer}>
          <Image src={logoBlack} alt="logo" />
        </div>
      </div>

      {/* <div className="relative z-10 p-8 text-white">
      <h1 className="text-xl font-bold">Diagonal Corner Example</h1>
      <p>This div has a diagonal cut at the bottom-left corner with a different background.</p>
    </div> */}
    </div>
  );
};

export default Cover;
