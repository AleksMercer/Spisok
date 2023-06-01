import { useEffect, useState } from 'react';
import { openDB } from 'idb';

import { useAppContext } from '../../../dela/Dela';
import { getCurrentTime } from '../../commonFunc/timeAndDate';

function GroupActions (props: any): JSX.Element {

  const { appName, setGroupName } = useAppContext() // context from Dela.tsx 
  const folderName = props.folderName // name of folder in which the group
  
  const [groupKeys, setGroupKeys] = useState<string[]>([])

  useEffect(() => { getGroups() }, [])

  async function getGroups () { /* get all groups name from folder */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readonly")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)
      const groupNames = Object.keys(project[folderName])
      setGroupKeys(groupNames) // set new array into groupKeys (useState)

    } catch (error) {
      console.error('getGroups Error:', error)
    }
  }

  async function addGroup () {  /* add new group into folder */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)
      project[folderName][`Group ${getCurrentTime()}`] = {} // create new group
      await store.put(project, appName)
      getGroups()  // render with new group

    } catch (error) {
      console.error('addGroup Error:', error)
    }
  }

  return (
    <>
    { groupKeys.length === 0 
      ?
      <span>(Add group)</span>
      :
      groupKeys.map((key: string): JSX.Element => (

        <ul className='folder__group-list' key={key}>
          <li className='folder__group' onClick={ () => setGroupName(key) }>
            <span>{key}</span>
          </li> 
        </ul>

      ))}

      <button className='folder__add-group-btn' onClick={addGroup}> 
        <p>Add group</p> 
        <img className='icons' src={require("./../../icons/plus.png")} alt="+" />
      </button>
    </>
  )
}

export default GroupActions
