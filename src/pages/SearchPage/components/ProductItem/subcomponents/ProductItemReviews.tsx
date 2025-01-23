import { MoreVertical, Star } from "react-feather";
import styled from "styled-components";

const ProductReviews = styled.div`
    svg {
        width: 16px;
    }
`;

interface ProductItemReviewsProps {
    stars: string
    reviews: string
}

function ProductItemReviews({ stars, reviews }: ProductItemReviewsProps) {
    return (
        <ProductReviews className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 font-12 align-items-center">
                <p className="m-0 d-flex gap-1 align-items-center">
                    <Star className="font-12" style={{ color: "var(--accent)" }} fill="var(--accent)" />
                    {stars}
                </p>
                <p className="m-0">{reviews} reviews</p>
            </div>
            <button>
                <MoreVertical />
            </button>
        </ProductReviews>
    );
}

export default ProductItemReviews;