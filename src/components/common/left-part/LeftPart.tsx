import Header from './components/Header';
import FolderActions from './components/FolderActions';

function LeftPart (): JSX.Element {
  
  return (
    <div className='left-part'>

      <Header /> {/* brand + info */} 

      <FolderActions /> {/* main and footer */}

    </div>
  )
}

export default LeftPart
