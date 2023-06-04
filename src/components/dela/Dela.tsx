import { useState,useEffect, useContext, createContext } from 'react';

import LeftPart from '../common/left-part/LeftPart';
import MiddlePart from '../common/middle-part/MiddlePart';
import RightPart from '../common/right-part/RightPart';

const AppContext = createContext<any>({})
export const useAppContext = () => useContext(AppContext)

function Dela(): JSX.Element {
  
  const [folderName,  setFolderName ] = useState<string>('')
  const [groupName,   setGroupName  ] = useState<string>('')
  const [elementName, setElementName] = useState<string>('')

  return (
    <div className='dela-app'>
      <div className="filter wrapper">

        <AppContext.Provider value={{
          appName: "Dela", 
          folderName,
          setFolderName,
          groupName, 
          setGroupName,
          elementName, 
          setElementName
        }}>

          <LeftPart 
            picture={require('./media/delaB.webp')}
          />
          
          <MiddlePart />

          <RightPart />

        </AppContext.Provider>
    
      </div>
    </div>
  )
}

export default Dela