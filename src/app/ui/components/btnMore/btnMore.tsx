import React, { MouseEventHandler } from "react";
import styles from "./btnMore.module.css";

const BtnMore = ({
  text,
  onClick,
}: {
  text: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default BtnMore;
