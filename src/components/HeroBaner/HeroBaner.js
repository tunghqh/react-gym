import React from 'react'
import {Link} from 'react-router-dom'

import './HeroBaner.scss'
import Button from '../Button'

import heroImg from '../../assets/images/banner.png'

function HeroBaner() {
  return (
    <div className='hero'>
      <div className='hero__title'>
        Fitness Club
      </div>
      <div className='hero__text'>
        <p>Sweat, Smile <br /> and Reapeat</p>
        <p>Check out the most effective exercises</p>
      </div>
      <Link to='/exercises'><Button primary>EXPLORE EXERCIESS</Button></Link>
      <div className='hero__faded'>
        Exercise
      </div>
      <img src={heroImg} alt="hero" className='hero__banner'/>
    </div>
  )
}

export default HeroBaner