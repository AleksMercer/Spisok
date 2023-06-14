import ElementRename from "./components/ElementRename";
import ElementContent from "./components/ElementContent";
import ElementDelete from "./components/ElementDelete";

function RightPart(): JSX.Element {
  
  return (
    <div className='right-part'>

      <ElementRename />

      <ElementContent />
      
      <ElementDelete />

    </div>
  )
};

export default RightPart