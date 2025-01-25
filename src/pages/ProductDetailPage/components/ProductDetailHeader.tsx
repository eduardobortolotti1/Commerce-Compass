import styled from "styled-components";
import ProductDetailNav from "./ProductDetailNav/ProductDetailNav";
import DetailNavButton from "./ProductDetailNav/subcomponents/DetailNavButton";

interface ProductDetailHeaderProps {
    name: string
    currency: string
    value: number
}

const ProductName = styled.h2`
    line-height: 36px;
`;

function ProductDetailHeader({ name, currency, value }: ProductDetailHeaderProps) {
    return (
        <div>
            <h3 className="fw-bold font-16 color-primary">{currency} {value}</h3>
            <ProductName className="fw-bold font-28">{name}</ProductName>
            <ProductDetailNav />
            <DetailNavButton text={"Overview"} isActive={true} onClick={function (): void {}} />
            <DetailNavButton text={"Features"} isActive={false} onClick={function (): void {}} />

        </div>
    );
}

export default ProductDetailHeader;