import { useState, useContext, createContext } from 'react';

import LeftPart from '../common/left-part/LeftPart';
import MiddlePart from '../common/middle-part/MiddlePart';
import RightPart from '../common/right-part/RightPart';

const AppContext = createContext<any>({})
export const useAppContext = () => useContext(AppContext)

function Dela (): JSX.Element {
  
  const appName = "Dela"

  const [groupsUpdate,    setGroupsUpdate   ] = useState<boolean>(true) //use for update list groups at left part into folder
  const [elementsUpdate,  setElementsUpdate ] = useState<boolean>(true) //use for update list elements at middle part into group

  const [allGroupsAtFolder,  setAllGroupsAtFolder ] = useState<string[]>([]) //use at GroupRename.tsx, init from groupActions
  const [allElementsAtGroup, setAllElementsAtGroup] = useState<string[]>([]) 

  const [folderName,  setFolderName ] = useState<string>('') // init from groupAction.tsx
  const [groupName,   setGroupName  ] = useState<string>('') // init from groupAction.tsx
  const [elementName, setElementName] = useState<string>('')

  return (
    <div className='dela-app'>
      <div className="filter wrapper">

        <AppContext.Provider value={{
          appName,

          groupsUpdate,    setGroupsUpdate,
          elementsUpdate,  setElementsUpdate,

          allGroupsAtFolder, setAllGroupsAtFolder,
          allElementsAtGroup, setAllElementsAtGroup,

          folderName,  setFolderName,
          groupName,   setGroupName,
          elementName, setElementName
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