import { Star } from "react-feather";
import styled from "styled-components";

interface ProductItemDescProps {
    name: string
    currency: string
    value: string
    stars: string
    reviews: string
}

const ProductItemDescComponent = styled.div``;
const ProductInfo = styled.div``;

const ProductReviews = styled.div`
    svg {
        width: 16px;
    }
`;

function ProductItemDesc({ name, currency, value, stars, reviews }: ProductItemDescProps) {
    return (
        <ProductItemDescComponent className="d-flex flex-column gap-2 justify-content-between">
            <ProductInfo>
                <p className="m-0">{name}</p>
                <p className="fw-bold font-14 m-0">{currency} {value}</p>
            </ProductInfo>

            <ProductReviews className="d-flex gap-2 font-12 align-items-center">
                <div className="">
                    <p className="m-0 d-flex gap-1 align-items-center">
                        <Star className="font-12" style={{ color: "var(--accent)" }} fill="var(--accent)" />
                        {stars}
                    </p>
                </div>
                <p className="m-0">{reviews} reviews</p>
            </ProductReviews>
        </ProductItemDescComponent>
    );
}

export default ProductItemDesc;