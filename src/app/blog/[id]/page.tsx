import React from "react";

interface SingleBlogParams {
  id: string;
}

const SingleBlogPage = async ({ params }: { params: SingleBlogParams }) => {
  const { id } = params;
  console.log(id);

  return <div>blogggg</div>;
};

export default SingleBlogPage;
