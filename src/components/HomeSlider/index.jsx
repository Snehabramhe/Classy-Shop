import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeSlider = () => {

  const bannerImages = [
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772540663/1769150462196_file_1734524930884_NewProject_6_fi3l84.jpg",
      alt: "Banner_1",
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772540632/1769150485964_file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c_qkpj2b.jpg",
      alt: "Banner_2",
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772540589/1751685130717_NewProject_8_idbpce.jpg",
      alt: "Banner_3",
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772540560/1759938751802_30744_or9pri.jpg",
      alt: "Banner_4",
    },
    {
      src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772540539/1748955932914_NewProject_1_jxol8e.jpg",
      alt: "Banner_5",
    }
  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {bannerImages.map((item, index) => (
        <SwiperSlide key={index}>
          <img className="w-full" src={item.src} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;