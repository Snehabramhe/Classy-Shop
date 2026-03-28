import React, { useState,useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ProductImages = ({ images, zoomType = "hover" }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const [showZoom, setShowZoom] = useState(false);
    const [zoomStyle, setZoomStyle] = useState({});
    const [lensStyle, setLensStyle] = useState({});


    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    const handleMouseEnter = () => {
        if (zoomType === "hover") setShowZoom(true);
    };

    const handleMouseLeave = () => {
        if (zoomType === "hover") setShowZoom(false);
    };

    const handleClick = (e) => {
        if (zoomType === "click") {
            e.stopPropagation();
            setShowZoom((prev) => !prev);
        }
    };

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

    useEffect(() => {
        if (zoomType !== "click") return;

        const handleOutsideClick = () => setShowZoom(false);

        if (showZoom) {
            window.addEventListener("click", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [showZoom, zoomType]);

    return (
        <div className="relative">
            <div className="flex gap-4">
                <div className="w-16 flex flex-col items-center">

                    {/* 🔼 TOP BUTTON */}
                    <div className="swiper-button-up w-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-primary hover:text-white py-1 rounded">
                        <IoIosArrowUp />
                    </div>

                    {/* 🖼️ SWIPER */}
                    <Swiper
                        ref={zoomSliderSml}
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={0}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-down",
                            prevEl: ".swiper-button-up",
                        }}
                        className="h-90 mt-2"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    onClick={() => goto(i)}
                                    className={`w-full h-20 object-cover rounded border cursor-pointer ${slideIndex === i ? "border-black" : "opacity-30"
                                        }`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* 🔽 BOTTOM BUTTON */}
                    <div className="swiper-button-down w-full flex justify-center items-center cursor-pointer bg-gray-200 hover:bg-primary hover:text-white py-1 rounded">
                        <IoIosArrowDown />
                    </div>
                </div>

                {/* RIGHT MAIN IMAGE */}
                <div className="flex-1">

                    <div
                        className="w-full h-130 aspect-square border rounded overflow-hidden relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        onClick={handleClick}
                        onMouseMove={showZoom ? handleMouseMove : null}
                    >
                        <Swiper
                            ref={zoomSliderBig}
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={false}
                            className="h-full"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        alt="product"
                                        className={`w-full h-full ${showZoom ? "opacity-70" : ""
                                            }`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>


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
                        backgroundImage: `url(${images[slideIndex]})`,
                        backgroundSize: "200%",
                        ...zoomStyle,
                    }}
                />
            )}
        </div>
    );
};

export default ProductImages;




