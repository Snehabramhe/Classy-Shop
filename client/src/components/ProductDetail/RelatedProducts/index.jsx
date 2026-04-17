import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductsSlider from "../../../components/ProductsSlider";

const RelatedProducts = () => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
                RELATED PRODUCTS
            </h2>
            <ProductsSlider items={5} />
        </div>
    );
};

export default RelatedProducts;