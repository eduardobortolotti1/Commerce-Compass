import styled from "styled-components";
import DetailNavButton from "./ProductDetailNav/subcomponents/DetailNavButton";
import { useState } from "react";

interface ProductDetailHeaderProps {
    name: string
    currency: string
    value: number
    updateFunction: (name: string) => void
}

const ProductDetailHeaderComponent = styled.div`
    margin-block-end: 25px;
`

const ProductName = styled.h2`
    line-height: 36px;
`;

const DetailNavBar = styled.div`
    gap: 35px;
`;

function ProductDetailHeader({ name, currency, value, updateFunction }: ProductDetailHeaderProps) {
    const [activeButton, setActiveButton] = useState<string>("Overview");

    function updateNavBar(name: string) {
        // Updates the active button visually with styling
        setActiveButton(name);
        // Updates thecategory shown in the product detail page
        updateFunction(name);
    }

    return (
        <ProductDetailHeaderComponent>
            <h3 className="fw-bold font-16 color-primary">{currency} {value}</h3>
            <ProductName className="fw-bold font-28">{name}</ProductName>
            <DetailNavBar className="d-flex">
                <DetailNavButton text={"Overview"} isActive={activeButton == "Overview"} onClick={() => updateNavBar("Overview")} />
                <DetailNavButton text={"Features"} isActive={activeButton == "Features"} onClick={() => updateNavBar("Features")} />
            </DetailNavBar>

        </ProductDetailHeaderComponent>
    );
}

export default ProductDetailHeader;