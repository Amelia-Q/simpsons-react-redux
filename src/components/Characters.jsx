import React from "react";
import Character from "./Character";
import { useSelector } from "react-redux";

// const Characters = (props) => {
//   const { characters, onLikeToggle, onDelete, addToFavourites } = props;

const Characters = () => {
  const characters = useSelector((state) => state.characters);

  //Should this be here or in App?
  //if no data then show loading
  if (!characters) return <p>Loading</p>;

  return characters.map((item) => {
    return (
      <div className="character" key={item.uniqueId}>
        <Character
          liked={item.liked}
          name={item.character}
          quote={item.quote}
          image={item.image}
          charcterDirection={item.characterDirection}
          // onLikeToggle={onLikeToggle}
          // onDelete={onDelete}
          added={item.added}
          // addToFavourites={addToFavourites}
        />
      </div>
    );
  });
};

export default Characters;
