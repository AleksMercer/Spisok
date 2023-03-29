import React from 'react'

function LeftPart(props: any) {

  const func = () => {console.log(1)}
  
  return (
    <div className='left-part'>

      <header>   

        <img className='app-name' src={props.picture} alt="Dela" />

        <button className='info-btn'>
          <img className='icons' src={require("./../icons/information.png")} alt="?" />
        </button>
        
      </header>

      <main>

        <div className='folder'>

          <p className='folder__name'>Folder ur </p>

          <ul className='folder__group-list'>

            <li className='folder__group' onClick={func}>&ensp; <span>Group 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, voluptatem! Dignissimos laborum laudantium ducimus enim quas. Velit sapiente quaerat non nisi sit autem quae iusto, error earum ducimus quidem repellat.</span> </li>
            <li className='folder__group'>&ensp; <span>Group 2</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>

          </ul>

          <button className='folder__new-group-btn'> 
              <p>Add new group</p> 
              <img className='icons' src={require("./../icons/plus.png")} alt="+" />
          </button>
          
        </div>

        <div className='folder'>

          <p className='folder__name'>Folder ur </p>

          <ul className='folder__group-list'>

            <li className='folder__group'>&ensp; <span>Group 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, voluptatem! Dignissimos laborum laudantium ducimus enim quas. Velit sapiente quaerat non nisi sit autem quae iusto, error earum ducimus quidem repellat.</span> </li>
            <li className='folder__group'>&ensp; <span>Group 2</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>
            <li className='folder__group'>&ensp; <span>Group 3</span> </li>

          </ul>

          <button className='folder__new-group-btn'> 
              <p>Add new group</p> 
              <img className='icons' src={require("./../icons/plus.png")} alt="+" />
          </button>
          
        </div>

      </main>

      <footer>

        <button className='new-folder-btn'> 
          <p>Add new folder</p> 
          <img className='icons' src={require("./../icons/new_folder.png")} alt="+" />
        </button>
      </footer>

    </div>
  )
}

export default LeftPart