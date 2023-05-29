import React, { useEffect, useState } from 'react';
import { openDB } from 'idb';
import { getCurrentTime } from '../../commonFunc/timeAndDate';

function GroupActions (props: any): JSX.Element {

  let folderName = props.folderName // name of folder in which the group

  const [groupKeys, setGroupKeys] = useState<string[]>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getGroups() }, [])

  async function getGroups () { /* get all groups name from folder */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readonly")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get("Dela")
      const groupNames = Object.keys(project[folderName])
  
      setGroupKeys(groupNames) // set new array into groupKeys (useState)

      console.log('getGroups Success')
    } catch (error) {
      console.error('getGroups Error:', error)
    }
  }

  async function addGroup () {  /* add new group into folder */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get("Dela")
      
      project[folderName][`Group ${getCurrentTime()}`] = {} // create new group
   
      await store.put(project, "Dela")
      getGroups()  // render with new group

      console.log('addGroup Success')
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
          <li className='folder__group'>
            &ensp; <span>{key}</span>
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
