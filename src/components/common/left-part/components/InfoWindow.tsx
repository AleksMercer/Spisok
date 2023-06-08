import { useState } from 'react';
import { openDB } from 'idb';

function InfoWindow (): JSX.Element {

  const [infoWindow, setInfoWindow] = useState<boolean>(false)

  async function updateAppDB() {  /* delete app from indexedDB and create again */

    const db = await openDB("Spisok_DB", 1)
    const tx = db.transaction("Spisok_Store", "readwrite")
    const store = tx.objectStore("Spisok_Store")
  
    try {
      await store.delete("Dela");
      await store.put({}, "Dela")
      window.location.reload() // reload page

    } catch (error) {
      console.error('updateAppDB() --- error:', error)
    }
  }
  
  return (
    <>
      <button className='info-btn' onClick={() => setInfoWindow(true)}>
        <img className='icons' src={require("./../../icons/information.png")} alt="?" />
      </button>

      { infoWindow ?
        <div className='information'>

          <button className='information__close' onClick={() => setInfoWindow(false)}>
            <img className='icons' src={require("./../../icons/close.png")} alt="X"/>
          </button>

          <div className='information__text'>
            <p className='info-sub-title'>* Common information *</p>
            <p className='info-text'>App is designed for large screens like monitor (4:3, 16:9) not for phone. That app used indexed data base. It local, offline database in your browser. 
              Max-name length - 25 symbols. 
              Max-element-text length - 2000 symbols. All folders or groups in one folder or items in one group must have a unique name of at least 1 character. You can add 1 folder/group/element per second.
            </p>
            <p className='info-sub-title'>* Left part of app *</p>
            <p className='info-text'>Show you folder and group into them. Here you can add folder, rename and delete them, for rename click to folder name. Also you can add group into folder.</p>
            <p className='info-sub-title'>* Middle part of app *</p>
            <p className='info-text'>Show you group which you choosed at left part. Also you can rename and delete group like folder. If you want add element, use button the bottom. You can "mark" element.</p>
            <p className='info-sub-title'>* Right part of app *</p>
            <p className='info-text'>Show you information inside element. Here you can see element of you choosed at middle part. Also you can rename and delete element like folder. And you can add some text information into right field.</p>
            <p className='info-sub-title'>* Help *</p>
            <p className='info-text'>If your app work uncorrect use button the bottom. That button delete ALL DATE (include all folder / group /element).</p>
          </div>

          <button className='information__deleteAll-btn' onClick={updateAppDB}>Tap for delete ALL</button>
        </div>
      : 
        <></>
      }
    </>
  )
}

export default InfoWindow
