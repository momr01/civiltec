import BtnMore from "@/app/ui/components/btnMore/btnMore";
import { ottero01 } from "@/assets/img/projects/ottero/imgOttero";
import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="border border-black w-[300px] bg-white p-2 rounded-[25px]">
      <div className="overflow-hidden relative flex justify-center items-center h-[300px] w-full rounded-t-[25px]">
        <Image
          src={ottero01}
          alt="work-img"
          fill
          className="object-cover w-full h-auto"
        />
      </div>

      <h3 className="text-center uppercase text-lg font-bold my-10">
        proyecto beth - casa modular
      </h3>
      <div className="flex justify-center mb-3">
        <BtnMore
          text="ver más"
          onClick={() => console.log("nada")}
          moreHeight={false}
          moreWidth={true}
        />
      </div>
    </div>
  );
};

export default BlogCard;
