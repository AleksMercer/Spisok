import InfoWindow from './components/InfoWindow';
import FolderActions from './components/FolderActions';

function LeftPart (props: any): JSX.Element {

  const appNamePic = props.picture
  
  return (

    <div className='left-part'>

      <header> {/* brand + info */} 

        <img className='app-name' src={appNamePic} alt="" />

        <InfoWindow />
      
      </header>

      <FolderActions /> {/* main and footer */}

    </div>
  )
}

export default LeftPart
