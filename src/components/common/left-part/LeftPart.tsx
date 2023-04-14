import React, { useEffect, useState } from 'react';

function LeftPart(props: any) {

  const data = props.jsonData;

  const [dataAtHtml, setDataAtHtml] = useState(Object.keys(data))

  // useEffect( () => { console.log('effect') } , [dataAtHtml] );

  function newFolder ():void {

    let length = Object.keys(data).length;

    data['Folder ' + String(length + 1)] = { "name": '', "code": '' }

    setDataAtHtml(Object.keys(data))

    //console.log(Object.keys(data))
  }

  return (

    <div className='left-part'>

      <header> {/*brand + info (btn here should show a different guides for every app) */} 

        <img className='app-name' src={props.picture} alt="" />

        <button className='info-btn'>
          <img className='icons' src={require("./../icons/information.png")} alt="?" />
        </button>

      </header>

      <main> {/* folder + group + new group btn */}
      { Object.keys(data).length === 0 ? <div className='empty'>You need to add folder <br/>( Use button the  bottom )</div> :

        dataAtHtml.map( (name, index, array) => {
          console.log('name:' + name,'index:' + index,'array:' + array)
          
          return (

            <div className='folder'>

            <div className='folder__name'>
              <span key={index + 1}>{name}</span>
          
              <button className='info-btn'>
                <img className='icons' src={require("./../icons/delete.png")} alt="x" />
              </button>
            </div> 
          
            <ul className='folder__group-list'>
          
              <li className='folder__group' > &ensp; <span>Group 1</span> </li> 
          
            </ul>
          
            <button className='folder__add-group-btn'> 
                <p>Add group</p> 
                <img className='icons' src={require("./../icons/plus.png")} alt="+" />
            </button>
                      
            </div> 
          )
        })
      }
      </main>

      <footer> {/* new folder btn */}

        <button className='add-folder-btn' onClick={newFolder}> 
          <p>Add folder</p> 
          <img className='icons' src={require("./../icons/new_folder.png")} alt="+" />
        </button>

      </footer>

    </div>
  )
}

export default LeftPart


/*Сама структура папки
<div className='folder'>

  <div className='folder__name'>
    <span>Folder</span>

    <button className='info-btn'>
      <img className='icons' src={require("./../icons/delete.png")} alt="x" />
    </button>
  </div> 

  <ul className='folder__group-list'>

    <li className='folder__group' > &ensp; <span>Group 1</span> </li> 

  </ul>

  <button className='folder__add-group-btn'> 
      <p>Add group</p> 
      <img className='icons' src={require("./../icons/plus.png")} alt="+" />
  </button>
            
</div> 
*/

/*Это из layoutwebstore

if (localItems !== null) {

  for(let i = 0; i < localItems.length; i++) {

    let id = localItems[i].id;
    let name = localItems[i].name;
    let price = localItems[i].price;
    let href = localItems[i].href;
    let quantity = localItems[i].quantity;

    return (
      <div class="order-list__element">
        <p class="order-list__element_number">№<span></span></p>
        <a href="./.${href}" class="order-list__element_name" target="_blank">${name}</a>
        <div class="counter">
          <a class="minus"><img src="./../media/icon/minus.svg" alt="-" class="icon-mid-style icon-small-style minus"></a>
          <input type="text" value="${quantity}" disabled>
          <a class="plus"><img src="./../media/icon/plus.svg" alt="+" class="icon-mid-style icon-small-style plus"></a>
        <div class="counter__price"><span>${price}</span> $</div>
        </div>
        <a class="order-list__element_delete" data-id="${id}"><img src="./../media/icon/delete.svg" alt="" class="icon-mid-style"></a>
      </div>
    )
  }
}

*/