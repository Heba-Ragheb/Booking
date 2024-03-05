import React from 'react'
import "./style.css"
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
const Offers = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
        <Container className="offers">
            <Row className="offersTitle">
              <Col> <h2 className='recentTitle'>  {t('line4')}</h2>
                <p>  {t('line5')}</p>
                </Col>  </Row>
            <Row className="offerItem">
               <Col> <img className='offerImg' src='imgBooking\offer.jpeg'/>
                <div className="offerImgTitle">
                    <h2 className='offerImgTitleH'>  {t('line6')}</h2>
                    <p>
                    {t('line7')} </p>
                    <button className='offerButton'>Find Early 2024 Deals</button>
                </div></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Offers