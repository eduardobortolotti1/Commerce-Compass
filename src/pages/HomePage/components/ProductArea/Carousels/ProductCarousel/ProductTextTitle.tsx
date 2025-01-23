import styled from "styled-components";

interface ProductTextTitleProps {
    name: string
}

const ProductTextTitleComponent = styled.h3`
    line-height: 30px;
`;

function ProductTextTitle({ name }: ProductTextTitleProps) {
    return (
        <ProductTextTitleComponent className="fw-bold font-22 montserrat">
            {name}
        </ProductTextTitleComponent>
    );
}

export default ProductTextTitle;