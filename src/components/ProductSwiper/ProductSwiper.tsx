import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { FreeMode } from "swiper/modules";

interface ProductSwiperProps {
    spaceBetween?: number; // Space between slides
    slidesPerView?: number; // Number of slides to show at a time
    isFreeMode?: boolean; // Enable free mode
    children: React.ReactNode; // Allows single or multiple children
    style?: React.CSSProperties; // Style of the component
    className?: string
}

function ProductSwiper({ spaceBetween, slidesPerView, isFreeMode, children, style, className }: ProductSwiperProps) {
    return (
        <div style={{ width: "100%", margin: "0 auto" }} className="carousel">
            <Swiper
                modules={isFreeMode ? [FreeMode] : []}
                freeMode={isFreeMode} // Enable free mode
                spaceBetween={spaceBetween != null ? spaceBetween : 25} // Space between slides
                slidesPerView={slidesPerView ? slidesPerView + 0.05 : 1.05} // Show 1 slide at a time
                navigation={false}// Enable next/prev buttons
                pagination={{ clickable: true }} // Enable pagination
                style={style ? style : { paddingInline: 25 }}
                className={className}
            >
                {React.Children.toArray(children).map((child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductSwiper;
