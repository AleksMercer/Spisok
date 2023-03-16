import React from 'react'
import { Link } from "react-router-dom";

/* image import */
import SpisokIMG from './../media/spisokH.webp'


function Card(props) {

  return (
    <div className={props.className}>
      <div className='filter wrapper'>

        <div className='header'>
          <img className='spisokIMG' src={SpisokIMG} alt="" />
          <img className='subbrandIMG' src={props.picture} alt="" />
        </div>
        
        <div className='description'>{props.description}</div>

        <Link to={props.urlpath} className='button'><img src={props.picture} alt="" /></Link>

      </div>
    </div>
  )
}

export default Card