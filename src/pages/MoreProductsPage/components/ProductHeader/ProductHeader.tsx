import styled from "styled-components";
import FilterButton from "../../../../components/FiilterButton/FilterButton";

const ProductPresentation = styled.div`
    margin-block-end: 20px;
`;

const ProductHeaderComponent = styled.div`
    margin-block-end: 35px;
`;


function ProductHeader() {
    return (
        <ProductHeaderComponent>
            <ProductPresentation>
                <h3 className="font-16">Headphone</h3>
                <h2 className="font-24 montserrat fw-bold">TMA Wireless</h2>
            </ProductPresentation>
            <FilterButton />
        </ProductHeaderComponent>
    );
}

export default ProductHeader;