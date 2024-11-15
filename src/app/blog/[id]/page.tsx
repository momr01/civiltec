import React from "react";

interface SingleBlogParams {
  id: string;
}

const SingleBlogPage = async ({ params }: { params: SingleBlogParams }) => {
  const { id } = params;
  console.log(id);

  

  return (
    <section className="pt-64">
      <h2 className="uppercase text-mainBlue font-bold text-2xl text-center">proyecto beth - casa modular</h2>
    </section>
  )
};

export default SingleBlogPage;
