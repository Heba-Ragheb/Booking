import React from 'react'
import Navb from './Navb'
import Header from './Header'
import "./style.css"
import Search from './Search'
import Offers from './Offers'
import Destination from './Destination'
import Email from './Email'
import Footer from './Footer'
import Desregion from './Desregion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listsearch from '../Listsearch'
import Genuis from './Genuis'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Region from './Region'
import Cityregion from './Cityregion'
import Placesofinserts from './Placesofinserts'
import Trip from './Trip'
import PropertyT from './PropertyT'


const Home = () => {
  return (
    <div >
       
      
     
        <Header />
       <Search/>
        <Offers/>
        <PropertyT/>
        <Destination/>
      
     {/**  <Routes>
        <Route path="/" element={<Region />} />
          
          <Route path="Cityregion" element={<Cityregion />} />
          <Route path="Placesofinserts" element={<Placesofinserts />} />
        
  </Routes>*/}
   <Trip/>
  
      <Desregion/>
     
        <Genuis/>
         <Email/>
         <Footer/>
   
        
        
    </div>
  )
}

export default Home