import { MoreVertical, Star } from "react-feather";
import styled from "styled-components";
import ProductItemReviews from "./subcomponents/ProductItemReviews";
import ProductItemInfo from "./subcomponents/ProductItemInfo";

interface ProductItemDescProps {
    name: string
    currency: string
    value: string
    stars: string
    reviews: string
}

const ProductItemDescComponent = styled.div``;



function ProductItemDesc({ name, currency, value, stars, reviews }: ProductItemDescProps) {
    return (
        <ProductItemDescComponent className="d-flex flex-column gap-2 justify-content-between">
            <ProductItemInfo name={name} currency={currency} value={value} />
            <ProductItemReviews stars={stars} reviews={reviews} />
        </ProductItemDescComponent>
    );
}

export default ProductItemDesc;