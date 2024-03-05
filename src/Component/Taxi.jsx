import React, { useState } from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { IoClose } from 'react-icons/io5';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import { Link } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { BsPerson } from 'react-icons/bs';
import { IoLocationOutline } from "react-icons/io5";
import { CiClock1 } from 'react-icons/ci';
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { Button, ButtonGroup } from 'reactstrap';
import { MdPerson } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";

import Helmet from 'react-helmet';
import Email from './Email';
import Footer from './Footer';
const Taxi = () => {
  const [destination,setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [openOption, setOpenOption] = useState(false)
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    
      <div>
      <Helmet>
    <style>{'body { background-color: #f6f8fc; }'}</style>
</Helmet>
      <Container >
        <Row className='mainTaxi'>
          <div className="taxiDetail">    <h2>Book your airport taxi</h2>
          <p>Easy airport transfers to and from your accommodation</p>
      </div>
      <div className="taxiCheck">
     
     
          <Form.Check // prettier-ignore
            type="checkbox"
            
            label="One-way"
          />
           <Form.Check // prettier-ignore
            type="checkbox"
            
            label="Return"
          />
           
 
      </div>
      
        </Row>
        
        <Row className='searchrow'>
            <Col md={3} sm={12} className='headerSearchItem' style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px 0px 0px 10px" }}>
            <IoLocationOutline style={{ fontSize: "25px", margin: " 5px", color: "black" }} />
              <div className='searchRight'>
                  <input
                  type='text'
                  placeholder='where Are You Going'
                  className='headerSearchInput'
                  onChange={e=>setDestination(e.target.value)}
                  style={{ textDecoration: "none", border: "none" }}
                />
              </div>
              <div className='searchLeft'>
                <IoClose style={{ fontSize: "25px", margin: " 5px", color: "black" }} />

              </div>

            </Col>
            <Col md={3} sm={12} className='headerSearchItem' style={{ display: "flex", justifyContent: "space-between" }}>
            <IoLocationOutline style={{ fontSize: "25px", margin: " 5px", color: "black" }} />
              <div className='searchRight'>
                  <input
                  type='text'
                  placeholder='where Are You Going'
                  className='headerSearchInput'
                  onChange={e=>setDestination(e.target.value)}
                  style={{ textDecoration: "none", border: "none" }}
                />
              </div>
              <div className='searchLeft'>
                <IoClose style={{ fontSize: "25px", margin: " 5px", color: "black" }} />

              </div>

            </Col>
            <Col md={2} sm={6} className='headerSearchItem'>
              <SlCalender style={{ fontSize: "20px", marginLeft: " 8px",marginRight:"8px", cursor: "pointer" }} />
              <span className='headerSearchText' onClick={() => { setOpenDate(!openDate) }} style={{ color: "black" }}>
                {`${format(date[0].startDate,
                  "mm/dd/yyyy"
                )}`}
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
            <Col md={1} sm={6} className='headerSearchItem' onClick={() => { setOpenOption(!openOption) }} >

              <BsPerson style={{ fontSize: "20px", marginLeft: " 3px", cursor: "pointer" }} /></Col>
              <Col md={2} sm={12} className='headerSearchItem' style={{ borderRadius: "0px 10px 10px 0px", cursor: "pointer" }}>
              
              
              
              <Button
                
                className='headerBtn'
              > Search</Button>
            </Col>
        </Row>
        <Row style={{marginTop:"70px"}}>
          <Col md={4} sm={12} style={{display:"flex",justifyContent:"space-around" ,alignItems:"center"}}>
          <BiSolidPlaneAlt  style={{fontSize:"40px",padding:"5px",marginRight:"10px"}} />
          <div className="tracDetail">
            <h4 style={{fontSize:"16px",fontWeight:"bold"}}>Flight tracking</h4>
            <p style={{fontSize:"14px"}}>Your driver tracks your flight and waits for you if it's delayed</p>
          </div>
          </Col>
          <Col md={4} sm={12} style={{display:"flex",justifyContent:"space-around" ,alignItems:"center"}}>
          <IoPricetagsOutline  style={{fontSize:"40px",padding:"10px",marginRight:"5px"}} />
          <div className="tracDetail">
            <h4 style={{fontSize:"16px",fontWeight:"bold"}}>Flight tracking</h4>
            <p style={{fontSize:"14px"}}>Your driver tracks your flight and waits for you if it's delayed</p>
          </div>
          </Col>
          <Col md={4} sm={12} style={{display:"flex",justifyContent:"space-around" ,alignItems:"center"}}>
          <FaCheck  style={{fontSize:"40px",padding:"5px",marginRight:"10px"}} />
          <div className="tracDetail">
            <h4 style={{fontSize:"16px",fontWeight:"bold"}}>Flight tracking</h4>
            <p style={{fontSize:"14px"}}>Your driver tracks your flight and waits for you if it's delayed</p>
          </div>
          </Col> 
        </Row>
      </Container>
      <div style={{backgroundColor:"white"}}>
      <Container >
        <Row style={{textAlign:"center"}}>
          <h3 style={{marginTop:"60px" ,marginBottom:"50px"}}>Airport transfers made easy</h3>
        </Row>
        <Row style={{display:"flex",alignItems:"center"}}>
          <Col md={6} sm={12} >
         <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
          <img src='imgBooking\taxi-book-taxi.4fcb8e24.svg' style={{marginBottom:"8px",marginRight:"15px"}}/>
          <div className="bookingCarDetail">
            <h5 style={{fontWeight:"bold",marginBottom:"18px"}}>Booking your airport taxi</h5>
            <p style={{fontSize:"14px"}}>Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pick-up time</p>
          </div>
          </div> 
          <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
          <img src='imgBooking\taxi-meet-driver.d6713568.svg' style={{marginBottom:"8px",marginRight:"15px"}}/>
          <div className="bookingCarDetail">
            <h5 style={{fontWeight:"bold",marginBottom:"18px"}}>Meeting your driver
</h5>
            <p style={{fontSize:"14px"}}>You'll be met on arrival and taken to your vehicle. Your driver will track your flight, so they'll wait for you even if it's delayed</p>
          </div>
          </div> 
          <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
          <img src='imgBooking\taxi-arrive-at-destination.b3ceb242.svg' style={{marginBottom:"8px",marginRight:"15px"}}/>
          <div className="bookingCarDetail">
            <h5 style={{fontWeight:"bold",marginBottom:"18px"}}>Arriving at your destination
</h5>
            <p style={{fontSize:"14px"}}>Get to your destination quickly and safely – no waiting in line for a taxi, no figuring out public transport</p>
          </div>
          </div> 
          </Col>
          <Col></Col>
          <Col md={5} sm={12} style={{alignItems:"center"}}>
             <h6>How it work</h6>
            <img src='imgBooking\taxi-how-it-works.94ace4c2.svg'/>
          </Col>
          
        </Row>
      </Container>
      <div style={{backgroundColor:"#f6f8fc"}}>
      <Container >
        
        <Row style={{textAlign:"center"}}>
          <h3 style={{marginTop:"60px" ,marginBottom:"50px"}}>Airport transfers made easy</h3>
        </Row>
       <div>
       <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          1-3 passengers
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          4-7 passengers
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          All taxis
        </Button>
      </ButtonGroup>
       </div>
      
        {rSelected === 1 &&
         <Row style={{marginTop:"30px",marginBottom:"50px"}}>
        <Col md={6} sm={12} >
          <div className="passenger" style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
            <h5 style={{fontSize:"16px" , fontWeight:"bold"}}>Standard</h5>
            <h6 style={{fontSize:"15px" , fontWeight:"300" , marginTop:"-5px",marginBottom:"20px"}}>Skoda Octavia or similar</h6>
            <span style={{display:"flex",gap:"5px"}}>
            <MdPerson style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>3 passengers</h6>
            </span>
            <span  style={{display:"flex",gap:"5px"}}>
            <IoBagHandle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>2 standard bags</h6>
            </span>
            <span  style={{display:"flex",gap:"5px",color:"blueviolet"}}> 
            <FaRegCheckCircle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Meet & Greet included</h6>
            </span>
            <span  style={{display:"flex",gap:"5px" , color:"green"}}>
            <FaCheck  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Free cancellation</h6>
            </span>
            <Button color="primary">search</Button>
          </div>
        </Col>
        
        <Col md={6} sm={12} >
          <div className="passenger" style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
            <h5 style={{fontSize:"16px" , fontWeight:"bold"}}>Standard</h5>
            <h6 style={{fontSize:"15px" , fontWeight:"300" , marginTop:"-5px",marginBottom:"20px"}}>Skoda Octavia or similar</h6>
            <span style={{display:"flex",gap:"5px"}}>
            <MdPerson style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>3 passengers</h6>
            </span>
            <span  style={{display:"flex",gap:"5px"}}>
            <IoBagHandle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>2 standard bags</h6>
            </span>
            <span  style={{display:"flex",gap:"5px",color:"blueviolet"}}> 
            <FaRegCheckCircle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Meet & Greet included</h6>
            </span>
            <span  style={{display:"flex",gap:"5px" , color:"green"}}>
            <FaCheck  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Free cancellation</h6>
            </span>
            <Button color="primary">search</Button>
          </div>
        </Col>
       </Row>}

       {rSelected === 2 &&
         <Row style={{marginTop:"30px", marginBottom:"50px"}}>
        <Col md={4} sm={12} >
          <div className="passenger" style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
            <h5 style={{fontSize:"16px" , fontWeight:"bold"}}>Standard</h5>
            <h6 style={{fontSize:"15px" , fontWeight:"300" , marginTop:"-5px",marginBottom:"20px"}}>Skoda Octavia or similar</h6>
            <span style={{display:"flex",gap:"5px"}}>
            <MdPerson style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>3 passengers</h6>
            </span>
            <span  style={{display:"flex",gap:"5px"}}>
            <IoBagHandle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>2 standard bags</h6>
            </span>
            <span  style={{display:"flex",gap:"5px",color:"blueviolet"}}> 
            <FaRegCheckCircle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Meet & Greet included</h6>
            </span>
            <span  style={{display:"flex",gap:"5px" , color:"green"}}>
            <FaCheck  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Free cancellation</h6>
            </span>
            <Button color="primary">search</Button>
          </div>
        </Col>
        
        <Col md={4} sm={12} >
          <div className="passenger" style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
            <h5 style={{fontSize:"16px" , fontWeight:"bold"}}>Standard</h5>
            <h6 style={{fontSize:"15px" , fontWeight:"300" , marginTop:"-5px",marginBottom:"20px"}}>Skoda Octavia or similar</h6>
            <span style={{display:"flex",gap:"5px"}}>
            <MdPerson style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>3 passengers</h6>
            </span>
            <span  style={{display:"flex",gap:"5px"}}>
            <IoBagHandle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>2 standard bags</h6>
            </span>
            <span  style={{display:"flex",gap:"5px",color:"blueviolet"}}> 
            <FaRegCheckCircle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Meet & Greet included</h6>
            </span>
            <span  style={{display:"flex",gap:"5px" , color:"green"}}>
            <FaCheck  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Free cancellation</h6>
            </span>
            <Button color="primary">search</Button>
          </div>
        </Col>
        <Col md={4} sm={12} >
          <div className="passenger" style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
            <h5 style={{fontSize:"16px" , fontWeight:"bold"}}>Standard</h5>
            <h6 style={{fontSize:"15px" , fontWeight:"300" , marginTop:"-5px",marginBottom:"20px"}}>Skoda Octavia or similar</h6>
            <span style={{display:"flex",gap:"5px"}}>
            <MdPerson style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>3 passengers</h6>
            </span>
            <span  style={{display:"flex",gap:"5px"}}>
            <IoBagHandle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>2 standard bags</h6>
            </span>
            <span  style={{display:"flex",gap:"5px",color:"blueviolet"}}> 
            <FaRegCheckCircle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Meet & Greet included</h6>
            </span>
            <span  style={{display:"flex",gap:"5px" , color:"green"}}>
            <FaCheck  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Free cancellation</h6>
            </span>
            <Button color="primary">search</Button>
          </div>
        </Col>
       </Row>}
       {rSelected === 3 &&
         <Row style={{marginTop:"30px", marginBottom:"50px"}}>
        <Col md={6} sm={12} >
          <div className="passenger" style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
            <h5 style={{fontSize:"16px" , fontWeight:"bold"}}>Standard</h5>
            <h6 style={{fontSize:"15px" , fontWeight:"300" , marginTop:"-5px",marginBottom:"20px"}}>Skoda Octavia or similar</h6>
            <span style={{display:"flex",gap:"5px"}}>
            <MdPerson style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>3 passengers</h6>
            </span>
            <span  style={{display:"flex",gap:"5px"}}>
            <IoBagHandle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>2 standard bags</h6>
            </span>
            <span  style={{display:"flex",gap:"5px",color:"blueviolet"}}> 
            <FaRegCheckCircle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Meet & Greet included</h6>
            </span>
            <span  style={{display:"flex",gap:"5px" , color:"green"}}>
            <FaCheck  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Free cancellation</h6>
            </span>
            <Button color="primary">search</Button>
          </div>
        </Col>
        
        <Col md={6} sm={12} >
          <div className="passenger" style={{padding:"10px",backgroundColor:"white",borderRadius:"10px"}}>
            <h5 style={{fontSize:"16px" , fontWeight:"bold"}}>Standard</h5>
            <h6 style={{fontSize:"15px" , fontWeight:"300" , marginTop:"-5px",marginBottom:"20px"}}>Skoda Octavia or similar</h6>
            <span style={{display:"flex",gap:"5px"}}>
            <MdPerson style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>3 passengers</h6>
            </span>
            <span  style={{display:"flex",gap:"5px"}}>
            <IoBagHandle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>2 standard bags</h6>
            </span>
            <span  style={{display:"flex",gap:"5px",color:"blueviolet"}}> 
            <FaRegCheckCircle  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Meet & Greet included</h6>
            </span>
            <span  style={{display:"flex",gap:"5px" , color:"green"}}>
            <FaCheck  style={{fontSize:"20px"}} />
             <h6 style={{fontWeight:"lighter",fontSize:"15px"}}>Free cancellation</h6>
            </span>
            <Button color="primary">search</Button>
          </div>
        </Col>
       </Row>}</Container>
      <div style={{backgroundColor:"white"}}> <Container>
       <Row style={{marginTop:"40px"}}>
        <Col md={4} sm={12} style={{backgroundColor:"#f6f8fc",border:"1px solid rgba(0, 0, 0, 0.267)",padding:"5px",borderRadius:"5px",marginRight:"-10px"}} >
          <div  >
          <h3 style={{fontSize:"25px"}}>Find out more about our airport taxi service </h3>
          <span>See more FAQs on our <a>help page</a></span>
          </div>  </Col>
         <Col md={7 } sm={12}   >
          
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
      </Container></div>
      </div>
      </div>
      <Email/>
      <Footer/>
    </div>
  )
}

export default Taxi