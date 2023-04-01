import React from 'react'

function LeftPart(props: any) {

  const func = () => {console.log(1)}
  
  return (
    <div className='left-part'>

      <header> {/*brand + info (btn here should show a different guides for every app) */} 

        <img className='app-name' src={props.picture} alt="" />

        <button className='info-btn'>
          <img className='icons' src={require("./../icons/information.png")} alt="?" />
        </button>

      </header>

      <main> {/* folder + group + new group btn */}

        <div className='folder'>

          <div className='folder__name'>
            <span>Folder</span>

            <button className='info-btn'>
              <img className='icons' src={require("./../icons/delete.png")} alt="x" />
            </button>
          </div> 

          <ul className='folder__group-list'>

            <li className='folder__group' onClick={func}> &ensp; <span>Group 1</span> </li>

          </ul>

          <button className='folder__add-group-btn'> 
              <p>Add group</p> 
              <img className='icons' src={require("./../icons/plus.png")} alt="+" />
          </button>
          
        </div>

      </main>

      <footer> {/* new folder btn */}

        <button className='add-folder-btn' onClick={func}> 
          <p>Add folder</p> 
          <img className='icons' src={require("./../icons/new_folder.png")} alt="+" />
        </button>

      </footer>

    </div>
  )
}

export default LeftPart