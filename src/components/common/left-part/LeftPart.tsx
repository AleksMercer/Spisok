import React, { useEffect, useState } from 'react';
import { openDB } from 'idb';

import { getCurrentTime } from '../commonFunc/timeAndDate';
import GroupsIntoFolder from './components/GroupsIntoFolder'

function LeftPart (props: any): JSX.Element {

  const [folderKeys, setFolderKeys] = useState<string[]>([])

  useEffect(() => { getFolders() }, [])

  async function getFolders() { /* get all folders name from indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readonly")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get("Dela")
      const folderNames = Object.keys(project)
  
      setFolderKeys(folderNames) // set new array into folderKeys (useState)

      console.log('Success get folders')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function addFolder () {  /* add new folder into indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get("Dela")
  
      project[`Folder ${getCurrentTime()}`] = {} // create new folder

      await store.put(project, "Dela")
      getFolders()  // render with new folder

      console.log('Success add folder')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function deleteFolder (folderName: string) {  /* delete folder from indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get("Dela")
  
      delete project[folderName] // delete folder

      await store.put(project, "Dela")
      getFolders()  // render without folder

      console.log('Success delete folder')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (

    <div className='left-part'>

      <header> {/*brand + info (btn here should show a different guides for every app) */} 

        <img className='app-name' src={props.picture} alt="" />

        <button className='info-btn'>
          <img className='icons' src={require("./../icons/information.png")} alt="?" />
        </button>

      </header>

      <main> {/*folder + group + new group btn */}
        { folderKeys.length === 0 
          ? 
          <div className='empty'>You need to add folder <br/>( Use button the bottom )</div> 
          :
          folderKeys.map((key: string): JSX.Element => (

            <div className='folder' key={key}>

              <div className='folder__name'>
                <span>{key}</span> {/* folder name */}
                <button className='info-btn' onClick={() => deleteFolder(key)}>
                  <img className='icons' src={require("./../icons/delete.png")} alt="x" />
                </button>
              </div>

              <GroupsIntoFolder folderName={key} /> {/* add groups */}

            </div>
          ))}
       </main>
       
      <footer> {/* new folder btn */}

        <button className='add-folder-btn' onClick={addFolder}> 
          <p>Add folder</p> 
          <img className='icons' src={require("./../icons/new_folder.png")} alt="+" />
        </button>

      </footer>

    </div>
  )
}

export default LeftPart
