import React from 'react'
import cone from '../images/desktop/image-gallery-cone.jpg'
import milk from '../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../images/desktop/image-gallery-orange.jpg'
import sugar from '../images/desktop/image-gallery-sugarcubes.jpg'

import './Photos.scss'

function Photos() {
  return (
    <div className='photos'>
        <img src={milk} alt="" />
        <img src={orange} alt="" />
        <img src={cone} alt="" />
        <img src={sugar} alt="" />
    </div>
  )
}

export default Photos