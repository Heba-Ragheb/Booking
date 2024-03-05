import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

const PropertyT = () => {
    const { t, i18n } = useTranslation();
  return (
    <div>
        <Container className='PropertyM' style={{marginBottom:"30px"}}>
            <Row className='propTitle' style={{marginTop:"30px",marginBottom:"30px"}}>
                <h2> {t('line28')}  </h2>
            </Row>
            <Row  className='Property' >
                <Col  className='villas'>
                    <img src='imgBooking\apartment.jpeg' className='propImg'/>
                    <h5 >
                    {t('line30')}
                    </h5>
                
                </Col> <Col className='villas'>
                    <img src='imgBooking\hotel.jpeg' className='propImg'/>
                    <h5 >
                    {t('line29')}
                    </h5>
                   
                </Col>
                <Col className='villas'>
                    <img src='imgBooking\villas.jpeg' className='propImg'/>
                    <h5  >
                    {t('line32')}
                    </h5>
                    
                </Col>
                <Col className='villas'>
                    <img src='imgBooking\restort.jpeg' className='propImg'/>
                    <h5>
                    {t('line31')}
                    </h5>
                    
                </Col>
               

            </Row>
        </Container>

    </div>
  )
}

export default PropertyT