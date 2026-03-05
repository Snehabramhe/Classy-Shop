import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem';

const bannerImages = [
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772555849/70873cd0-e480-46ed-bd69-8c3b55a0e7a7.png",
        alt: "Banner_1",
        label: "Fashion",
        color: "#ddd9f4"
    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772546749/1761905929738_file_1734525218436_ele_fnytbo.png",
        alt: "Banner_2",
        label: "Electronics",
        color: "#f6e1e3"
    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772546775/1761905971086_file_1734525231018_bag_xv51tr.png",
        alt: "Banner_3",
        label: "Bags",
        color: "#e0f2fe"
    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772546786/1761905982766_file_1734525239704_foot_aca1tj.png",
        alt: "Banner_4",
        label: "Footwear",
        color: "#fff6e4"
    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772546799/1761905996339_file_1734525248057_gro_watfue.png",
        alt: "Banner_5",
        label: "Groceries",
        color: "#ecfdf5"
    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772546815/1761906005923_file_1734525255799_beauty_1_pzlwlz.png",
        alt: "Banner_6",
        label: "Beauty",
        color: "#f9e0e0"
    },
    ,
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772546834/1761906015678_file_1734525275367_well_bayq3q.png",
        alt: "Banner_7",
        label: "Wellness",
        color: "#f9fafb"
    },
    ,
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772546839/1761906025549_file_1734525286186_jw_ovmbr5.png",
        alt: "Banner_8",
        label: "Jewellery",
        color: "#ede9fe"
    },
    {
        src: "https://res.cloudinary.com/djodhdoyk/image/upload/v1772555779/c337b4ba-ff11-4b90-b438-77f0013172ca.png",
        alt: "Banner_9",
        label: "Games",
        color: "#e0e7ff"
    },
];


const ProductsSlider = (props) => {

    return (
        <div className="ProductsSlider py-8">
            <div className="container">
                <Swiper loop={true} slidesPerView={props.items} navigation={true} modules={[Navigation]} spaceBetween={30}>
                    {bannerImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={`/${item.label.toLowerCase()}`}>
                                <ProductItem />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ProductsSlider