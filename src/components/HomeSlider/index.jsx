import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

const HomeSlider = () => {

    const bannerImages = [
        {
            src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772540663/1769150462196_file_1734524930884_NewProject_6_fi3l84.jpg",
            alt: "Banner_1",
        },
        {
            src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772622326/slideBanner1_h7xrzy.jpg",
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
            src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772622285/slideBanner2_gpnn5r.jpg",
            alt: "Banner_5",
        }
    ];

    return (
        <div className="homeSlider ">
            <div className="container">
                <Swiper loop={true} autoplay={{ delay: 3000 }} navigation={true} modules={[Navigation,Autoplay]} spaceBetween={15} className='sliderHome'>
                    {bannerImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-full rounded-xl" src={item.src} alt={item.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeSlider;