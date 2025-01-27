import styled from "styled-components";

interface ProductDetailImageItemProps {
    imageUrl: string;
    alt: string;
}

const ProductDetailImageItemComponent = styled.div`
    border-radius: 10px;
    background-color: var(--grey-light-1);
    height: 400px;

    img {
        border-radius: 10px;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

function ProductDetailImageItem({ imageUrl, alt }: ProductDetailImageItemProps) {
    return (
        <ProductDetailImageItemComponent>
            <img src={imageUrl} alt={alt} />
        </ProductDetailImageItemComponent>
    );
}

export default ProductDetailImageItem;