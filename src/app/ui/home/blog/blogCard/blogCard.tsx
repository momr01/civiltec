import { IBlogItem } from "@/interfaces/iBlogItems";
import { capitalizeFirstLetter } from "@/lib/functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ item }: { item: IBlogItem }) => {
  return (
    <div className="w-[300px] bg-white p-2 rounded-[25px]">
      <div className="overflow-hidden relative flex justify-center items-center h-[300px] w-full rounded-t-[25px]">
        <Image
          src={item.images[0]}
          alt="work-img"
          fill
          className="object-cover w-full h-auto"
        />
      </div>

      <h3 className="text-center uppercase text-lg font-bold my-10">
        {item.title}
      </h3>
      <div className="flex justify-center mb-3 items-end">
        <Link
          href={`/blog/${item.id}`}
          className={`flex justify-center items-center font-bold hover:text-white transition-all ease-in-out duration-500 h-12 w-full lg:w-1/2 bg-mainGreen hover:bg-greenDark rounded-[25px] lg:rounded-none
            `}
        >
          {/* <BtnMore
            text="ver más"
            onClick={() => console.log("nada")}
            moreHeight={false}
            moreWidth={true}
            isGreen={true}
          /> */}
          {/* <button
           
            // onClick={onClick}
          >
            {capitalizeFirstLetter("ver más")}
          </button> */}
          {capitalizeFirstLetter("ver más")}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
