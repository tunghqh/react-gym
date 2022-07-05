import React from "react";

import "./SimilarExercises.scss";

import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import Loader from "../Loader/Loader";

function SimilarExercises({ targetMuscleExercises, euipmentExercises }) {
  return (
    <div className="similar">
      <h3 className="similar__title">
        Exercises that target the same muscle group
      </h3>
      <div className="similar__item">
        {targetMuscleExercises.length ? (
          <HorizontalScroll data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
      <h3 className="similar__title">
        Exercises that use the same equipment
      </h3>
      <div className="similar__item">
        {euipmentExercises.length ? (
          <HorizontalScroll data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default SimilarExercises;
