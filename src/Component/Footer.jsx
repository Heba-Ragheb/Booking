import React from 'react'
import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footerMain'>
        <div className="firstFooter">
            <div className="footBtn">
                <button>
                List your properity
                </button>
                <hr style={{fontWeight : "bold"}}/>
                <div className="footlink">
                    <a href='#'> Mobile version</a>
                    <a href='#'>Your account</a>
                    <a href='#'>Make changes to your booking online</a>
                    <a href='#'>Customer Service help</a>
                    <a href='#'>Become an affiliate</a>
                    <a href='#'>Booking.com for Business</a>
                </div>
            </div>
        </div>
        <Container className="footerMultilink">
          <Row>
          <Col lg='3' md='6' className='mb-4 mb-md-0'>
           

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='linlItem'>
                Countries
                 </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Regions
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Cities
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Districts
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Airports
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Hotels
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Places of interest
                </a>
              </li>
            </ul></Col>
            <Col lg='3' md='6' className='mb-4 mb-md-0'>
            

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='linlItem'>
  
Homes







                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Apartments
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Resorts
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Villas
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                B&Bs
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Guest houses
                </a>
              </li>
              
            </ul></Col><Col lg='3' md='6' className='mb-4 mb-md-0'>
           

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='linlItem'>

Unique places to stay








                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                All destinations
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                All flight destinations
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                All car hire locations
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Discover
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Reviews
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Discover monthly stays
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
               
Unpacked: Travel articles
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Seasonal and holiday deals
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Traveller Review Awards
                </a>
              </li>
            </ul></Col><Col lg='3' md='6' className='mb-4 mb-md-0'>
          

            <ul className='list-unstyled mb-0'>
                



              <li>
                <a href='#!' className='linlItem'>
                Car hire
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Flight finder
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                Restaurant reservations
                </a>
              </li>
              <li>
                <a href='#!' className='linlItem'>
                 Restaurant reservations
                </a>
              </li>
            </ul></Col>
          </Row>
          <Row>
            <Col style={{marginTop : "20px"}}>
            <span>Copyright © 1996–2024 Booking.com™. All rights reserved</span>
            </Col>
          </Row>
        </Container>
    </div>
   
  )
}

export default Footer