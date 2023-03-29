import React from 'react'

function RightPart() {
  return (
    <div className='right-part'>
      <header>
        list name
      </header>

      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime possimus, totam officia sunt accusantium eius quibusdam, tenetur earum ex asperiores aut repellat facere vel fugit, maiores sed soluta quos.
      </main>

      <footer>
        <button className='delete-btn'> 
          <p>Delete list - element</p> 
          <img className='icons' src={require("./../icons/delete.png")} alt="X" />
        </button>
      </footer>
    </div>
  )
}

export default RightPart