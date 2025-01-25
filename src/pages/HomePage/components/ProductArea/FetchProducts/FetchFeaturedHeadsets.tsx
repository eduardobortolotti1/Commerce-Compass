import FeaturedProductItem from "../FeaturedProductsArea/FeaturedProductItem";
import Headphone from "@images/headset.png"
import RazerHeadset from "@images/razer-headset.png"
import ProductSwiperStyle1 from "../../../../../components/ProductSwiper/ProductSwiperStyle1";
import styled from "styled-components";

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

function FetchFeaturedHeadphones() {
    return (
        <WrapperAnimationComponent className="carousel">
            <ProductSwiperStyle1>
                <FeaturedProductItem name={"Xma Gaming Headset"} imageUrl={Headphone} id={""} currency={"USD"} value={"75"} />
                <FeaturedProductItem name={"Razer Blackshark V2 HyperSpeed"} imageUrl={RazerHeadset} id={""} currency={"USD"} value={"575"} />
                <FeaturedProductItem name={"Xma Gaming Headset"} imageUrl={Headphone} id={""} currency={"USD"} value={"75"} />
                <FeaturedProductItem name={"Razer Blackshark V2 HyperSpeed"} imageUrl={RazerHeadset} id={""} currency={"USD"} value={"575"} />
                <FeaturedProductItem name={"Xma Gaming Headset"} imageUrl={Headphone} id={""} currency={"USD"} value={"75"} />
                <FeaturedProductItem name={"Razer Blackshark V2 HyperSpeed"} imageUrl={RazerHeadset} id={""} currency={"USD"} value={"575"} />
            </ProductSwiperStyle1>
        </WrapperAnimationComponent>
    );
}

export default FetchFeaturedHeadphones;