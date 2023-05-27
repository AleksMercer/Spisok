import React, { useEffect, useState } from 'react';
import { openDB } from 'idb';
import { getCurrentTime } from '../../commonFunc/timeAndDate';

function GroupsIntoFolder (props: any): JSX.Element {

  const [groupKeys, setGroupKeys] = useState<string[]>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { getGroups() }, [])

  async function getGroups() { /* get all groups name from folder */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readonly")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get("Dela")
      const groupNames = Object.keys(project[props.folderName])
  
      setGroupKeys(groupNames) // set new array into groupKeys (useState)

      console.log('Success get groups')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function addGroup () {  /* add new group into folder */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get("Dela")
      
      project[props.folderName][`Group ${getCurrentTime()}`] = {} // create new group
   
      await store.put(project, "Dela")
      getGroups()  // render with new group

      console.log('Success add group')
    } catch (error) {
      console.error('Error:', error)
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

export default GroupsIntoFolder
