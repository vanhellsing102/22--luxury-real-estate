import React from 'react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
import slider1 from '../../assets/slider/pexels-photo-1080696.jpeg'
import slider2 from '../../assets/slider/pexels-photo-2079249.jpeg'
import slider3 from '../../assets/slider/pexels-photo-2098405.jpeg'
import slider4 from '../../assets/slider/pexels-photo-2102587.jpeg'
import slider5 from '../../assets/slider/pexels-photo-2121121.jpeg'
import slider6 from '../../assets/slider/pexels-photo-2227832.jpeg'
import slider7 from '../../assets/slider/pexels-photo-462205.jpeg'


const Slider = () => {
    return (
        <div className='mb-7 mt-20 slider px-7'>
            <Swiper slidesPerView={3} spaceBetween={30} pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider7} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;