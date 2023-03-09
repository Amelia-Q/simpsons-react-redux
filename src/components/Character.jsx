import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

const Character = (props) => {
  const {
    // onDelete,
    name,
    quote,
    image,
    characterDirection,
    // onLikeToggle,
    liked,
    // addToFavourites,
    added,
  } = props;

  if (characterDirection === "Left") {
    return (
      <>
        <Name
          liked={liked}
          name={name}
          // onLikeToggle={onLikeToggle}
          // onDelete={onDelete}
          quote={quote}
          added={added}
          // addToFavourites={addToFavourites}
        />
        <Image image={image} name={name} />
        <Quote quote={quote} />
      </>
    );
  }

  return (
    <>
      <Name
        liked={liked}
        name={name}
        // onLikeToggle={onLikeToggle}
        // onDelete={onDelete}
        quote={quote}
        added={added}
        // addToFavourites={addToFavourites}
      />
      <Quote quote={quote} />
      <Image image={image} name={name} />
    </>
  );
};

export default Character;
