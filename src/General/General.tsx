import { Routes, Route } from "react-router-dom";
import { openDB } from "idb";
import './style.css';

/* Components import */
import Error404 from '../components/404error/Error404';
import Mainpage from '../components/mainpage/Mainpage';
import Dela     from '../components/dela/Dela';
import Garderob from '../components/garderob/Garderob';
import Proboval from '../components/proboval/Proboval';

( async () => { // init db and stores
  await openDB("Spisok_DB", 1, {
    upgrade(db) {
      const store = db.createObjectStore("Spisok_Store")
      store.put({}, "Dela")
      store.put({}, "Proboval")
      store.put({}, "Garderob")
    }
  })
}) ()

function General(): JSX.Element {
  
  return (
    <Routes>
      <Route path="*"                 element={ <Error404 /> } /> { /*if page not found*/ }
      
      <Route path="/Spisok"           element={ <Mainpage /> } />

      <Route path="/Spisok/Dela"      element={ <Dela /> } />
      <Route path="/Spisok/Garderob"  element={ <Garderob /> } />
      <Route path="/Spisok/Proboval"  element={ <Proboval /> } />
    </Routes>
  )
}


export default General;