import { civiltecNumbers } from "@/data/numbers";
import React from "react";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {civiltecNumbers.map((item) => (
          <div key={item.id}>
            <h3 className="text-5xl font-bold text-blue-600">
              <span>+</span> <CountUp end={item.q} duration={4} />
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
