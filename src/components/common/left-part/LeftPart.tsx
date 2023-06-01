import React  from 'react';
import FolderActions from './components/FolderActions';

function LeftPart (props: any): JSX.Element {

  const appNamePic = props.picture
  
  return (

    <div className='left-part'>

      <header> {/*brand + info (btn here should show a different guides for every app) */} 

        <img className='app-name' src={appNamePic} alt="" />

        <button className='info-btn'>
          <img className='icons' src={require("./../icons/information.png")} alt="?" />
        </button>

      </header>

      <FolderActions /> {/* add folders */}

    </div>
  )
}

export default LeftPart
