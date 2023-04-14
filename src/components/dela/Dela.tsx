import React from 'react'
import LeftPart from '../common/left-part/LeftPart'
import MiddlePart from '../common/middle-part/MiddlePart'
import RightPart from '../common/right-part/RightPart'

import jsonData from './dela_API.json';

function Dela() {

  return (
    <div className='dela-app'>
      <div className="filter wrapper">

        <LeftPart 
          picture={require('./media/delaB.webp')} 
          jsonData={jsonData}
        />
        
        <MiddlePart />

        <RightPart />

      </div>
    </div>
  )
}

export default Dela