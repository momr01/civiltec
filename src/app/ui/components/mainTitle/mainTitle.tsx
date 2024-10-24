import React from "react";
import styles from "./mainTitle.module.css";

const MainTitle = ({ text, color }: { text: string; color: string }) => {
  return <h2 className={`${styles.text} text-${color}`}>{text}</h2>;
};

export default MainTitle;
