import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { TbPlane } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";
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
import { useNavigate } from 'react-router-dom';
import Search from './Searchhotel';
import {useTranslation} from "react-i18next";


import { Link } from 'react-router-dom';
const Header = ( {type}) => {
  const [t,i18n]=useTranslation();
  const [destination,setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [openOption, setOpenOption] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
 const navigate = useNavigate()
 const handleSearch = ()=>{
    navigate("./Listsearch" , {state: {destination,date,options}}
    )
   
  }
  const handelOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }
  return (
    <div className="header">
      <div  className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
      
       { type !== "list" && <div className='title'>
          <span className='bigTitle'>{t('line1')}</span>
          <span className='smallTitle'>{t('line2')}</span>
        </div>}
        <Container fluid  className={type === "list" ? "headerSearch listMode" : "headerSearch"}>
          <Row className='searchrow'>
            <Col md={4} sm={12} className='headerSearchItem' style={{ display: "flex", justifyContent: "space-between", borderRadius: "10px 0px 0px 10px" }}>

              <div className='searchRight' style={{display:"flex",alignItems:"center"}} >
                <IoBedOutline style={{ fontSize: "25px", margin: " 5px", color: "black" }} />
                <input
                  type='text'
                  
                  placeholder='where Are You Going'
                  className='headerSearchInput'
                  onChange={e=>setDestination(e.target.value)}
                  style={{ textDecoration: "none", border: "none" ,height:"90%" }}
                />
              </div>
              <div className='searchLeft'>
                <IoClose style={{ fontSize: "25px", margin: " 5px", color: "black" }} />

              </div>

            </Col>
            <Col md={3} sm={6} className='headerSearchItem'>
              <SlCalender style={{ fontSize: "20px", marginLeft: " 3px", cursor: "pointer" }} />
              <span className='headerSearchText' onClick={() => { setOpenDate(!openDate) }} style={{ color: "black" }}>
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
            <Col md={3} sm={6} className='headerSearchItem' onClick={() => { setOpenOption(!openOption) }} >

              <BsPerson style={{ fontSize: "20px", marginLeft: " 3px", cursor: "pointer" }} />
              <span className='headerSearchText' style={{ color: "black" }}>
                {`${options.adult} Adult . ${options.children} Cildren .${options.room} Room`}
              </span>
              {openOption && <div className='optionMain'> <div className='options'>
                <div className='option'>
                  <span style={{ color: "black" }}> adult</span>
                  <div className='groupBtn'> <button className='operationbtn' onClick={() => handelOption("adult", "i")}>+</button>
                    <span style={{ color: "black" }}>1</span>
                    <button className='operationbtn'
                      disabled={options.adult <= 1}
                      onClick={() => handelOption("adult", "d")}>-</button>
                  </div></div>
                <div className='option'>
                  <span style={{ color: "black" }}> Childern</span>
                  <div className='groupBtn'><button className='operationbtn' onClick={() => handelOption("childern", "i")}>+</button>
                    <span style={{ color: "black" }}>0</span>
                    <button className='operationbtn'
                      disabled={options.children <= 1}
                      onClick={() => handelOption("childern", "d")}>-</button>
                  </div></div>
                <div className='option'>
                  <span style={{ color: "black" }}> room</span>
                  <div className='groupBtn'> <button className='operationbtn' onClick={() => handelOption("room", "i")}>+</button>
                    <span style={{ color: "black" }}>0</span>
                    <button className='operationbtn'
                      disabled={options.room <= 1}
                      onClick={() => handelOption("room", "d")}>-</button>
                  </div>
                </div>
                <div className='optionBtn'>
                  <button className='optionBtnItem'>
                    Done
                  </button>
                </div></div>
              </div>}

            </Col>

            <Col md={2} sm={12} className='headerSearchItem' style={{ borderRadius: "0px 10px 10px 0px", cursor: "pointer" }}>
              
              {/**<Link to="/Listsearch">*/}
              
              <Button
                 onClick={handleSearch}
                className='headerBtn'
              > Search</Button>
            </Col>
          </Row>
        </Container>

      </div></div>
  )
}

export default Header