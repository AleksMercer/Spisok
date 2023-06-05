import { openDB } from 'idb';
import { useAppContext } from '../../../dela/Dela';

function GroupRename (props: any): JSX.Element { 

  const { // context from Dela.tsx with current App - name
    appName, 
    groupsUpdate, setgroupsUpdate, 
    folderName, setFolderName,
    groupName, setGroupName 
  } = useAppContext() 
      
  async function deleteGroup () {  /* delete group from indexedDB */

    if (folderName === '' || groupName === '') return

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      const project = await store.get(appName)
      delete project[folderName][groupName] // delete group
      await store.put(project, appName)

      setFolderName('')
      setGroupName('')

    } catch (error) {
      console.error('deleteGroup() --- error:', error)
    }
  }

  return (
    <header> {/*selected Group name */}

      <span className='group-name'>{groupName === '' ? '' : groupName}</span>

      <button className='delete-btn' onClick={() => {
        deleteGroup()
        setgroupsUpdate(!groupsUpdate) // from dela.tsx, useContext for call getGroups func from GroupActions.tsx for upfate groups-list
      }}>
        <img className='icons' src={require("./../../icons/delete.png")} alt="?" />
      </button>

    </header>
  )
}

export default GroupRename