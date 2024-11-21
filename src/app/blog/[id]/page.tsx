import { SingleBlogParams } from "@/interfaces/iSingleBlogParams";
import { fetchBlogItem } from "@/lib/actions";
import Image from "next/image";
import React from "react";


const SingleBlogPage = async ({ params }: { params: SingleBlogParams }) => {
  const { id } = params;
  const item = await fetchBlogItem(id);

  return (
    <section className="pt-64">
      <h2 className="uppercase text-mainBlue font-bold text-3xl text-center">
        {item?.title}
      </h2>
      <div className="my-14">
        <p className="text-lg text-justify leading-8">
         {item?.description}
        </p>
      </div>
      <div className="flex justify-center">
        <video
          width={720}
          controlsList="nodownload"
          controls
          loop
          preload="none"
          autoPlay={true}
          
        >
          <source src={item?.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-32 mb-40">
        {item?.images.map((img, index) => (
          <div key={index} className="flex items-center justify-center">
          <Image
          src={img}
          alt={`${img}-${index}`}
          />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleBlogPage;
