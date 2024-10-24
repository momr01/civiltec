"use client";

import React from "react";
import MainTitle from "../../components/mainTitle/mainTitle";
import styles from "./blog.module.css";
import Image from "next/image";
import { ottero01 } from "@/assets/img/projects/ottero/imgOttero";
import BtnMore from "../../components/btnMore/btnMore";
import BlogCard from "./blogCard/blogCard";

const Blog = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <MainTitle text="blog" color="white" />
      <div className="w-[85%] mx-auto">
        <p className="text-justify text-lg text-white font-bold tracking-wider">
          La tecnología avanza en todos los ámbitos, generando posibilidades,
          alternativas y soluciones en todos los rubros. <br />
          La construcción tradicional está transformándose, con estas
          tecnologías en: materiales, formas y usos, ahorrando tiempo, energía,
          pero manteniendo durabilidad y diseño e incorporando ecología,
          sustentabilidad y ahorro no solo monetario si no en tiempo.
        </p>
      </div>

      <div className="flex justify-around my-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
