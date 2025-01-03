"use client";
import { mainCover } from "@/assets/img/mainCover/mainCover";
import Image from "next/image";
import React from "react";
import styles from "./cover.module.css";

const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainImgContainer}>
        <Image src={mainCover} alt="civiltec" 
        //layout="fill" objectFit="cover" 
        fill
        // style={{ objectFit: "cover" }}
        //objectFit="cover"
        // layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        // className={`${styles.imgZoomEffect} object-[37%_100%] md:object-center   object-cover`} />
        className={`${styles.imgZoomEffect} object-[65%_100%] md:object-center   object-cover`} />
      </div>
    </div>
  );
};

export default Cover;
