import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  exerciessOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";
import Detail from "../../components/Detail/Detail";
import ExerciesVideo from "../../components/ExerciesVideo/ExerciesVideo";
import SimilarExercises from "../../components/SimilarExercises/SimilarExercises";

function ExercisesDetail() {
  const [exercisesDetail, setExercisesDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises,setTargetMuscleExercises] = useState([])
  const [euipmentExercises,setEuipmentExercises] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/search";

      const exercisesDetailData = await fetchData(
        `${exercisesDbUrl}/exercises/exercise/${id}`,
        exerciessOptions
      );
      setExercisesDetail(exercisesDetailData);

      const exercisesVideoData = await fetchData(
        `${youtubeSearchUrl}?query=${exercisesDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideo(exercisesVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/target/${exercisesDetailData.target}`,exerciessOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData)

      const equipmentExercisesData = await fetchData(
        `${exercisesDbUrl}/exercises/equipment/${exercisesDetailData.equipment}`,exerciessOptions
      );  
      setEuipmentExercises(equipmentExercisesData)
    };
    fetchExercisesData();
  }, [id]);
  return (
    <div>
      <Detail exercisesDetail={exercisesDetail} />
      <ExerciesVideo
        exerciseVideo={exerciseVideo}
        name={exercisesDetail.name}
      />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} euipmentExercises={euipmentExercises} />
    </div>
  );
}

export default ExercisesDetail;
