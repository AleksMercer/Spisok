import React from 'react'
import LeftPart from '../common/left-part/LeftPart'
import MiddlePart from '../common/middle-part/MiddlePart'
import RightPart from '../common/right-part/RightPart'

function Dela() {

  return (
    <div className='dela-app'>
      <div className="filter wrapper">

        <LeftPart 
          picture={require('./media/delaB.webp')} 
        />
        
        <MiddlePart />

        <RightPart />

      </div>
    </div>
  )
}

export default Dela