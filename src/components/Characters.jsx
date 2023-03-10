import React from "react";
import Character from "./Character";
import { useSelector } from "react-redux";

const Characters = (props) => {
  return props.simpsons.map((item) => {
    return (
      <div className="character" key={item.uniqueId}>
        <Character
          liked={item.liked}
          name={item.character}
          quote={item.quote}
          image={item.image}
          charcterDirection={item.characterDirection}
        />
      </div>
    );
  });
};

export default Characters;
