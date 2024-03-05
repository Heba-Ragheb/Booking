import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import Navb from './Component/Navb'
import Header from './Component/Header'
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
import MyMap from './Component/MyMap';
import Search, { HotelState } from './Component/Searchhotel';
import Searchhotel from './Component/Searchhotel';

const Listsearch = () => {
   /**  const location = useLocation();
   
    const [date,setDate] = useState(location.state.date)
    const [destination,setDestination] = useState(location.state.destination)
    const [options,setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false)*/
    const [hotels , setHotels] = useState([])
    const [htels, sethtels] = useState([]);
    useEffect(()=>{
      axios.get("Js/data.json")
      .then((res)=>{
         setHotels(res.data.hotels)
         sethtels(res.data.hotels);
      })
  
    },[])
    
   // const [destination, setDestination] = useState(location.state?.destination || '');
    
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
  
  const handleSearch =()=>{  if (destination === "") {
    sethtels(hotels);
    return;
  }
  const filterBySearch = hotels.filter((item) => {
    if (typeof item.name === 'string' && item.name.toLowerCase().includes(destination.toLowerCase())) {
      return item;
    }
  });
  sethtels(filterBySearch);
};
    const location = useLocation();
    const [date, setDate] = useState(location.state?.date || [
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
   /**  const {state :{hotels},searcheQuery }=HotelState()
    const transform =()=>{
        let sortedHotels = hotels
        if(searcheQuery){
            sortedHotels = sortedHotels.filter((hote) => hote.country.toLowerCase().includes(searcheQuery));
          }
          
          return sortedHotels;
    }*/
    const [destination, setDestination] = useState(location.state?.destination || '');
    const [options, setOptions] = useState(location.state?.options || {
        adult: 1,
        children: 0,
        room: 1
    });
    const [openDate, setOpenDate] = useState(false)

 
    return (
        <div>
            <Container fluid className="listContainer" style={{widith:"100%"}}>
               
                <Row className="listWrapper">
                    <Col sm={4} >
                       <MyMap/>
                        <div className="listSearch">

                        <h1 className='lsTitle'>
                            Search
                        </h1>
                        <div className="lsItem">
                            <label>
                                Destination
                            </label>
                            <input type='text' placeholder={destination}
                          //   onChange={(e)=>{
                            //    productDispatch ({
                             //     type : "Sorted_by_Search",
                             //     payload: e.target.value,
                            //    
                            //    })
                            //  }}
                            />
                            </div>
                          <div className="lsItem">
                            <label>
                                Check-in Date
                            </label>
                            <span onClick={() => { setOpenDate(!openDate)} }>
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
                        className="dateR"

                      />}
                          </div>
                          <div className="lsOption">
                            <label>Options</label>
                            <div className="isOptionItem">
                                <span className='isOptionText'>
                                    Min price <small>per night</small>
                                     </span>
                                     <input type='number' className='IsOptionInput'/>
                               
                            </div>
                            <div className="isOptionItem">
                                <span className='isOptionText'>
                                    Adult
                                </span>
                                <input
                                type='number'
                                className='IsOptionInput'
                                min={1}
                                placeholder={options.adult}
                                />
                            </div>
                            <div className="isOptionItem">
                                <span className='isOptionText'>
                                    Children
                                </span>
                                <input
                                type='number'
                                className='IsOptionInput'
                                min={0}
                                placeholder={options.children}
                                />
                            </div>
                            <div className="isOptionItem">
                                <span className='isOptionText'>
                                room
                                </span>
                                <input
                                type='number'
                                className='IsOptionInput'
                                min={1}
                                placeholder={options.room}
                                />
                            </div>
                            <div className="IsItem">
                            <Button onClick={handleSearch}></Button>
                            </div>
                          </div>
                         
                     </div>
                    </Col>
                    <Col sm={8} className="listResult">
                    <div>  
                     {/**   
                      {htels.map((htel) => {
                    return (
                        <div >{htel}</div>
                    )
                })
                }*/ }
                {hotelList}
                </div>
                      
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Listsearch