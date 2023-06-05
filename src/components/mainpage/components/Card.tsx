import { Link } from "react-router-dom";

function Card(props: any) {

  return (
    <div className={props.className}>
      <div className='filter wrapper'>

        <div className='header'>
          <img className='spisokIMG' src={require("./../media/spisokH.webp")} alt="" />
          <img className='subbrandIMG' src={props.picture} alt="" />
        </div>
        
        <div className='description'>{props.description}</div>

        <Link to={props.urlpath} className='button'><img src={props.picture} alt="" /></Link>

      </div>
    </div>
  )
}

export default Card