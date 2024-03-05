import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./style.css"
import { useTranslation } from 'react-i18next';

const Destination = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Container className='destination'>
        <Row>
          <div className="destinationTitle">
            <h2 className='recentTitle'>
           {t('line8')}
            </h2>
            <p> {t('line9')}</p>
          </div>
        </Row> 
        <Row>
           <Col>
             <div className="destinationItem">
                <img src='imgBooking\dubai.jpg' className='destinationImg'/>
                <div className="destinationItemTitle">
                <h2 className='recentTitleDes'> {t('line10')}</h2>
                </div>
             </div>
           </Col> 
           <Col>
           <div className="destinationItem">
                <img src='imgBooking\abu dhabi.jpg' className='destinationImg'/>
                <div className="destinationItemTitle">
                <h2 className='recentTitleDes'> {t('line11')}</h2>
                </div>
             </div>
           </Col> 
        </Row>
        <Row>
           <Col> 
            <div className="destinationItem">
                <img src='imgBooking\london.jpg' className='destinationImg'/>
                <div className="destinationItemTitle">
                <h2 className='recentTitleDes'> {t('line12')}</h2>
                </div>
             </div></Col> 
           <Col>  <div className="destinationItem">
                <img src='imgBooking\sharjah.jpg' className='destinationImg'/>
                <div className="destinationItemTitle">
                <h2 className='recentTitleDes'> {t('line13')}</h2>
                </div>
             </div></Col> 
            <Col>  <div className="destinationItem">
                <img src='imgBooking\instanbul.jpg' className='destinationImg'/>
                <div className="destinationItemTitle">
                <h2 className='recentTitleDes'> {t('line14')}</h2>
                </div>
             </div></Col> 
          </Row>
      </Container>

    </div>
  )
}

export default Destination