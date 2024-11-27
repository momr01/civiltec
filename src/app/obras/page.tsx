import React from "react";
import MainTitle from "../ui/components/mainTitle/mainTitle";
import { Box } from "@mui/material";
import { Masonry } from "@mui/lab";
import { importAllImages } from "@/lib/functions";
import Image from "next/image";

const images = importAllImages(
  require.context("../../assets/img/works", false, /\.jpg$/)
);

const WorksPage = () => {
  return (
    <div className="pt-60">
      <MainTitle text="obras" color="black" />
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
                      width={500}
                      height={500}
                    />
                  </div>
                );
              
            })}
          </Masonry>
        </Box>
      </article>
    </div>
  );
};

export default WorksPage;
