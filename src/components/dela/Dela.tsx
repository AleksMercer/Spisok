import { useState, useContext, createContext } from 'react';

import LeftPart from '../common/left-part/LeftPart';
import MiddlePart from '../common/middle-part/MiddlePart';
import RightPart from '../common/right-part/RightPart';

const AppContext = createContext<any>({})
export const useAppContext = () => useContext(AppContext)

function Dela(): JSX.Element {
  
  const [groupName, setGroupName] = useState('') // used to pass group name from GroupActions.tsx

  return (
    <div className='dela-app'>
      <div className="filter wrapper">

        <AppContext.Provider value={ {appName: "Dela", setGroupName} }>

          <LeftPart 
            picture={require('./media/delaB.webp')}
          />
          
          <MiddlePart 
            selectedGroup={groupName}
          />

          <RightPart />

        </AppContext.Provider>
    
      </div>
    </div>
  )
}

export default Dela