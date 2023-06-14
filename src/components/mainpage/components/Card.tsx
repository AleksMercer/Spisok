import { Link } from "react-router-dom";

function Card (props: any): JSX.Element {

  const className = props.className
  const description = props.description
  const picture = props.picture
  const urlpath = props.urlpath

  return (
    <div className={className}>
      <div className='filter wrapper'>

        <div className='header'>
          <img className='spisokIMG' src={require("./../media/spisokH.webp")} alt="" />
          <img className='subbrandIMG' src={picture} alt="" />
        </div>
        
        <div className='description'>{description}</div>

        <Link to={urlpath} className='button'><img src={picture} alt="" /></Link>

      </div>
    </div>
  )
};

export default Card