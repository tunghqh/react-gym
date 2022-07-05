import React, { useState } from "react";

import HeroBanner from "../../components/HeroBaner/HeroBaner";
import SearchExercies from "../../components/SearchExercies/SearchExercies";
import Exercises from "../../components/Exercises/Exercises";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <div>
      <HeroBanner />
      <SearchExercies
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
}

export default Home;
