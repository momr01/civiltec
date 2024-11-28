import React, { MouseEventHandler } from "react";
import styles from "./btnMore.module.css";
import { capitalizeFirstLetter } from "@/lib/functions";

const BtnMore = ({
  text,
  onClick,
  moreHeight,
  moreWidth,
  isGreen,
  textIsWhite
}: {
  text: string;
  onClick: MouseEventHandler;
  moreHeight: boolean;
  moreWidth: boolean;
  isGreen: boolean;
  textIsWhite: boolean;
}) => {
  return (
    <button
      className={`${styles.btn} ${moreHeight ? "h-16" : "h-12"} ${
        moreWidth ? "w-1/2" : "w-full lg:w-1/3"
      } ${
        isGreen
          ? "bg-mainGreen hover:bg-greenDark"
          : "bg-mainBlue hover:bg-blueDark"
      } ${textIsWhite ? 'text-white' : 'text-black'}`}
      onClick={onClick}
    >
      {capitalizeFirstLetter(text)}
    </button>
  );
};

export default BtnMore;
