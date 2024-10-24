"use client";
import React from "react";
import Presentation from "./presentation/presentation";
import Numbers from "./numbers/numbers";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className="bg-mainGreen">
      <section className={styles.aboutSection}>
        <div className={styles.blueSection}>
          <Presentation />
          <Numbers />
        </div>
      </section>
    </div>
  );
};

export default About;
