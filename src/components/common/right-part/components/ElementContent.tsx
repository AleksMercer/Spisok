import { useState, useEffect, useRef } from 'react';
import { openDB } from 'idb';

import { useAppContext } from '../../../dela/Dela';

function ElementContent (): JSX.Element {

  const { // context from Dela.tsx 
    appName, 
    folderName, 
    groupName,
    elementName, setElementName
  } = useAppContext() 

  const [isEditing, setIsEditing] =  useState<boolean>(false)
  const [content,   setContent  ] =  useState<string>('')

  const textAreaRef = useRef<HTMLTextAreaElement>(null) // for detected click outside the input

  useEffect(() => { setElementName('') }, [groupName]);
  useEffect(() => { contentAccess()    }, [elementName]);

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
    contentChanged(content)
  };

  const clickOutside = (): void => { /* actions after click outside */
    if (!textAreaRef.current) {
      blur()  // here same logic at blur-func, and i just call blur-func
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>): void => { /* for set cursor to the end of string */
    const { target } = event;
    const targetValue = target.value;
    target.setSelectionRange(targetValue.length, targetValue.length);

    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  async function contentAccess(): Promise<void> {

    if (elementName === '') return

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")

    try {
      const project = await store.get(appName)

      const element = project[folderName][groupName][elementName]

      setContent(element.info)

    } catch (error) {
      console.error('contentAccess() --- error:', error)
    }
  };

  async function contentChanged(newContent: string): Promise<void> { /* changed content into indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")

    try {
      const project = await store.get(appName)

      const element = project[folderName][groupName][elementName]

      element.info = newContent

      await store.put(project, appName)

    } catch (error) {
      console.error('contentChanged() --- error:', error)
    }
  };

  return (
    <main> {/*element info */}
      { isEditing 
        ? 
        <textarea
          name="content"
          ref={textAreaRef}
          value={content}
          onChange={ (e) => setContent(e.target.value) }
          onBlur={blur}
          onFocus={handleFocus}
          maxLength={2000}
          autoFocus
        />
       : 
       <>
       {  elementName === '' 
          ? 
          <></> 
          : 
          <p className='element-content' onClick={ () => setIsEditing(true) }>
            {content}
          </p>
        }
       </>
      }
    </main>
  )
};

export default ElementContent