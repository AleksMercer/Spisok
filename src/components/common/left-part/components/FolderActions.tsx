import { useEffect, useState } from 'react';
import { openDB } from 'idb';

import GroupActions from './GroupActions';
import FolderRename from './FolderRename';

import { useAppContext } from '../../../dela/Dela';
import { getCurrentTime } from '../../commonFunc/timeAndDate';


function FolderActions (): JSX.Element {

  const { appName } = useAppContext() // context from Dela.tsx with current App - name
  
  const [folderKeys, setFolderKeys] = useState<string[]>([])

  useEffect(() => { getFolders() }, [])

  async function getFolders () { /* get all folders name from indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readonly")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)
      const folderNames = Object.keys(project)
  
      setFolderKeys(folderNames) // set new array into folderKeys (useState)

    } catch (error) {
      console.error('getFolders Error:', error)
    }
  }
  
  async function addFolder () {  /* add new folder into indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)
      project[`Folder ${getCurrentTime()}`] = {} // create new folder
      await store.put(project, appName)
      getFolders()  // render with new folder

    } catch (error) {
      console.error('addFolder Error:', error)
    }
  }

  async function deleteFolder (folderName: string) {  /* delete folder from indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)
      delete project[folderName] // delete folder
      await store.put(project, appName)
      getFolders()  // render without folder

    } catch (error) {
      console.error('deleteFolder Error:', error)
    }
  }

  return (
    <>
      <main> {/*folder + group + new group btn */}
        { folderKeys.length === 0 
          ? 
          <div className='empty'>You need to add folder <br/>( Use button the bottom )</div> 
          :
          folderKeys.map((key: string): JSX.Element => (

            <div className='folder' key={key}>

              <div className='folder__name'>

                <FolderRename 
                  currentFolder={key} 
                  update={getFolders} 
                  allFolders={folderKeys} 
                /> {/* name and rename folder */}

                <button className='info-btn' onClick={ () => deleteFolder(key) }>
                  <img className='icons' src={require("./../../icons/delete.png")} alt="x" />
                </button>
                
              </div>

              <GroupActions 
                folderName={key} 
              /> {/* add groups */}

            </div>
          ))
        }
      </main>
       
      <footer> {/* new folder btn */}

        <button className='add-folder-btn' onClick={addFolder}> 
          <p>Add folder</p> 
          <img className='icons' src={require("./../../icons/new_folder.png")} alt="+" />
        </button>

      </footer>
    </>
  )
}

export default FolderActions