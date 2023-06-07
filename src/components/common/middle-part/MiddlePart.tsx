import ElementActions from './components/ElementActions';
import GroupRename from './components/GroupRename';

function MiddlePart(): JSX.Element {

  return (
    <div className='middle-part'>

      <GroupRename />

      <ElementActions />

    </div>
  )
}

export default MiddlePart