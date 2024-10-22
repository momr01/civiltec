import { civiltecNumbers } from "@/data/numbers";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./numbers.module.css";

const Numbers = () => {
  // Uso del hook useInView para detectar cuando la sección está visible
  const [ref, inView] = useInView({
    // triggerOnce: true, // Solo dispara una vez cuando está visible
    triggerOnce: false,
    threshold: 0.5, // 50% del elemento debe estar visible
  });

  return (
    <div className={styles.mainContainer} ref={ref}>
      <div className={styles.itemsContainer}>
        {civiltecNumbers.map((item) => (
          <div key={item.id}>
            <h3 className={styles.numbers}>
              <span>+</span>
              {inView ? <CountUp end={item.q} duration={item.time} /> : 0}
            </h3>
            <p className={styles.labels}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
