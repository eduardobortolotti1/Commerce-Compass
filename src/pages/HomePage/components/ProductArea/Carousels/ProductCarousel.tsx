import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import CarouselItem from "./ProductItem";

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

// This is a Carousel/Slider built using slick.
// It uses a combination of centerMode, centerPadding, and transform: scale(-%) (on the carousel item)
// to achieve a similar style to the design sheet.
// It took a lot of time messing around to make this work.

interface ProductCarouselProps {
    infinite: boolean
    slidesToShow: number
    slidesToScroll: number
    initialSlide: number
    centerMode: boolean
    centerPadding: string
    children: React.ReactNode; // This allows any JSX content to be passed as children
}


function ProductCarousel({ infinite, slidesToShow, slidesToScroll, initialSlide, centerMode, centerPadding, children }: ProductCarouselProps) {
    var settings = {
        arrows: false,
        dots: false,
        infinite: infinite,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        centerMode: centerMode,
        centerPadding: centerPadding,
        initialSlide: initialSlide,
    };
    return (
        <Wrap className="carousel">
            <Slider {...settings} className="w-100">
                {children}
            </Slider>
        </Wrap>
    );
}

export default ProductCarousel