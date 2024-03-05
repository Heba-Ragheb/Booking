import React, { useState } from 'react'
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";

import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import Region from './Region';
import Cityregion from './Cityregion';
import Placesofinserts from './Placesofinserts';
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';




const Desregion = () => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const { t, i18n } = useTranslation();
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <div>
    
      <Container>
        <Row className="regTitle">
          <Col>
            <h2 className="recentTitle">
             {t('line120')}
            </h2>
          </Col>
        </Row>
        <Row className="regItem">
          <Col  className='linkReg'>
           
            <Button
              className='linkRegItem'
              outline
              onClick={() => setRSelected(1)}
              active={rSelected === 1}
            > {t('line21')}</Button>
          
            <Button 
            
               className='linkRegItem'
              outline
              onClick={() => setRSelected(2)}
              active={rSelected === 2}
       
           
            >{t('line22')}</Button>
         
            <Button 
               className='linkRegItem'
              outline
              onClick={() => setRSelected(3)}
              active={rSelected === 3}
            >{t('line23')}</Button>
            {rSelected === 1 && <Container className='regionMain'>
            <Row>
                <Col className="regionItem">
                <ul className='list-unstyled mb-0'>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Ibiza
                 </a>
                 <p className='regionpra'>1.674 properities</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Ras Al Khaimah
                </a>
                <p className='regionpra'>114 properities</p>
              </li >
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Bali
                </a>
                <p className='regionpra'>12.689properities</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                  Isle of Wight
                </a>
                <p className='regionpra'>938 properities</p>
              </li>
               </ul>
                </Col>
                <Col className="regionItem">
                <ul className='list-unstyled mb-0'>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Guernsey

                 </a>
                 <p className='regionpra'>61 properties</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Bihar


                </a>
                <p className='regionpra'>763 properties</p>
              </li >
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Santorini

                </a>
                <p className='regionpra'>1,764 properties</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Mykonos

                </a>
                <p className='regionpra'>1,453 properties</p>
              </li>
               </ul>
                </Col>
                <Col className="regionItem">
                <ul className='list-unstyled mb-0'>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Texel
                 </a>
                 <p className='regionpra'>1.674 properities</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Uttar Pradesh

                </a>
                <p className='regionpra'>114 properities</p>
              </li >
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Bali
                </a>
                <p className='regionpra'>12.689properities</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                  Isle of Wight
                </a>
                <p className='regionpra'>938 properities</p>
              </li>
               </ul>
                </Col>
                <Col className="regionItem">
                <ul className='list-unstyled mb-0'>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Lake Distri
                 </a>
                 <p className='regionpra'>1.674 properities</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Ras Al Khaimah
                </a>
                <p className='regionpra'>114 properities</p>
              </li >
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Hawaii

                </a>
                <p className='regionpra'>12.689properities</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                  Isle of Wight
                </a>
                <p className='regionpra'>938 properities</p>
              </li>
               </ul>
                </Col>
                <Col className="regionItem">
                <ul className='list-unstyled mb-0'>
             
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Ras Al Khaimah
                </a>
                <p className='regionpra'>114 properities</p>
              </li >
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                Phuket Province

                </a>
                <p className='regionpra'>12.689properities</p>
              </li>
              <li className='listItemRegion'>
                <a href='#!' className='linlItem'>
                

Tenerife

                </a>
                <p className='regionpra'>938 properities</p>
              </li>
               </ul>
                </Col>
            </Row>
        </Container>
     
}
         {rSelected === 2 &&
          <Container className='regionMain'>
          <Row>
              <Col className="regionItem">
              <ul className='list-unstyled mb-0'>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Paris, France
      
      
      
      
      
               </a>
               <p className='regionpra'>5,223 holiday rentals, 72 cottages</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Hurghada, Egypt
              </a>
              <p className='regionpra'>1,434 holiday rentals, 246 cottages, 35 cabins, 3 glamping sites</p>
            </li >
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              London, United Kingdom
              </a>
              <p className='regionpra'>7,622 holiday rentals, 827 cottages, 14 cabins, 3 glamping sites</p>
            </li>
            
             </ul>
              </Col>
              <Col className="regionItem">
              <ul className='list-unstyled mb-0'>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Istanbul, Turkey
      
      
      
      
      
      
               </a>
               <p className='regionpra'>3,188 holiday rentals, 74 cottages</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Sharm El Sheikh, Egypt
      
      
              </a>
              <p className='regionpra'>518 holiday rentals, 57 cottages, 8 cabins</p>
            </li >
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Cairo, Egypt
      
              </a>
              <p className='regionpra'>1,768 holiday rentals, 63 cottages, 4 glamping sites, 3 cabins</p>
            </li>
            
             </ul>
              </Col>
              <Col className="regionItem">
              <ul className='list-unstyled mb-0'>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Bangkok
      
      
      
      
      
      
      
               </a>
               <p className='regionpra'>4039 hotels</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              York
      
              </a>
              <p className='regionpra'>832 hotels</p>
            </li >
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Newcastle upon Tyne
              </a>
              <p className='regionpra'>389 hotels</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Manchester
              </a>
              <p className='regionpra'>1094 hotels</p>
            </li>
             </ul>
              </Col>
              <Col className="regionItem">
              <ul className='list-unstyled mb-0'>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Liverpool
      
      
      
      
      
      
               </a>
               <p className='regionpra'>1082 hotels</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Leeds
              </a>
              <p className='regionpra'>383 hotels</p>
            </li >
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Glasgow
      
              </a>
              <p className='regionpra'>12.689properities</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
                Isle of Wight
              </a>
              <p className='regionpra'>938 properities</p>
            </li>
             </ul>
              </Col>
              <Col className="regionItem">
              <ul className='list-unstyled mb-0'>
           
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Ras Al Khaimah
              </a>
              <p className='regionpra'>3343 hotel</p>
            </li >
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              Edinburgh
      
              </a>
              <p className='regionpra'>3343 hotel</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              
      
      Tenerife
      
              </a>
              <p className='regionpra'>938 properities</p>
            </li>
            <li className='listItemRegion'>
              <a href='#!' className='linlItem'>
              
      
      Tenerife
      
              </a>
              <p className='regionpra'>938 properities</p>
            </li>
             </ul>
              </Col>
          </Row>
      </Container>
         }{rSelected === 3 && <Container className='regionMain'>
         <Row>
         <Col className="regionItem">
             <ul className='list-unstyled mb-0'>
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Istanbul, Turkey
     
     
     
     
     
     
              </a>
              <p className='regionpra'>3,188 holiday rentals, 74 cottages</p>
           </li>
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Sharm El Sheikh, Egypt
     
     
             </a>
             <p className='regionpra'>518 holiday rentals, 57 cottages, 8 cabins</p>
           </li >
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Cairo, Egypt
     
             </a>
             <p className='regionpra'>1,768 holiday rentals, 63 cottages, 4 glamping sites, 3 cabins</p>
           </li>
           
            </ul>
             </Col> 
             <Col className="regionItem">
             <ul className='list-unstyled mb-0'>
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Paris, France
     
     
     
     
     
              </a>
              <p className='regionpra'>5,223 holiday rentals, 72 cottages</p>
           </li>
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Hurghada, Egypt
             </a>
             <p className='regionpra'>1,434 holiday rentals, 246 cottages, 35 cabins, 3 glamping sites</p>
           </li >
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             London, United Kingdom
             </a>
             <p className='regionpra'>7,622 holiday rentals, 827 cottages, 14 cabins, 3 glamping sites</p>
           </li>
           
            </ul>
             </Col>
             <Col className="regionItem">
             <ul className='list-unstyled mb-0'>
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Istanbul, Turkey
     
     
     
     
     
     
              </a>
              <p className='regionpra'>3,188 holiday rentals, 74 cottages</p>
           </li>
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Sharm El Sheikh, Egypt
     
     
             </a>
             <p className='regionpra'>518 holiday rentals, 57 cottages, 8 cabins</p>
           </li >
           <li className='listItemRegion'>
             <a href='#!' className='linlItem'>
             Cairo, Egypt
     
             </a>
             <p className='regionpra'>1,768 holiday rentals, 63 cottages, 4 glamping sites, 3 cabins</p>
           </li>
           
            </ul>
             </Col> 
           </Row>
       </Container>}
          </Col>
        </Row>
      </Container>
    
  
  </div>
  )
}

export default Desregion