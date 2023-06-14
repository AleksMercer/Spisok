import { useState, useEffect, useRef } from 'react';
import { openDB } from 'idb';

import GroupDelete from './GroupDelete';
import { useAppContext } from '../../../dela/Dela';

function GroupRename (): JSX.Element { 

  const { // context from Dela.tsx with current App - name
    appName, 
    groupsUpdate, setGroupsUpdate,
    allGroupsAtFolder, 
    folderName,
    groupName, setGroupName 
  } = useAppContext() 

  const [isEditing, setIsEditing] =  useState<boolean>(false)
  const [text,      setText     ] =  useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null) // for detected click outside the input
  
  useEffect(() => { setText(groupName) }, [groupName]);

  useEffect(() => { /* add or remove listener */

    if (isEditing) {
      document.addEventListener('mousedown', clickOutside)
    } else {
      document.removeEventListener('mousedown', clickOutside)
    }

    return () => document.removeEventListener('mousedown', clickOutside)

  }, [isEditing]);

  const blur = (): void => { /* actions after editing */
    setIsEditing(false) 

    if (text.trim() === '' || allGroupsAtFolder.includes(text) || groupName === text ) {
      setText(groupName)
      return
    } 
    
    renameGroup(text)
    setGroupName(text)
    setGroupsUpdate(!groupsUpdate)
  };

  const clickOutside = (): void => { /* actions after click outside */
    if (!inputRef.current) {
      blur()  // here same logic at blur-func, and i just call blur-func
    }
  };

  async function renameGroup(newGroupName: string): Promise<void> { /* rename folder into indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
    
    try {
      const project = await store.get(appName)

      project[folderName][newGroupName] = project[folderName][groupName] //make copy of original group-object with new name
      delete project[folderName][groupName]                              //delete original group-object

      await store.put(project, appName)

    } catch (error) {
      console.error('renameGroup() --- error:', error)
    }
  };

  return (
    <header> {/*selected Group name */}
      { isEditing 
        ? 
        <input
          name='group'
          ref={inputRef}
          type="text"
          value={text}
          onChange={ (e) => setText(e.target.value) }
          onBlur={blur}
          maxLength={25}
          autoFocus
        />
       : 
        <span className='group-name' onClick={ () => setIsEditing(true) }> 
          {text === '' ? '' : text}
        </span>
      }

      <GroupDelete />

    </header>
  )
};

export default GroupRename