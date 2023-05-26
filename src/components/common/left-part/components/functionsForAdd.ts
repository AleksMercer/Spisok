import { openDB } from 'idb';

export async function newFolder () { // add folder ****folderName

  const db = await openDB("Spisok_DB", 1)
  const tx = db.transaction("Spisok_Store", "readwrite")
  const store = tx.objectStore("Spisok_Store")

  try {
    const project = await store.get("Dela")
    project['folderName'] = {} //folder name
    await store.put(project, "Dela")
    console.log('Success')
  } catch (error) {
    console.error('Error:', error)
  }
}