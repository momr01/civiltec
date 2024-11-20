
import React from "react";

interface SingleBlogParams {
  id: string;
}

interface BlogDetailsProps {
  params: { id: string };
  searchParams: {
    title: string;
    images: string;
    video: string;
    createdAt: string;
  };
}



const SingleBlogPage = async ({ params, searchParams }: BlogDetailsProps) => {
  
  //console.log(id);
  //console.log(params);

  const { id } = params;
  const { title, images, video, createdAt } = searchParams;

 // const parsedImages = JSON.parse(images); // Deserializar las imágenes

 console.log(id)
 console.log(searchParams)



  return (
    <section className="pt-64">
      <h2 className="uppercase text-mainBlue font-bold text-3xl text-center">
        proyecto beth - casa modular
      </h2>
      <div className="my-14">
        <p className="text-lg text-justify">
          Las casas modulares originalmente no cubrían las necesidades de todos,
          siendo casas pequeñas y con medidas insuficientes. Civiltec diseño la
          casa modular expandible, ahorran tiempo de obra, materiales, energía,
          sedentarismo, con productos sustentables, ecológicos y duraderos. Es
          una vivienda amplia para toda la familia, con grandes dimensiones,
          puede ser transportada y colocada en el día. La tecnología utilizada,
          es un mecanismo nuevo, novedoso y que incorporamos gracias al proyecto
          de profesionales dedicados al avance en la construcción. Civiltec
          modulares se expande, una vez que llega a obra, la misma se transforma
          en una vivienda familiar.
        </p>
      </div>
      <div className="flex justify-center">
        <video
          /**
          width="320"
          height="240"
           */
          width={720}
          controlsList="nodownload"
          controls
          preload="none"
        >
          <source src="/video/blog/proyectoBethVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div></div>
    </section>
  );
};

export default SingleBlogPage;
