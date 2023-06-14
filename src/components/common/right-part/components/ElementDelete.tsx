import { openDB } from 'idb';

import { useAppContext } from '../../../dela/Dela';

function ElementDelete (): JSX.Element {

  const { // context from Dela.tsx
    appName, 
    elementsUpdate, setElementsUpdate, 
    folderName,
    groupName, 
    elementName, setElementName
  } = useAppContext() 

  async function elementDelete (): Promise<void> {  /* delete group from indexedDB */

    if (folderName === '' || groupName === '' || elementName === '') return

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")

    try {
      const project = await store.get(appName)
      delete project[folderName][groupName][elementName] // delete element

      await store.put(project, appName)

      setElementName('')
      setElementsUpdate(!elementsUpdate)

    } catch (error) {
      console.error('elementDelete() --- error:', error)
    }
  };

  return (
    <footer> {/*delete elemet btn */}
      <button className='delete-btn' onClick={ () => {
        elementDelete()
      }}> 
        <p>Delete element</p> 
        <img className='icons' src={require("./../../icons/delete.png")} alt="X" />
      </button>
    </footer>
  )
};

export default ElementDelete