import { civiltecNumbers } from "@/data/numbers";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Numbers = () => {
  // Uso del hook useInView para detectar cuando la sección está visible
  const [ref, inView] = useInView({
    // triggerOnce: true, // Solo dispara una vez cuando está visible
    triggerOnce: false,
    threshold: 0.5, // 50% del elemento debe estar visible
  });

  return (
    <div className="bg-gray-100 py-10" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {civiltecNumbers.map((item) => (
          <div key={item.id}>
            <h3 className="text-5xl font-bold text-blue-600">
              <span>+</span>

              {/* <CountUp end={item.q} duration={4} /> */}
              {/* Solo activa CountUp cuando el elemento esté visible */}
              {/* {inView ? <CountUp end={item.q} duration={4} /> : item.q} */}
              {inView ? <CountUp end={item.q} duration={item.time} /> : 0}
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
