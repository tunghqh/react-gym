import React from 'react'

import {Link} from 'react-router-dom'
import Button from '../Button'

import './ExerciseCard.scss'
function ExerciseCard({exercise}) {
  return (
    <Link className='exercise-card' to={`/exercises/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <div className='exercise-card__btn'>
            <Button primary rounded small className="card__btn-item"><p>{exercise.bodyPart}</p></Button>
            <Button primary rounded small className="card__btn-item"><p>{exercise.target}</p></Button>
        </div>
        <div className='exercise-card__name'>{exercise.name}</div>
    </Link>
  )
}

export default ExerciseCard