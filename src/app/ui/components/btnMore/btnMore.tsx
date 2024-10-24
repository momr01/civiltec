import React, { MouseEventHandler } from "react";
import styles from "./btnMore.module.css";
import { capitalizeFirstLetter } from "@/lib/functions";

const BtnMore = ({
  text,
  onClick,
  moreHeight,
  moreWidth,
}: {
  text: string;
  onClick: MouseEventHandler;
  moreHeight: boolean;
  moreWidth: boolean;
}) => {

  return (
    <button
      className={`${styles.btn} ${moreHeight ? "h-16" : "h-12"} ${
        moreWidth ? "w-1/2" : "w-1/3"
      }`}
      onClick={onClick}
    >
      {capitalizeFirstLetter(text)}
    </button>
  );
};

export default BtnMore;
