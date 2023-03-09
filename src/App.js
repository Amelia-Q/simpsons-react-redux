import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./components/Characters";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { SET_API_DATA } from "./redux/types";

const App = () => {
  // const [characters, setCharacters] = useState();
  // const [searchTerm, setSearchTerm] = useState();
  // const [sortOrder, setSortOrder] = useState("asc");

  const dispatch = useDispatch();

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    dispatch({ type: SET_API_DATA, payload: data });

    results.data.forEach((item) => {
      item.uniqueId = Math.random();
    });

    // setCharacters(results.data);
  };

  useEffect(() => {
    getApiData();
  }, []); //run once.

  // const onDelete = (quote) => {
  //   const index = characters.findIndex((character) => {
  //     return character.quote === quote;
  //   });

  //   const _characters = [...characters];

  //   characters.splice(index, 1);

  //   setCharacters(_characters);
  // };

  // const onLikeToggle = (quote) => {
  //   const index = characters.findIndex((character) => {
  //     return character.quote === quote;
  //   });

  //   const _characters = [...characters];

  //   _characters[index].liked = !_characters[index].liked;

  //   setCharacters(_characters);
  // };

  // const onInput = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const onSort = (e) => setSortOrder(e.target.value);

  // //remove characters that are now in search term
  // const filtered = characters.filter((character) => {
  //   return character.character
  //     .toLowerCase()
  //     .includes(searchTerm ? searchTerm.toLowerCase() : "");
  // });

  // //calculate total likes
  // let total = 0;
  // filtered.forEach((character) => {
  //   if (character.liked) {
  //     total += 1;
  //   }
  // });

  // //sort the data
  // if (sortOrder && sortOrder === "asc") {
  //   filtered.sort((item, nextItem) => {
  //     if (item.character > nextItem.character) return 1;
  //     if (item.character < nextItem.character) return -1;
  //     return 0;
  //   });
  // } else if (sortOrder) {
  //   filtered.sort((item, nextItem) => {
  //     if (item.character > nextItem.character) return 1;
  //     if (item.character < nextItem.character) return -1;
  //     return 0;
  //   });
  // }

  //Add names to favourites
  // const addToFavourites = (quote) => {
  //   const index = characters.findIndex((character) => {
  //     return character.quote === quote;
  //   });

  //   const _characters = [...characters];

  //   _characters[index].added = !_characters[index].added;

  //   setCharacters(_characters);
  // };

  // let favourites = [];
  // filtered.forEach((character) => {
  //   if (character.favourite) {
  //     favourites += character.name;
  //   }
  // });

  return (
    <>
      {/* <div>
        <h3>Total characters liked: {total}</h3>
        <h3>
          Favourite characters: <li>{favourites}</li>
        </h3>
        <button onClick={getApiData}>Get new data</button>
        <label htmlFor="filter">Filter: </label>
        <input id="filter" type="text" onInput={onInput} />
        <label htmlFor="sort">Sort</label>
        <select id="sort" onChange={onSort}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div> */}
      <Characters
      // characters={filtered}
      // onLikeToggle={onLikeToggle}
      // onDelete={onDelete}
      // addToFavourites={addToFavourites}
      />
    </>
  );
};

export default App;
