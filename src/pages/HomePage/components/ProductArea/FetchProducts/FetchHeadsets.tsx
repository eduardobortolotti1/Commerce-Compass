import styled from "styled-components";
import ProductSwiper from "../../../../../components/ProductSwiper/ProductSwiper";
import ProductBannerItem from "../Carousels/ProductCarousel/ProductBannerItem";
import Headset from '@images/headset.png';

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

function FetchHeadsets() {
    return (
        <WrapperAnimationComponent className="carousel">
            <ProductSwiper>
                <ProductBannerItem name={"Xma Gaming Headset"} imageUrl={Headset} id={''}></ProductBannerItem>
                <ProductBannerItem name={"Xma Gaming Headset"} imageUrl={Headset} id={''}></ProductBannerItem>
                <ProductBannerItem name={"Xma Gaming Headset"} imageUrl={Headset} id={''}></ProductBannerItem>
            </ProductSwiper>
        </WrapperAnimationComponent>
    );
}

export default FetchHeadsets;