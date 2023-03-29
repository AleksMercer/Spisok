import React from 'react'

function MiddlePart() {

  return (
    <div className='middle-part'>

      <header>

        <span className='group-name'>Group - name - name</span>

        <button className='info-btn'>
            <img className='icons' src={require("./../icons/delete.png")} alt="?" />
        </button>

      </header>

      <main>

        <div className='list-element'>
          <span className='list-element__text'>Some text fdfkdjfdhkadfkfdakadfjafkd</span>

          <button className='check-btn'>
            <img className='icons' src={require("./../icons/done.png")} alt="?" />
          </button>
        
        </div>

      </main>

      <footer>
        <button className='new-folder-btn'> 
          <p>Add new list - element</p> 
          <img className='icons' src={require("./../icons/plus.png")} alt="+" />
        </button>
      </footer>
    </div>
  )
}

export default MiddlePart