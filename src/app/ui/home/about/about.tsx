"use client";
import React from "react";
import Presentation from "./presentation/presentation";
import Numbers from "./numbers/numbers";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <article>
        <Presentation />
        <Numbers />
      </article>
    </section>
  );
};

export default About;
