const capitalizeFirstLetter = (word: string): string => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalized;
};

const capitalizeEveryLetter = (word: string): string => {
  let finalParagraph = "";
  const arrayPar = word.split(" ");

  for (let index = 0; index < arrayPar.length; index++) {
    const capitalized =
      arrayPar[index].charAt(0).toUpperCase() + arrayPar[index].slice(1);
    if (index !== arrayPar.length - 1) {
      finalParagraph += capitalized + " ";
    } else {
      finalParagraph += capitalized;
    }
  }

  return finalParagraph;
};

const importAllImages = (requireContext: __WebpackModuleApi.RequireContext) => {
  // const images = {};
  //const images: { [key: string]: any } = {};
  //console.log(requireContext)
  const images: Record<string, string> = {};
  requireContext.keys().forEach((fileName) => {
    // console.log(fileName)
    const key = fileName.replace("./", "").replace(".jpg", "");
    //images[key] = requireContext(fileName);
    images[key] = requireContext(fileName).default.src; // Extrae solo la URL (serializable)
  });
  //console.log(images)
  return images;
};

export { capitalizeEveryLetter, capitalizeFirstLetter, importAllImages };
