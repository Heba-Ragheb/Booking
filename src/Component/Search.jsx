import React from 'react'
import "./style.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
<Container className='recentSearch'>
    <Row>
   <Col> <h1 className='recentTitle'>
   {t('line3')}
    </h1> </Col>
    </Row>
    <Row >
    <Col> <div className='searchItem'><img className='searchItemImg' src='imgBooking\dubai.jpg'  />
      <div className='searhItemTitle'>
        <h4>   {t('line10')}</h4>
        <p>9 feb-12 feb, 2 people</p>
      </div></div></Col>
    </Row>
    

  </Container></div>
  )
}

export default Search