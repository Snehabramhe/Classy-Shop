import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BlogItem from './BlogItem';

const bannerImages = [
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773030986/1768444041168_premium_photo-1720744786849-a7412d24ffbf_a6mvei.jpg",
        alt: "Banner_1",
        label: "Blog_1",
        title: "This prefabrice passive house is memorable highly sustainable",
        description: "Give2 lady of they such they sure it. Me contained explained my education. Vulgar as he..."
    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773030999/1762499582942_NewProject_4_zmz8yi.jpg",
        alt: "Banner_2",
        label: "Blog_2",
        title: "This prefabrice passive house is highly sustainable",
        description: "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by g..."

    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1773031009/1741758993155_6-4_vmmyfd.jpg",
        alt: "Banner_3",
        label: "Blog_3",
        title: "Explore sustainable living through cutting-edge prefabricated homes",
        description:"Give2 lady of  they such they sure it. Me contained explained my education. Vulgar as hearts by garr..."
    },


];

const Blogs = () => {
    return (

        <Swiper loop={true} slidesPerView={3} navigation={true} modules={[Navigation]} spaceBetween={20} className='blogSlider'>
            {bannerImages.map((item, index) => (
                <SwiperSlide key={item.label}>
                    <BlogItem item={item} />
                </SwiperSlide>
            ))}
        </Swiper>

    )
}

export default Blogs