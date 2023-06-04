import { useEffect, useState } from 'react';
import { openDB } from 'idb';

import { useAppContext } from '../../../dela/Dela';
import { getCurrentDate, getCurrentTime } from '../../commonFunc/timeAndDate';

function ElementActions (): JSX.Element { 

  const { appName, folderName, groupName, elementName, setElementName } = useAppContext()      // context from Dela.tsx with current App - name

  const [elementsKeys, setElementsKeys] = useState<(any)[][]>([]);                              // get all elements name to elementsKeys from idb
  
  useEffect(() => { getElements() }, [groupName])
  useEffect(() => { checkElement() }, [elementName])  // if use the check button, elementName change to current element and call checkElement for change check status
  
  async function getElements () { /* get all Elements name from indexedDB */

    if (folderName === '' || groupName === '') return

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readonly")
    const store = tx.objectStore("Spisok_Store")

    try {
      const project = await store.get(appName)
      const listName = Object.entries(project[folderName][groupName])
      const nameAndChecked = listName.map( ([key, value]) => [ key, (value as { checked: boolean }).checked] )
      
      setElementsKeys(nameAndChecked) // set new array into elementsKeys (useState)

    } catch (error) {
      console.error('getElements() --- error:', error)
    }
  }

  async function addElement () {  /* add new folder into indexedDB */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)

      project[folderName][groupName][`Elements ${getCurrentDate()} ${getCurrentTime()}`] = {
        info: "",
        checked: false
      }

      await store.put(project, appName)
      getElements()  // render with new elements

    } catch (error) {
      console.error('addElement() --- error:', error)
    }
  }

  async function checkElement () {  /* strikes out & return name of element */

    if (elementName === '') return

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)
      
      const element = project[folderName][groupName][elementName]
      element.checked = !element.checked // if was true, became false...

      await store.put(project, appName)
      getElements()  // render with new elements

    } catch (error) {
      console.error('checkElement() --- error:', error)
    }
  }

  return (
    <>
      <main>
        { elementsKeys.length === 0
          ?
          <></>
          :
          elementsKeys.map(([key, checked]) : JSX.Element => (

            <div className='list-element' key={key}>
              { checked
                ? 
                <span className='list-element__text' style={{textDecoration: 'line-through'}}>{key}</span>
                :
                <span className='list-element__text'>{key}</span>
              }

              <button className='list-element__check-btn' onClick={ () => {
                setElementName(key)
              }}>
                <img className='icons' src={require("./../../icons/done.png")} alt="?" />
              </button>
        
             </div>
    
          ))
        }
      </main>

      <footer> {/* add element */}

        <button className='add-element-btn' onClick={addElement}> 
          <p>Add element</p> 
          <img className='icons' src={require("./../../icons/plus.png")} alt="+" />
        </button>

      </footer>
    </>
  )
}

export default ElementActions