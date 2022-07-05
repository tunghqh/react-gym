import React, { useState, useEffect } from "react";

import "./Search.scss";

import Button from "../Button";
import { fetchData, exerciessOptions } from "../../utils/fetchData";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
function SearchExercies({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciessOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciessData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciessOptions
      );
      // console.log(exerciessData);
      // eslint-disable-next-line array-callback-return
      const searchedExercises = exerciessData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
      // console.log(searchedExercises);
    }
  };

  return (
    <div className="search">
      <div className="search__title">
        AweSome Exercise You <br /> Should Know
      </div>
      <div className="search__input">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises..."
        />
        <Button primary className="search__btn" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="search__hrz">
        <HorizontalScroll
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </div>
  );
}

export default SearchExercies;
