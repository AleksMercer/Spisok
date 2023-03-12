import React from 'react'
import Card from './components/Card'

/* images import */
import probovalIMG from './media/probovalH.webp'
import garderobIMG from './media/garderobH.webp'
import delaIMG from './media/delaH.webp'

function Mainpage() {

  const proboval = {
    className: 'proboval',
    description: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis possimus optio, quas consequatur esse commodi beatae iusto placeat saepe nihil. Repellendus doloremque alias dolorem, expedita saepe labore quis possimus.',
    picture: probovalIMG,
  }

  const garderob = {
    className: 'garderob',
    description: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis possimus optio, quas consequatur esse commodi beatae iusto placeat saepe nihil. Repellendus doloremque alias dolorem, expedita saepe labore quis possimus.',
    picture: garderobIMG,
  }

  const dela = {
    className: 'dela',
    description: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis possimus optio, quas consequatur esse commodi beatae iusto placeat saepe nihil. Repellendus doloremque alias dolorem, expedita saepe labore quis possimus.',
    picture: delaIMG,
  }


  return (
    <div className='mainpage'>
           
      <Card className={proboval.className} description={proboval.description} picture={proboval.picture} button={proboval.button} />
      <Card className={garderob.className} description={garderob.description} picture={garderob.picture} button={garderob.button} />
      <Card className={dela.className}     description={dela.description}     picture={dela.picture}     button={dela.button} />

    </div>
  )
}

export default Mainpage