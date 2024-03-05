import React, { createContext, useEffect, useReducer } from 'react'
import "./style.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { hotelReducer } from '../Context/Reducer';
import { useLocation } from 'react-router-dom';
import Header from './Header'
const Search = () => {
  const [hotels , setHotels] = useState([])
  useEffect(()=>{
    axios.get("Js/data.json")
    .then((res)=>{
       setHotels(res.data.hotels)
    })

  },[])
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || '');
  
  const hotelList = hotels.map((hotel)=>{
 return(
  <Container fluid className="hotelSearch" >
    <Row style={{alignItems:"center"}}>
      
   <Col sm={3} className="hotelImg " >
    <img
    style={{padding:"10px",borderRadius:"25px" ,width:"100%"}}
    src= {hotel.photo}
    alt='Sample'/>
   </Col>
   <Col sm={6} className="hotelDetail">
    <h4>{hotel.name}</h4>
    <p style={{color:"blue",fontSize:"15px",marginTop:"-5px"}}>{hotel.country}</p>
    <p style={{marginTop:"-10px"}}>{hotel.rating}</p>
    <span>{hotel.description}</span>
   </Col>
   <Col sm={3}  className="hotelRating" style={{height:"100%",gap:"5px"}}>
    <div className="rate" style={{display:"flex"}}>
      <div className="rateDetail" >
        <h5>{hotel.writenRating}</h5>
        <p style={{marginTop:"-8px"}}>18 reviews</p>
      </div>
      <span style={{borderRadius:"3px",backgroundColor:"#064cad",padding:"3px" ,height:"35px" ,color:"white"}}>{hotel.rating}</span>
    </div>
    <span style={{borderRadius:"3px",backgroundColor:"#febb02",padding:"3px" ,height:"35px"  ,fontSize:"13px",marginBottom:"8px"}}>New to Booking.com</span>
    <Button style={{marginTop:"5px"}}>Show prices</Button>
   </Col>
   </Row>
  </Container>

 )
})
const [htels, sethtels] = useState(hotelList);
const handleSearch =()=>{ if (destination === "") { sethtels(hotelList); return; }
const filterBySearch = hotelList.filter((item) => {
    if (item.toLowerCase()
        .includes(destination.toLowerCase())) { return item; }
})
sethtels(filterBySearch);}
return (
  <div>{hotelList}</div>
)}
export default Search