import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Onu from './Pages/Onu'
import Home from './Pages/Home'
import styled from 'styled-components'

const Ul = styled.ul`
 display:flex;
 justify-content:space-evenly;
 
`
const Links = styled(Link)`
color: red ;
text-decoration:none;
list-style:none;
font-size: 30px;
width: 90px;
&:hover{
  color: PaleVioletRed;
  font-weight:600;
}
`
export default function App() {
  return (
    <Router>
      <Ul>
        <Links to='/'><li>Home</li></Links>
        <Links to='/Onu'><li>Onu</li></Links>
        
      </Ul>
 
      <Routes> 
        <Route path='/Onu' element={<Onu/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
     
    </Router>

  );
}
