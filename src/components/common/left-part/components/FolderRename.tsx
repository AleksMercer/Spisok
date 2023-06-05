import { useEffect, useState, useRef } from 'react';
import { openDB } from 'idb';

import { useAppContext } from '../../../dela/Dela';

function FolderRename (props: any): JSX.Element { 

  const { appName } = useAppContext()          // context from Dela.tsx 

  const allFolders    = props.allFolders
  const currentFolder = props.currentFolder
  const update        = props.update           // update render (call getFolders function from FolderActions.tsx)

  const [isEditing, setIsEditing] = useState(false)
  const [text,      setText     ] = useState(currentFolder)
  
  const inputRef = useRef<HTMLInputElement>(null) // for detected click outside the input

  useEffect(() => { /* add or remove listener */

    if (isEditing) {
      document.addEventListener('mousedown', clickOutside)
    } else {
      document.removeEventListener('mousedown', clickOutside)
    }

    return () => document.removeEventListener('mousedown', clickOutside)

  }, [isEditing, text])

  const blur = () => { /* actions after editing */
    setIsEditing(false) 

    if (text.trim() === '' || allFolders.includes(text) ) {
      setText(currentFolder)
    } else {
      renameFolder(text)
      update()
    }
  }

  const clickOutside = () => { /* actions after click outside */
    if (!inputRef.current) {
      blur()  // here same logic at blur-func, and i just call blur-func
    }
  }
  
  async function renameFolder(newFolderName: string) { /* rename folder into indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
    
    try {
      const project = await store.get(appName)

      project[newFolderName] = project[currentFolder]  //make copy of original object with new name
      delete project[currentFolder]                    //delete original object

      await store.put(project, appName)

    } catch (error) {
      console.error('renameFolder() --- error:', error)
    }
  }

  return (
    <>
      { isEditing 
        ? 
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={ (e) => setText(e.target.value) }
          onBlur={blur}
          maxLength={25}
          autoFocus
        />
       : 
        <span onDoubleClick={ () => setIsEditing(true) }>{text}</span> // if use doubleClick to span start edit
      }
    </>
  )
}

export default FolderRename