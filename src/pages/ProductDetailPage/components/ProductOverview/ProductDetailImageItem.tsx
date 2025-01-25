import styled from "styled-components";

interface ProductDetailImageItemProps {
    imageUrl: string;
    alt: string;
}

const ProductDetailImageItemComponent = styled.div`
    height: 400px;

    img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
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