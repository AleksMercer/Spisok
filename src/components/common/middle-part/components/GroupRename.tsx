import { useAppContext } from '../../../dela/Dela';

function GroupRename (props: any): JSX.Element { 

  const { groupName } = useAppContext() // context from Dela.tsx with current App - name

  return (
    <header> {/*selected Group name */}

      <span className='group-name'>{groupName === undefined ? 'Choose the group' : groupName}</span>

      <button className='delete-btn'>
        <img className='icons' src={require("./../../icons/delete.png")} alt="?" />
      </button>

    </header>
  )
}

export default GroupRename