function Error404 (): JSX.Element {
  
  return (
    <div className='error'>
      <div className='filter'>
        <img src={require('./media/404.webp')} alt="404" />
        <p>Page not found</p>
      </div>  
    </div>
  )
};

export default Error404