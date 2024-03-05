import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import { MdFlightTakeoff } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdFlightLand } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GoCode } from "react-icons/go";
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';
const Flight = () => {
  const [openOption, setOpenOption] = useState(false)
  const [openDate, setOpenDate] = useState(false)
  const navigate = useNavigate()
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);const [options, setOptions] = useState({
    adult: 1,})
  const handleSearch = ()=>{
    navigate("./Listsearch" , {state: {destination,state}})
  }
  const handelOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }
  
  const [destination,setDestination] = useState("")
  return (
    <div>
    <Helmet>
    <style>{'body { background-color: #f6f8fc; }'}</style>
</Helmet>
    <Container fluid className='flight'>
      <Row className="flightTitle">
        <h2 className='flightTitle'>Where do you want to go ?</h2>
      </Row>
      <Row className="flightItem">
        <Col>
      <div className="flightItem">
       <div className="freturn">
        <span>Return</span>
       
        <GoChevronDown  style={{margin :"5px"}}/>
       </div>
       <div className="freturn" onClick={() => { setOpenOption(!openOption) }}>
        <span>  {`${options.adult} Adult`}</span>
        {openOption && <div className='optionMain'> <div className='options'>
                <div className='option'>
                  <span style={{ color: "black" }}> adult</span>
                  <div className='groupBtn'> <button className='operationbtn' onClick={() => handelOption("adult", "i")}>+</button>
                    <span style={{ color: "black" }}>1</span>
                    <button className='operationbtn'
                      disabled={options.adult <= 1}
                      onClick={() => handelOption("adult", "d")}>-</button>
                  </div></div> </div></div>}
        <GoChevronDown style={{margin :"5px"}} />
       
       </div>
       <div className="freturn">
        <span>Economy</span>
        <GoChevronDown style={{margin :"5px"}}/>
       </div></div>
       </Col>
      </Row>
      
      <Row className='flightSearch'>
       <Col sm ={12} md ={6} lg ={3}>
       <div className="flightto">
        <div>
       <MdFlightTakeoff 
       style={{ fontSize: "23px",  margin: " 5px", cursor: "pointer" }} 
       />
       <input
                  type='text'
                  placeholder='From?'
                  className='headerSearchInput'
                 
                  style={{ textDecoration: "none", border: "none" }}
                /></div>
                <FaPlus
                 style={{ fontSize: "23px", marginLeft: " 3px", cursor: "pointer" }}  />
       </div>
       </Col>
       <Col sm ={12} md ={6} lg ={5}>
       <div className="flightCalender" onClick={() => { setOpenDate(!openDate) }}>
        <div className="start">
        <SlCalender 
         style={{ fontSize: "23px", margin: " 5px", cursor: "pointer" }} 
        />
        <span className='headerSearchText'  style={{ color: "black" }}>
                {`${format(state[0].startDate,
                  "mm/dd/yyyy"
                )}  `}
              </span>

        <GoCode  style={{ fontSize: "23px", margin: " 5px", cursor: "pointer" }}  />
        </div>
        <div className="start">
        <SlCalender  style={{ fontSize: "23px", margin: " 5px", cursor: "pointer" }}  />
        <span className='headerSearchText'  style={{ color: "black" }}>
                {` ${format(state[0].endDate,
                  "mm/dd/yyyy"
                )}  `}
              </span>

        <GoCode  style={{ fontSize: "23px", margin: " 5px", cursor: "pointer" }}  />
        </div>
        {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className="date"

              />}
       </div>
       
       </Col>
       <Col sm ={12} md ={6} lg ={3}>

       <div className="flightto">
      <div> <MdFlightLand
        style={{ fontSize: "23px",  margin: " 5px", cursor: "pointer" }} 
       />
       <input
                  type='text'
                  placeholder='to?'
                  className='headerSearchInput'
                  onChange={e=>setDestination(e.target.value)}
                  style={{ textDecoration: "none", border: "none" }}
                /></div>
                <FaPlus
                 style={{ fontSize: "23px", marginLeft: " 3px", cursor: "pointer" }} 
                />
       </div></Col>
       
       <Col  md ={6} lg ={1}> <Button
                 onClick={handleSearch}
                className='headerBtn'
              > Search</Button></Col>
      </Row>
    </Container></div>
  )
}

export default Flight