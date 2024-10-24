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

export { capitalizeEveryLetter, capitalizeFirstLetter };
