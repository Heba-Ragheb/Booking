import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import Region from './Component/Region'
import Listsearch from "./Listsearch";
import Cityregion from './Component/Cityregion'
import Placesofinserts from './Component/Placesofinserts'
import { TbPlane } from "react-icons/tb";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";
import './App.css';
import { useTranslation, I18nextProvider } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Scrollbar, A11y } from 'swiper/modules';
import Home from './Component/Home';
import Navb from "./Component/Navb";

import Flight from "./Component/Flight";
import Car from "./Component/Car";
import Attraction from "./Component/Attraction";
import Taxi from "./Component/Taxi";
import { Col, Container, Row } from "react-bootstrap";
import Login from "./Login";
import { useEffect, useState } from "react";
//SwiperCore.use([Pagination, Autoplay]);
function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
 


  const [init, setInit] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (!init) {
          setInit(true);
        }
      } else if (init) {
        setInit(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [init]);


  return (
    <BrowserRouter>
   
      <Navb/>
      <I18nextProvider i18n={i18n}>
      <div className="headerr">
        <Container>
        <Row>
      <div className= "headerrItem">
     { window.innerWidth <= 868 ? (<Swiper
        modules={[Navigation,  A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{flex:"1",marginBottom:"40px"}}
      >
         <SwiperSlide> <Link to="/" className='headerrlinkActive'>
            <IoBedOutline style={{ fontSize: "20px", marginLeft: " 3px" }} />
            <span>{t('first1')}</span>
         </Link></SwiperSlide>   <SwiperSlide>
          <Link to="Flight"className='headerrlink'>
            <TbPlane style={{ fontSize: "17px", marginLeft: " 2px" }} />
            <span>{t('first2')}</span>
         </Link></SwiperSlide> 
         <SwiperSlide> <Link to="Car" className='headerrlink'>
            <IoCarSportOutline style={{ fontSize: "17px", marginLeft: " 2px" }} />
            <span>{t('first3')}</span>
         </Link></SwiperSlide> 
         <SwiperSlide> <Link to="Attraction"className='headerrlink'>
            <MdOutlineAttractions style={{ fontSize: "17px", marginLeft: " 2px" }} />
            <span>{t('first4')}</span>
          </Link></SwiperSlide> 
          <SwiperSlide>  <Link to="Taxi"  className='headerrlink'>
            <FaShuttleVan style={{ fontSize: "17px", marginLeft: " 2px" }} />
            <span>{t('first5')}</span>
         </Link></SwiperSlide> </Swiper>) : ( <><Link to="/" className='headerrlinkActive'>
    <IoBedOutline style={{ fontSize: "17px", marginLeft: " 2px" }} />
    <span>{t('first1')}</span>
 </Link>
  <Link to="Flight"className='headerrlink'>
    <TbPlane style={{ fontSize: "17px", marginLeft: " 2px" }} />
    <span>{t('first2')}</span>
 </Link>
  <Link to="Car" className='headerrlink'>
    <IoCarSportOutline style={{ fontSize: "20px", marginLeft: " 3px" }} />
    <span>{t('first3')}</span>
 </Link>
 <Link to="Attraction"className='headerrlink'>
    <MdOutlineAttractions style={{ fontSize: "20px", marginLeft: " 3px" }} />
    <span>{t('first4')}</span>
  </Link>
  <Link to="Taxi"  className='headerrlink'>
    <FaShuttleVan style={{ fontSize: "20px", marginLeft: " 3px" }} />
    <span>{t('first5')}</span>
 </Link></>)}
        </div>
        
</Row>
       
        </Container></div>
       
        <Routes>
    

      <Route path='/' element={<Home/>}/>
      <Route path='Flight' element={<Flight/>}/>
      <Route path='Car' element={<Car/>}/>
      <Route path='Attraction' element={<Attraction/>}/>
      <Route path='Taxi' element={<Taxi/>}/>
      <Route path='Listsearch' element={<Listsearch/>}/>
      <Route path='Login' element={<Login/>}/>
     
        </Routes>
       
        </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
