import React from 'react'

function MiddlePart() {

  return (
    <div className='middle-part'>

      <header> {/*selected Group name */}

        <span className='group-name'>Group - name - name</span>

        <button className='delete-btn'>
            <img className='icons' src={require("./../icons/delete.png")} alt="?" />
        </button>

      </header>

      <main> {/* element/card list надо вывести карточку в отдельный компонент , если тут не DELA то будет выводить карточку а не список */}

        <div className='list-element'>
          <span className='list-element__text'>Some text fdfkdjfdhkadfkfdakadfjafkd</span>

          <button className='list-element__check-btn'>
            <img className='icons' src={require("./../icons/done.png")} alt="?" />
          </button>
        
        </div>

      </main>

      <footer> {/* add element */}

        <button className='add-element-btn'> 
          <p>Add element</p> 
          <img className='icons' src={require("./../icons/plus.png")} alt="+" />
        </button>

      </footer>

    </div>
  )
}

export default MiddlePart