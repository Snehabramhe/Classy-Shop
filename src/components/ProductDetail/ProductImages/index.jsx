import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const ProductImages = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomStyle, setZoomStyle] = useState({});
    const [lensStyle, setLensStyle] = useState({});

    const handleMouseMove = (e) => {
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();

        const x = e.clientX - left;
        const y = e.clientY - top;

        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        setZoomStyle({
            backgroundPosition: `${xPercent}% ${yPercent}%`,
        });

        setLensStyle({
            left: `${(x / width) * 100}%`,
            top: `${(y / height) * 100}%`,
            transform: "translate(-50%, -50%)",
        });
    };

    return (
        <div className="relative">
            <div className="flex gap-4">
                <div className="w-16 flex flex-col items-center">

                    {/* 🔼 TOP BUTTON */}
                    <div className="swiper-button-up w-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-primary hover:text-white py-1 rounded">
                        <FaArrowUp />
                    </div>

                    {/* 🖼️ SWIPER */}
                    <Swiper
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-down",
                            prevEl: ".swiper-button-up",
                        }}
                        className="h-90"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    onClick={() => setActiveImage(img)}
                                    className={`w-full h-20 object-cover rounded border cursor-pointer ${activeImage === img ? "border-black" : ""
                                        }`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* 🔽 BOTTOM BUTTON */}
                    <div className="swiper-button-down w-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-primary hover:text-white py-1 rounded">
                        <FaArrowDown />
                    </div>
                </div>

                {/* RIGHT MAIN IMAGE */}
                <div className="flex-1">

                    <div
                        className="w-full aspect-square border rounded overflow-hidden relative"
                        onMouseEnter={() => setShowZoom(true)}
                        onMouseLeave={() => setShowZoom(false)}
                        onMouseMove={handleMouseMove}
                    >
                        <img
                            src={activeImage}
                            alt="product"
                            className={`w-full h-full ${showZoom ? "opacity-70" : ""
                                }`}
                        />

                        {/* LENS */}
                        {showZoom && (
                            <div
                                className="absolute w-[20%] h-[20%] border border-gray-400 bg-white/30 pointer-events-none"
                                style={lensStyle}
                            />
                        )}
                    </div>
                </div>
            </div>


            {/* 🔥 ZOOM PANEL (OUTSIDE FLEX = NO SHIFT) */}
            {showZoom && (
                <div
                    className="absolute top-0 left-[102%] w-full h-full border rounded bg-no-repeat shadow-xl z-5 hidden md:block"
                    style={{
                        backgroundImage: `url(${activeImage})`,
                        backgroundSize: "200%",
                        ...zoomStyle,
                    }}
                />
            )}
        </div>
    );
};

export default ProductImages;