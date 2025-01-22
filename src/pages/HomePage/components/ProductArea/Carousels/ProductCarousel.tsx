import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    height: 180px;
    width: 100%;
`;

// This is a Carousel/Slider built using slick.
// It uses a combination of centerMode, centerPadding, and transform: scale(-%) (on the carousel item)
// to achieve a similar style to the design sheet.
// It took a lot of time messing around to make this work.

function ProductCarousel() {
    var settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.05,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10px",
        initialSlide: 0,
    };
    return (
        <Wrap>
            <Slider {...settings} className="w-100">
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Slider>
        </Wrap>
    );
}

export default ProductCarousel