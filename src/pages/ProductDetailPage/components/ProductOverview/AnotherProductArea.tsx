import styled from "styled-components";
import ProductSwiperStyle1 from "../../../../components/ProductSwiper/ProductSwiperStyle1";
import ProductsHeader from "../../../HomePage/components/ProductArea/FeaturedProductsArea/ProductsHeader";

interface AnotherProductAreaProps {
    children?: React.ReactNode;
}

const AnotherProductAreaComponent = styled.div`
    padding: 35px 0 30px 0;
    background-color: var(--grey-light-1);
`;

function AnotherProductArea({ children, }: AnotherProductAreaProps) {
    return (
        <AnotherProductAreaComponent className="carousel">
            <div className="px-4 mb-3">
                <ProductsHeader text="Another Product" />
            </div>
            <ProductSwiperStyle1>
                {children}
            </ProductSwiperStyle1>
        </AnotherProductAreaComponent>
    );
}

export default AnotherProductArea;