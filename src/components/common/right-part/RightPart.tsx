import React from 'react'

function RightPart() {
  return (
    <div className='right-part'>

      <header>{/*element name */}
        <span className='element-name'>list name</span>
      </header>

      <main>{/*element info */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime possimus, totam officia sunt accusantium eius quibusdam, tenetur earum ex asperiores aut repellat facere vel fugit, maiores sed soluta quos.
      </main>

      <footer> {/*delete elemet btn */}
        <button className='delete-btn'> 
          <p>Delete element</p> 
          <img className='icons' src={require("./../icons/delete.png")} alt="X" />
        </button>
      </footer>

    </div>
  )
}

export default RightPart