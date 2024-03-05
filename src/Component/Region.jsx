import React from 'react'
import { Container,Row ,Col } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Region = () => {
  return (
    <div>
        <Container className='regionMain'>
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
        <Outlet />
    </div>
  )
}

export default Region