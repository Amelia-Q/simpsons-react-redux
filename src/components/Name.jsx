import React from "react";
import { useDispatch } from "react-redux";
import { DELETE, ON_LIKE_TOGGLE } from "../redux/types";

const Name = (props) => {
  const { name, liked, onLikeToggle, quote, onDelete, added, addToFavourites } =
    props;
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{name}</h1>
      <button
        style={{ backgroundColor: liked ? "red" : "blue" }}
        onClick={() => dispatch({ type: ON_LIKE_TOGGLE, payload: name })}
        // onClick={() => onLikeToggle(quote)}
      >
        Like/Dislike
      </button>
      {/* <button
        style={{ backgroundColor: added ? "orange" : "green" }}
        onClick={() => addToFavourites(quote)}
      >
        Add to/Remove from favourites
      </button> */}

      <button
        onClick={() => {
          dispatch({ type: DELETE, payload: name });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Name;
