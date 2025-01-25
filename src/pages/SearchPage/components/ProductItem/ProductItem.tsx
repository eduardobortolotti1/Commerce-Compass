import styled from "styled-components"
import ProductItemDesc from "./ProductItemDesc"
import ProductItemImage from "./ProductItemImage"
import ProductItemProps from "../../../../types/product"

interface ProductSearchItemProps extends ProductItemProps {
    stars: number
    reviews: number
}

const ProductItemComponent = styled.div`
    gap: 15px;
    border-radius: 10px;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--grey-light-1);
    }
`;

function ProductItem({ productId, imageUrl, name, currency, value, stars, reviews }: ProductSearchItemProps) {
    return (
        <a href={`#${productId}`} className="text-decoration-none">
            <ProductItemComponent className="d-flex w-100">
                <ProductItemImage imageUrl={imageUrl} name={name} />
                <ProductItemDesc name={name} currency={currency} value={value} stars={stars} reviews={reviews} />
            </ProductItemComponent>
        </a>
    );
}

export default ProductItem;