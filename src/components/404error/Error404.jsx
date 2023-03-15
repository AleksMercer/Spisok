import React from 'react'

import Error from './media/404.webp'


function Error404() {

  return (
    <div className='error'>
      <div className='filter'>
        <img src={Error} alt="404" />
        <p>Page not found</p>
      </div>  
    </div>
  )
}

export default Error404