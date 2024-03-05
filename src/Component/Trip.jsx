/**import React from 'react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'reactstrap';
import { Swiper, SwiperSlide, Navigation, Pagination, Scrollbar, A11y } from 'swiper/react';

const Trip = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="mainImg">
            <img src='imgBooking/trip1.jpeg' className='tripimg'/>
            <div className="tripDetail">
              <h4 style={{color:"white"}}>
              New Year’s Eve in New York City</h4>
              <p>
              Ring in the new year with iconic moments and unforgettable memories in New York City</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking/trip2.webp'/>
            <div className="trip2detail">
              <h4>6 best ryokans in Japan to rejuvenate yourself</h4>
              <p>Discover unmissable ryokans to relax and unwind in style.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking/trip2.webp'/>
            <div className="trip2detail">
              <h4>6 best ryokans in Japan to rejuvenate yourself</h4>
              <p>Discover unmissable ryokans to relax and unwind in style.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking/trip2.webp'/>
            <div className="trip2detail">
              <h4>6 best ryokans in Japan to rejuvenate yourself</h4>
              <p>Discover unmissable ryokans to relax and unwind in style.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Trip;
*/import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination,Scrollbar, A11y } from 'swiper/modules';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';

//SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Trip = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='swiper' style={{marginTop:"50px"}}>
        <h3 style={{fontWeight:"bold",marginBottom:"20px" , marginLeft:"20px"}}>{t('line15')}</h3>
      <Swiper
        modules={[Navigation,  A11y]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{flex:"1",marginBottom:"40px"}}
      >
        <SwiperSlide>
          <div className="mainImg">
            <img src='imgBooking/trip1.jpeg' className='tripimg'/>
            <div className="tripDetail">
              <h6 style={{color:"white",fontWeight:"bold"}}>
              {t('line16')}</h6>
              <p style={{fontSize:"12px"}}>
              {t('line17')}</p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking\trip2.jpg'/>
            <div className="trip2detail">
              <h6>{t('line18')}</h6>
              <p>{t('line19')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking\trips3.webp'/>
            <div className="trip2detail">
            <h6>{t('line18')}</h6>
              <p>{t('line19')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking\trip4.webp'/>
            <div className="trip2detail">
            <h6>{t('line18')}</h6>
              <p>{t('line19')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking\trio5.webp'/>
            <div className="trip2detail">
            <h6>{t('line18')}</h6>
              <p>{t('line19')}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="trip2">
            <img  className='trip2img' src='imgBooking\trip6.webp'/>
            <div className="trip2detail">
            <h6>{t('line18')}</h6>
              <p>{t('line19')}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Trip;
