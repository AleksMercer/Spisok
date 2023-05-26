import React, { useEffect, useState } from 'react';
import { openDB } from 'idb';

function GetDataFromDB (): JSX.Element  {

  const [folderKeys, setFolderKeys] = useState<string[]>([])
  
  useEffect(() => {
    
    (async function getFolders () { // get all folder names as an array

      const db = await openDB("Spisok_DB", 1)
      const tx = db.transaction("Spisok_Store", "readonly")
      const store = tx.objectStore("Spisok_Store")
    
      try {
        const project = await store.get("Dela")
        const folderNames = Object.keys(project)
        
        console.log('Success:', folderNames)
        setFolderKeys(folderNames);

      } catch (error) {
        console.error('Error:', error)
      }
    })()

  }, [folderKeys]);

  return (
    <main>
      { folderKeys.length === 0 ? <div className='empty'>You need to add folder <br/>( Use button the  bottom )</div> :
      
        folderKeys.map((key: string): JSX.Element => (

          <div className='folder' key={key}>

            <div className='folder__name'>
              <span>{key}</span> {/* folder name */}
              <button className='info-btn'>
                <img className='icons' src={require("./../../icons/delete.png")} alt="x" />
              </button>
            </div>

            <ul className='folder__group-list'>
              <li className='folder__group'>
                &ensp; <span>Group 1</span>
              </li> 
            </ul>

            <button className='folder__add-group-btn'> 
              <p>Add group</p> 
              <img className='icons' src={require("./../../icons/plus.png")} alt="+" />
            </button>

          </div>
        ))}
    </main>
  )
}

export default GetDataFromDB;

