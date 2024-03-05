import React from 'react'
import { IoBedOutline } from "react-icons/io5";

import "./style.css"
import { SlCalender } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { useState } from 'react'
import { Button, } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { IoClose } from "react-icons/io5";
import { Container, Col, Row } from "react-bootstrap";
import { CiClock1 } from "react-icons/ci";
import Email from './Email'
import Footer from './Footer'
import Genuis from './Genuis'
const Car = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div>    <div className="header">
    <div  className= "headerContainer">
    
    <div className='title'>
        <span className='bigTitle'>Car hire for any kind of trip</span>
        <span className='smallTitle'>Great deals at great prices, from the biggest car hire companies</span>
      </div>
      <Container fluid  className= "headerSearch">
        <Row className='searchrow'>
          <Col md={6} sm={12} className='headerSearchItem' style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px 0px 0px 10px" }}>

            <div className='searchRight'>
              <IoBedOutline style={{ fontSize: "25px", margin: " 5px", color: "black" }} />
              <input
                type='text'
                placeholder='Pick-up lpcation'
                className='headerSearchInput'
                
                style={{ textDecoration: "none", border: "none" }}
              />
            </div>
            <div className='searchLeft'>
              <IoClose style={{ fontSize: "25px", margin: " 5px", color: "black" }} />

            </div>

          </Col>
          <Col md={1} sm={6} className='headerSearchItem'>
            <SlCalender style={{ fontSize: "20px", marginLeft: " 3px", cursor: "pointer" }} />
            <span className='headerSearchText' onClick={() => { setOpenDate(!openDate) }} style={{ color: "black" , fontSize:"13px" }}>
              {`from ${format(date[0].startDate,
                "mm/dd/yyyy"
              )}  `}
            </span>

            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"

            />}
          </Col>
          <Col md={1} sm={6} className='headerSearchItem'  >

          <CiClock1  style={{color:"black" ,fontSize:"20px",marginRight:"5px"}}/>
<span className='headerSearchText' style={{ color: "black" ,fontSize:"18px"}}>
  10.0
</span>
           

          </Col>
          <Col md={1} sm={6} className='headerSearchItem'>
            <SlCalender style={{ fontSize: "20px", marginLeft: " 3px", cursor: "pointer" }} />
            <span className='headerSearchText' onClick={() => { setOpenDate(!openDate) }} style={{ color: "black" , fontSize:"13px"}}>
              {` to ${format(date[0].endDate,
                "mm/dd/yyyy"
              )}  `}
            </span>

            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"

            />}
          </Col>
          <Col md={1} sm={6} className='headerSearchItem'  >


<CiClock1  style={{color:"black" ,fontSize:"20px",marginRight:"5px"}}/>
<span className='headerSearchText' style={{ color: "black" ,fontSize:"18px"}}>
  10.0
</span>


</Col>

          <Col md={2} sm={12} className='headerSearchItem' style={{ borderRadius: "0px 10px 10px 0px", cursor: "pointer" }}>
            
            
            
            <Button
              
              className='headerBtn'
            > Search</Button>
          </Col>
        </Row>
      </Container>

    </div></div>
    <Container className='popcar'>
    <Row>
      <Col>
