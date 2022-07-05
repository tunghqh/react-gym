import React, { useEffect, useState } from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";

import "./Exercises.scss";
import { exerciessOptions, fetchData } from "../../utils/fetchData";

function Exercises({ exercises, setExercises, bodyPart }) {

  // console.log(exercises);
  const [currentPage,setCurrentPage] = useState(1)
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  // console.log(indexOfFirstExercise);
  // console.log(indexOfLastExercise);
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate = (e,value) => {
    setCurrentPage(value)

    window.scrollTo({top:1300, behavior: 'smooth'})
  }

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      let exercisesData = []

      if(bodyPart === 'all') {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciessOptions
        );
      }else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciessOptions
        );
        setCurrentPage(1)
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  },[bodyPart, setExercises])
  
  return (
    <div id="exercises">
      <h3 className="exercises__title">Showing Result</h3>
      <div className="exercises__row">
        {currentExercises.map((exercise,i) => (
          <ExerciseCard key={i} exercise={exercise}/>
        ))}
      </div>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination 
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
}

export default Exercises;
