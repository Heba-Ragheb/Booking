import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoClose } from "react-icons/io5";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import { Button, } from 'react-bootstrap';
import { SlCalender } from "react-icons/sl";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineAttractions } from 'react-icons/md';
const Attraction = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div><div className="header">
    <div  className= "headerContainer">
    
     <div className='title'>
     <span className='bigTitle'>Attractions, activities and </span>
       
     <span className='bigTitle'> experiences</span>
        <span className='smallTitle'>Discover new attractions and experiences to match your interests and travel style</span>
      </div>
      <Container fluid  className= "headerSearch">
        <Row className='searchrow'>
          <Col md={5} sm={12} className='headerSearchItem' style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px 0px 0px 10px" }}>

            <div className='searchRight'>
            <MdOutlineAttractions style={{ fontSize: "25px", marginLeft: " 8px",color:"black" }} />
              <input
                type='text'
                placeholder='where Are You Going'
                className='headerSearchInput'
               
                style={{ textDecoration: "none", border: "none" }}
              />
            </div>
            <div className='searchLeft'>
              <IoClose style={{ fontSize: "25px", margin: " 5px", color: "black" }} />

            </div>

          </Col>
          <Col md={5} sm={6} className='headerSearchItem'>
              <SlCalender style={{ fontSize: "20px", marginLeft: " 3px", cursor: "pointer" }} />
              <span className='headerSearchText' onClick={() => { setOpenDate(!openDate) }} style={{ color: "black",textAlign:"center" }}>
                {`${format(date[0].startDate,
                  "mm/dd/yyyy"
                )} to ${format(date[0].endDate,
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
          <Col md={2} sm={12} className='headerSearchItem' style={{ borderRadius: "0px 10px 10px 0px", cursor: "pointer" }}>
              
              
              
              <Button
                 
                className='headerBtn'
              > Search</Button>
            </Col>
          </Row>
          </Container></div></div>
          
          <Container  className='destinationA'>
        <Row>
          <div className="destinationTitle">
            <h2 className='recentTitle'>
            Nearby destinations
            </h2>
             </div>
        </Row> 
        <Row>
           <Col>
             <div className="destinationItemA">
                <img src='imgBooking\luxor.jpg' className='destinationImgA'/>
                <div className="destinationItemTitleA">
                <h3 className='recentTitleDesA'>Dubai</h3>
                </div>
             </div>
           </Col> 
           <Col>  <div className="destinationItemA">
                <img src='imgBooking\instanbul.jpg' className='destinationImgA'/>
                <div className="destinationItemTitleA">
                <h3 className='recentTitleDesA'>Instanbul</h3>
                </div>
             </div></Col> 
           <Col>
           <div className="destinationItemA">
                <img src='imgBooking\masra.jpg' className='destinationImgA'/>
                <div className="destinationItemTitleA">
                <h3 className='recentTitleDesA'>Abu dhabi</h3>
                </div>
             </div>
           </Col> 
        </Row>
        <Row>
           <Col> 
            <div className="destinationItemA">
                <img src='imgBooking\london.jpg' className='destinationImgA'/>
                <div className="destinationItemTitleA">
                <h3 className='recentTitleDesA'>London</h3>
                </div>
             </div></Col> 
           <Col>  <div className="destinationItemA">
                <img src='imgBooking\sharjah.jpg' className='destinationImgA'/>
                <div className="destinationItemTitleA">
                <h3 className='recentTitleDesA'>Sharjah</h3>
                </div>
             </div></Col> 
            <Col>  <div className="destinationItemA">
                <img src='imgBooking\instanbul.jpg' className='destinationImgA'/>
                <div className="destinationItemTitleA">
                <h3 className='recentTitleDesA'>Instanbul</h3>
                </div>
             </div></Col> 
          </Row>
      </Container>
      <Container className='genius'>
    <Row className='genuisrow'>
     
     <Col  className="rightGenius">
        <div className="title">
            <h3 className='geniusTitle' style={{fontSize:"25"}}>
            Get instant discounts

            </h3>
            <p>
            Simply sign into your Booking.com account and look for the blue Genius logo to save
            </p></div>
            <div className="genuisbtn">
            <button className='gbtnactive'>Sign in</button>
             </div>
        </Col>
     </Row>

    </Container>
   
    <Container style={{marginTop:"20px"}}>
      <Row>
      <hr />
        <h4 style={{fontSize:"20px",fontWeight:"bold",marginTop:"20px"}}>We've got you covered</h4>
      </Row>
      <Row className='exploreMain' >
        <Col sm={12} md={4} className='explore'>
        <MdOutlineAttractions style={{ fontSize: "50px", margin: " 10px",color:"green" }} />
           <div className="exploreItem">
            <h5 style={{fontSize:"17px",fontWeight:"bold"}}>Explore top attractions</h5>
            <p style={{fontSize:"14px"}}>Experience the best of your destination, with attractions, tours, activities and more</p>
           </div>
        </Col>
        <Col sm={12} md={4} className='explore'>
        <FaHeadset style={{ fontSize: "40px", margin: " 10px",color:"green" }} />
           <div className="exploreItem">
            <h5 style={{fontSize:"17px",fontWeight:"bold"}}>Fast and flexible</h5>
            <p style={{fontSize:"14px"}}>Book tickets online in minutes, with free cancellation on many attractions</p>
           </div>
        </Col>
        <Col sm={12} md={4} className='explore'>
        <MdOutlineAttractions style={{ fontSize: "50px", margin: " 10px",color:"green" }} />
           <div className="exploreItem">
            <h5 style={{fontSize:"17px",fontWeight:"bold"}}>Support when you need it</h5>
            <p style={{fontSize:"14px"}}>Booking.com's global Customer Service team is here to help 24/7</p>
           </div>
        </Col>
       
      </Row>
      <hr />
    </Container>

          </div>
  )
}

export default Attraction