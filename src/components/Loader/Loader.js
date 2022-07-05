import React from 'react'

import './Loader.scss'

import {TailSpin} from 'react-loader-spinner'
function Loader() {
  return (
    <div className='loader'>
        <TailSpin color="gray" />
    </div>
  )
}

export default Loader