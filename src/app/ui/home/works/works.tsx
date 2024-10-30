"use client";

// import {
//   work01,
//   work02,
//   work03,
//   work04,
//   work05,
//   work06,
//   work07,
//   work08,
//   work09,
// } from "@/assets/img/works/imgWorks";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";
//import Label from '@mui/material/lab';
import Image from "next/image";
import React from "react";
import MainTitle from "../../components/mainTitle/mainTitle";
import BtnMore from "../../components/btnMore/btnMore";
import { importAllImages } from "@/lib/functions";
//import Masonry from "react-masonry-css";
// pages/tu-pagina.js

//const images = importAllImages(require.context("./", false, /\.jpg$/));
const images = importAllImages(
  require.context("../../../../assets/img/works", false, /\.jpg$/)
);

const Works = () => {
  // Configuración de columnas según el tamaño de pantalla
  /* const breakpointColumnsObj = {
    default: 4, // Para pantallas grandes
    1100: 3, // Para pantallas medianas
    700: 2, // Para pantallas pequeñas
    500: 1, // Para pantallas muy pequeñas
  };*/

  const handleNewPage = () => {
    console.log("buenas");
  };

  return (
    <div className="bg-mainBlue">
      <section id="works" className="pb-60 rounded-b-[100px] bg-white">
        <MainTitle text="obras" color="black" />
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

        {/* <div className="border border-black h-[690px] overflow-hidden">
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
      </div> */}
        <article>
          <Box
            sx={{
              width: "100%",
              //  minHeight: 829
            }}
          >
            <Masonry columns={3} spacing={1}>
              {/* {itemData.map((item, index) => ( */}
              {Object.keys(images).map((key, index) => {
                if (index >= 0 && index <= 10) {
                  return (
                    <div key={index}>
                      {/* <Label>{index + 1}</Label> */}
                      {/* <img
srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
src={`${item.img}?w=162&auto=format`}

alt={item.title}
loading="lazy"
style={{
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  display: "block",
  width: "100%",
}}
/> */}
                      <Image
                        // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        // src={item.img}
                        // alt={item.title}
                        key={index}
                        // src={images[item].default.src}
                        src={images[key]}
                        alt={key}
                        loading="lazy"
                        style={{
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 4,
                          display: "block",
                          width: "100%",
                        }}
                      />
                    </div>
                  );
                }
              })}
            </Masonry>
          </Box>

          <div className="flex justify-center mt-10">
            <BtnMore
              text="ver más"
              onClick={handleNewPage}
              moreHeight={true}
              moreWidth={false}
              isGreen={true}
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Works;

// const itemData = [
//   {
//     img: work01,
//     title: "Fern",
//   },
//   {
//     img: work02,
//     title: "Snacks",
//   },
//   {
//     img: work03,
//     title: "Mushrooms",
//   },
//   {
//     img: work04,
//     title: "Tower",
//   },
//   {
//     img: work05,
//     title: "Sea star",
//   },
//   {
//     img: work06,
//     title: "Honey",
//   },
//   {
//     img: work07,
//     title: "Basketball",
//   },
//   {
//     img: work08,
//     title: "Breakfast",
//   },
//   {
//     img: work09,
//     title: "Tree",
//   },
// ];

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
//     title: "Snacks",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
//     title: "Tower",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
//     title: "Tree",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
//     title: "Camping Car",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
//     title: "Mountain",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//   },
// ];
