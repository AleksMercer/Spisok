import React from 'react';
import { Routes, Route } from "react-router-dom"
import './style.css';

/* Components import */
import Error404 from '../components/404error/Error404';
import Mainpage from '../components/mainpage/Mainpage';
import Dela     from '../components/dela/Dela';
import Garderob from '../components/garderob/Garderob';
import Proboval from '../components/proboval/Proboval';

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