import styled from "styled-components"
import ProductItemDesc from "./ProductItemDesc"
import ProductItemImage from "./ProductItemImage"

interface ProductItemProps {
    productId: string
    imageUrl: string
    name: string
    currency: string
    value: string
    stars: string
    reviews: string
}

const ProductItemComponent = styled.div`
    gap: 15px;

    &:hover {
        cursor: pointer;
    }
`;

function ProductItem({ productId, imageUrl, name, currency, value, stars, reviews }: ProductItemProps) {
    return (
        <ProductItemComponent className="d-flex w-100">
            <ProductItemImage imageUrl={imageUrl} name={name} />
            <ProductItemDesc name={name} currency={currency} value={value} stars={stars} reviews={reviews} />
        </ProductItemComponent>
    );
}

export default ProductItem;