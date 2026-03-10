import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import CustomButton from '../Common/Button';

const banners = [
    {
        image:
            "https://res.cloudinary.com/djodhdoyk/image/upload/v1773062800/banner-1_jbn2qk.png",
        subtitle: (
            <>
                Women Solid Round Yellow <br /> T-Shirt
            </>
        ),
        title: "Big Saving Days Sale",
        priceText: "Starting AT Only",
        price: "₹59.00",
    },
    {
        image:
            "https://res.cloudinary.com/djodhdoyk/image/upload/v1773062969/banner-2_hxif8o.png",
        subtitle: "Buy Modern Chair In Black Color",
        title: "Big Saving Days Sale",
        priceText: "Starting AT Only",
        price: "$99.00",
    },
];

const HomeBannerV2 = () => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                autoplay={{ delay: 2500 }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="${className}" 
                         style="
                            width:14px;
                            height:14px;
                            background:#ff5252;
                            display:inline-block;
                            border-radius:50%;
                            margin:0 5px;
                            ">
                        </span>`;
                    }
                }}
                modules={[EffectFade, Navigation, Pagination,Autoplay]}
                className="homeSliderV2"

            >
                {banners.map((item, index) => (
                    <SwiperSlide key={item.subtitle}>
                        <div className="item w-full h-[65vh] rounded-md overflow-hidden">
                            <img src={item.image} alt={item.subtitle} className="object-cover" />

                            <div className="info absolute top-0 -right-full opacity-0 transition-all duration-500 w-[43%] h-full flex flex-col justify-center z-10 p-8 in-[.swiper-slide-active]:right-0 in-[.swiper-slide-active]:opacity-100 ">
                                <h4 className="text-[24px] font-medium text-left w-full mb-3 relative -right-full opacity-0 in-[.swiper-slide-active]:right-0 in-[.swiper-slide-active]:opacity-100 duration-1000">{item.title}</h4>
                                <h2 className="text-[45px] font-bold w-full -right-full relative opacity-0 in-[.swiper-slide-active]:right-0 in-[.swiper-slide-active]:opacity-100 duration-1200">{item.subtitle}</h2>

                                <h4 className="flex items-center gap-3 text-[24px] font-medium relative text-left w-full mt-3 mb-3 -right-full opacity-0 in-[.swiper-slide-active]:right-0 in-[.swiper-slide-active]:opacity-100 duration-1400">{item.priceText}<span className="text-primary text-[30px] font-bold">{item.price}</span></h4>
                                <CustomButton sx={{
                                width: "50%",
                                position: "relative",
                                bottom: "-200px",
                                opacity: 0,
                                transition: "all 1.6s ease",
                                ".swiper-slide-active &": {
                                    bottom: "0",
                                    opacity: 1
                                }
                            }}>SHOP NOW
                            </CustomButton>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default HomeBannerV2;