<h3 className='carTtile'>Popular car hire brands</h3>
      </Col>
      
    </Row>
    <Row className='carbrand'>
    <Col className='carbrandItem'>
    <img className='popimage' src='imgBooking\budget.png'/>
    <span>Budget</span>
      </Col>
      <Col  className='carbrandItem'>
    <img className='popimage' src='imgBooking\avis.png'/>
    <span>Avis</span>
      </Col>
      <Col  className='carbrandItem'>
    <img className='popimage' src='imgBooking\sk.png'/>
    <span>SK Rent</span>
      </Col>
      <Col  className='carbrandItem'>
    <img className='popimage' src='imgBooking\calder.png'/>
    <span>Caldera</span>
      </Col>
      <Col  className='carbrandItem'>
    <img className='popimage' src='imgBooking\enterprice.png'/>
    <span>Enterprise</span>
      </Col>
      <Col  className='carbrandItem'>
    <img className='popimage' src='imgBooking\sixit.png'/>
    <span>Sixt</span>
      </Col>
      <Col  className='carbrandItem'>
    <img className='popimage' src='imgBooking\europcar.png'/>
    <span>Europcar</span>
      </Col>
      <Col className='carbrandItem' >
    <img className='popimage' src='imgBooking\surprice.png'/>
    <span>Surprice</span>
      </Col>
      <Col className='carbrandItem'>
    <img className='popimage' src='imgBooking\hertize.png'/>
    <span>Hertz</span>
      </Col>
    </Row>
   
    </Container>
    <Genuis/>
    <Container fluid className='cancelation'>
    
      <Row>
        <Col sm={12} md={4} className="cancelationItem" >
        <img
        className='cancelationimg'
        src='imgBooking\CustomerService.png'
        />
        <div className="cancelationdetal">
          <h3>We’re here for you</h3>
          <p>Providing customer support in over 30 languages</p>
        </div>
        </Col>
        <Col sm={12} md={4} className="cancelationItem">
        <img
        className='cancelationimg'
        src='imgBooking\Reviews.png'
        />
        <div className="cancelationdetal">
          <h3>We’re here for you</h3>
          <p>Providing customer support in over 30 languages</p>
        </div>
        </Col>
        <Col sm={12} md={4} className="cancelationItem" >
        <img
        className='cancelationimg'
        src='imgBooking\FreeCancellation.png'
        />
        <div className="cancelationdetal">
          <h3>We’re here for you</h3>
          <p>Providing customer support in over 30 languages</p>
        </div>
        </Col>
        
      </Row>
    </Container>
    <Container className='detailMain'>
    <Row>
        <h3 className='carTtile'>Frequently asked questions</h3>
      </Row>
      <Row>
        <Col md={6} sm={12}>
        <div className='detail' >
        <details className='carDetail'>
  <summary>How much does it cost to rent a car in Egypt for a week?</summary>
  Based on the average daily cost of EGP 1,391, it will cost you around EGP 9,736 for a week on our site
</details>
<hr/>
<details className='carDetail'>
  <summary>How much does it cost to rent a car in Egypt for a month?</summary>
  Based on the average daily cost of EGP 1,391, it will cost you around EGP 41,728 for a month on our site.

</details>
<hr/>
<details className='carDetail'>
  <summary>Which car do people usually rent in Egypt?</summary>
  Medium is the most popular car group to rent in Egypt among our users, followed by small and large.
</details>
<hr/>
<details className='carDetail'>
  <summary>How much does it cost to rent Medium car in Egypt?</summary>
  On average, renting Medium car in Egypt costs EGP 1,140 per day on our site.
</details>
<hr/>
<details className='carDetail'>
  <summary>How much does it cost to rent Small car in Egypt?</summary>
  On average, renting Small car in Egypt costs EGP 1,253 per day on our site.

</details>
<hr/>
<details className='carDetail'>
  <summary>How much does it cost to rent Small car in Egypt?</summary>
  On average, renting Small car in Egypt costs EGP 1,253 per day on our site.

</details>
<hr/>
<details className='carDetail'>
  <summary>How much does it cost to rent Small car in Egypt?</summary>
  On average, renting Small car in Egypt costs EGP 1,253 per day on our site.

</details></div>


        </Col>
        
        
        <Col md={6 } sm={12}   >
          
<div className='detail' >
         
        <details className='carDetail'>
  <summary >How much does it cost to rent a car in Egypt for a week?</summary>
  Based on the average daily cost of EGP 1,391, it will cost you around EGP 9,736 for a week on our site
</details>
<hr/>
<details className='carDetail'>
  <summary>How much does it cost to rent a car in Egypt for a month?</summary>
  Based on the average daily cost of EGP 1,391, it will cost you around EGP 41,728 for a month on our site.

</details>
<hr/>
<details className='carDetail'>
  <summary>Which car do people usually rent in Egypt?</summary>
  Medium is the most popular car group to rent in Egypt among our users, followed by small and large.
</details>
<hr/>
<details className='carDetail'>
  <summary>How much does it cost to rent Small car in Egypt?</summary>
  On average, renting Small car in Egypt costs EGP 1,253 per day on our site.

</details>
</div>

        </Col>
      </Row>
    </Container>
    <Email/>
         <Footer/>
    </div>
  )
}

export default Car