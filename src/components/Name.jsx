import React from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_LIKE, DELETE } from "../redux/types";

const Name = (props) => {
  const dispatch = useDispatch();
  const { name, liked, quote } = props;

  return (
    <div>
      <h1>{name}</h1>
      <button
        style={{ backgroundColor: liked ? "red" : "blue" }}
        onClick={() => dispatch({ type: TOGGLE_LIKE, payload: quote })}
      >
        Like/Dislike
      </button>

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
