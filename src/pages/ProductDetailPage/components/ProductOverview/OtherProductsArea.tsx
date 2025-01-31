import styled from "styled-components";
import ProductSwiperStyle1 from "../../../../components/ProductSwiper/ProductSwiperStyle1";
import ProductsHeader from "../../../HomePage/components/ProductArea/FeaturedProductsArea/ProductsHeader";

interface OtherProductsAreaProps {
    children?: React.ReactNode;
}

const OtherProductsAreaComponent = styled.div`
    padding: 35px 0 30px 0;
    background-color: var(--grey-light-1);
`;

function OtherProductsArea({ children, }: OtherProductsAreaProps) {
    return (
        <OtherProductsAreaComponent className="carousel">
            <div className="px-4 mb-3">
                <ProductsHeader text="Another Product" />
            </div>
            <ProductSwiperStyle1>
                {children}
            </ProductSwiperStyle1>
        </OtherProductsAreaComponent>
    );
}

export default OtherProductsArea;