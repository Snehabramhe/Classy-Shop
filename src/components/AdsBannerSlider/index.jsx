import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = ({ items, banners }) => {

    return (
        <div className="w-full py-10">
            <Swiper loop={true} slidesPerView={items} navigation={true} modules={[Navigation]} spaceBetween={30}>
                {banners.map((item, index) => (
                    <SwiperSlide key={item.alt}>
                           <BannerBox src={item.src} alt={item.alt} label={item.label}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;