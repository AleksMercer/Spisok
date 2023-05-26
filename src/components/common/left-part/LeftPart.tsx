//import React, { useEffect, useState } from 'react';
import GetDataFromDB from './components/GetDataFromDB'
import {newFolder} from './components/functionsForAdd'

function LeftPart (props: any): JSX.Element {

  return (

    <div className='left-part'>

      <header> {/*brand + info (btn here should show a different guides for every app) */} 

        <img className='app-name' src={props.picture} alt="" />

        <button className='info-btn'>
          <img className='icons' src={require("./../icons/information.png")} alt="?" />
        </button>

      </header>

      <GetDataFromDB /> {/* <main> folder + group + new group btn </main>*/}
      
      <footer> {/* new folder btn */}

        <button className='add-folder-btn' onClick={newFolder}> 
          <p>Add folder</p> 
          <img className='icons' src={require("./../icons/new_folder.png")} alt="+" />
        </button>

      </footer>

    </div>
  )
}

export default LeftPart
