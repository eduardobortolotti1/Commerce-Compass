import FeaturedProductItem from "../FeaturedProductsArea/FeaturedProductItem";
import Cables from "@images/cable.png"
import Headphone from "@images/headphone.png"
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
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
            </ProductSwiperStyle1>
        </WrapperAnimationComponent>
    );
}

export default FetchFeaturedHeadphones;