import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {

     const bannerImages = [
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562295/file_1734525620831_NewProject_3_njjvl4.jpg",
      alt: "Banner_1",
      label: "Fashion",
      color: "#ddd9f4"
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562387/file_1734532742018_NewProject_22_rwdah0.jpg",
      alt: "Banner_2",
      label: "Electronics",
      color: "#f6e1e3"
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562393/file_1734525653108_NewProject_20_miliyc.jpg",
      alt: "Banner_3",
      label: "Bags",
      color: "#e0f2fe"
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562412/file_1734525634299_NewProject_2_etx65o.jpg",
      alt: "Banner_4",
      label: "Footwear",
      color: "#fff6e4"
    },
     {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562295/file_1734525620831_NewProject_3_njjvl4.jpg",
      alt: "Banner_1",
      label: "Fashion",
      color: "#ddd9f4"
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562387/file_1734532742018_NewProject_22_rwdah0.jpg",
      alt: "Banner_2",
      label: "Electronics",
      color: "#f6e1e3"
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562393/file_1734525653108_NewProject_20_miliyc.jpg",
      alt: "Banner_3",
      label: "Bags",
      color: "#e0f2fe"
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772562412/file_1734525634299_NewProject_2_etx65o.jpg",
      alt: "Banner_4",
      label: "Footwear",
      color: "#fff6e4"
    }
  ];

    return (
        <div className="w-full py-10">
            <Swiper loop={true} slidesPerView={props.items} navigation={true} modules={[Navigation]} spaceBetween={20}>
                {bannerImages.map((item, index) => (
                    <SwiperSlide key={item.label}>
                           <BannerBox src={item.src} alt={item.alt} label={item.label}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;