"use client";
import { mainCover } from "@/assets/img/mainCover/mainCover";
import Image from "next/image";
import React from "react";
import styles from "./cover.module.css";

const Cover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainImgContainer}>
        <Image src={mainCover} alt="civiltec" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Cover;
