import styled from "styled-components";

interface ProductSearchResultImageProps {
    imageUrl: string
    name: string
}

const ProductItemImageComponent = styled.div`
    width: auto ;
    height: 75px;
    background-color: var(--grey-light-1);
    border-radius: 10px;

    img {
        width: 75px;
        height: 75px;
    }
`;

function ProductItemImage({ imageUrl, name }: ProductSearchResultImageProps) {
    return (
        <ProductItemImageComponent>
            <img src={imageUrl} alt={name} />
        </ProductItemImageComponent>
    );
}

export default ProductItemImage;