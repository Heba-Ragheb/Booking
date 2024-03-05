import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

const Genuis = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container className='genius'>
    <Row className='genuisrow'>
     <Col sm ={12} md={2} className="leftGenius"> <img src='imgBooking\GlobeGeniusBadge.png' className='ginusimg'/></Col>
    
     <Col sm ={12} md={5}  className="rightGenius">
        <div className="title">
            <h3 className='geniusTitle'>
            {t('line24')}

            </h3>
            <p>
            {t('line25')} </p></div>
            <div className="genuisbtn">
            <button className='gbtnactive'>Sign in</button>
            <button className='gbtn'>Register</button>
            </div>
        </Col>
     </Row>

    </Container>
  )
}

export default Genuis