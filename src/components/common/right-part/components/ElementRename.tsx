import { useState, useEffect, useRef } from 'react';
import { openDB } from 'idb';

import { useAppContext } from '../../../dela/Dela';

function ElementRename (): JSX.Element {

  const { // context from Dela.tsx 
    appName, 
    elementsUpdate, setElementsUpdate,
    allElementsAtGroup, 
    folderName, 
    groupName,
    elementName, setElementName 
  } = useAppContext() 

  const [isEditing, setIsEditing] =  useState<boolean>(false)
  const [text,      setText     ] =  useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)  // for detected click outside the input
  
  useEffect(() => { setText(elementName) }, [elementName]);

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

    if (text.trim() === '' || allElementsAtGroup.includes(text) || elementName === text ) {
      setText(elementName)
      return
    } 
    
    renameElement(text)
    setElementName(text)
    setElementsUpdate(!elementsUpdate)
  }

  const clickOutside = (): void => { /* actions after click outside */
    if (!inputRef.current) {
      blur()  // here same logic at blur-func, and i just call blur-func
    }
  }

  async function renameElement(newElementName: string): Promise<void> { /* rename folder into indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
    
    try {
      const project = await store.get(appName)
      project[folderName][groupName][newElementName] = project[folderName][groupName][elementName] //make copy of original list-object with new name
      delete project[folderName][groupName][elementName]                                           //delete original element-object

      await store.put(project, appName)

    } catch (error) {
      console.error('renameElement() --- error:', error)
    }
  }

  return (
    <header>{/*element name */}
      { isEditing 
        ? 
        <input
          name='element'
          ref={inputRef}
          type="text"
          value={text}
          onChange={ (e) => setText(e.target.value) }
          onBlur={blur}
          maxLength={25}
          autoFocus
        />
       : 
        <span className='element-name'onClick={ () => setIsEditing(true) }>
          {text === '' ? '' : text}
        </span>
      }
    </header>
  )
};

export default ElementRename