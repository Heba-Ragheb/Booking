import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoQuestion } from "react-icons/go";
import { FaFlagUsa } from "react-icons/fa";
import "./style.css"
import { FcGlobe } from "react-icons/fc";
import { useHistory, useNavigate } from 'react-router-dom';

import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom';


const Navb = () => {
  const languages = [
    { name: "English", code: "en", dir: "ltr" },
    { name: "العربية", code: "ar" , dir: "rtl" },
  ];
  const [t,i18n]=useTranslation();
  const navigate = useNavigate()
  const handleSearch = ()=>{
     navigate("/Login" )
   }
   const currentLangObj = languages.find((lang) => lang.code ===  i18n.language);

useEffect(() => {
  document.body.dir = currentLangObj.dir || 'ltr'
}, [currentLangObj])
  return (
    <div className="navcontainer">
    <Navbar expand="lg" className="fluid">
    <Container  >
      <Navbar.Brand href="#" style={{color :"white" ,fontWeight: "bolder" , fontSize :"25px"}}>Booking.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
        </Nav>
        <div>
        <Form  className='navleft'>
          <Nav.Link href="#" className='navlink' style={{color :"white" , fontWeight: "500"}} >
        <span>
          EGP
        </span>
          </Nav.Link>
       {i18n.language=='ar'&& <Nav.Link href="#" className='navlink' onClick={()=>{i18n.changeLanguage('en')}} >
        
        <FcGlobe   className='navIcon'
         style={{ 
          width :"30px" ,
          fontSize :"25px", color :"white"
        
        }}
        />  </Nav.Link>}
       {i18n.language=='en'&& <Nav.Link href="#" className='navlink' onClick={()=>{i18n.changeLanguage('ar')}} >
        
        <FcGlobe   className='navIcon'
         style={{ 
          width :"30px" ,
          fontSize :"25px", color :"white"
        
        }}
        />  </Nav.Link>}
        <Nav.Link href="#" className='navlink'>
        <GoQuestion className='navIcon' style={{ 
          width :"30px" ,
          fontSize :"20px",
          color :"white"
        
        
        }}/>
          </Nav.Link >
        <Nav.Link href="#" style={{color :"white",fontWeight: "500"}} className='navlink'>
            List Your Properity
          </Nav.Link>
        <div className='btn'>  <Button className='navbtn' >Register</Button>
         
    
          <Button className='navbtn'
         onClick={handleSearch}
        
          >Sign in</Button></div>
        </Form></div>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navb