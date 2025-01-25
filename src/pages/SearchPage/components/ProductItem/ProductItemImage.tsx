import styled from "styled-components";

interface ProductSearchResultImageProps {
    imageUrl: string
    name: string
}

const ProductItemImageComponent = styled.div`
    width: 75px ;
    height: 75px;
    background-color: var(--grey-light-1);
    border-radius: 10px;

    img {
        max-width: 75px;
        max-height: auto;
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