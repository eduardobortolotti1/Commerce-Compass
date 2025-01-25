import styled from "styled-components";
import ProductSwiper from "../../../../../components/ProductSwiper/ProductSwiper";
import ProductBannerItem from "../Carousels/ProductCarousel/ProductBannerItem";
import Headphone from '@images/headphone.png';

const WrapperAnimationComponent = styled.div`
    animation: fadeIn 1s ease forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
         }
    }
`;

function FetchHeadphones() {
    return (
        <WrapperAnimationComponent className="carousel">
            <ProductSwiper>
                <ProductBannerItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={''}></ProductBannerItem>
                <ProductBannerItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={''}></ProductBannerItem>
                <ProductBannerItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={''}></ProductBannerItem>
            </ProductSwiper>
        </WrapperAnimationComponent>
    );
}

export default FetchHeadphones;