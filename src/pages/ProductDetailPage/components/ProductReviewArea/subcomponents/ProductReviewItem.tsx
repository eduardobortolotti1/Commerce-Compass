import styled from "styled-components";
import ReviewItemImage from "./ReviewItemImage";
import ReviewItemContent from "./ReviewItemContent";
import { ProductReview } from "../../../../../types/review";

interface ProductReviewItemProps {
    productReview: ProductReview;
}

const ProductReviewItemComponent = styled.div`
    gap: 15px;
`;

function ProductReviewItem({ productReview }: ProductReviewItemProps) {
    return (
        <ProductReviewItemComponent className="d-flex flex-row">
            <ReviewItemImage profilePicUrl={productReview.profileImageUrl} profileId={''} />
            <ReviewItemContent authorName={productReview.authorName} stars={productReview.stars} review={productReview.review} />
        </ProductReviewItemComponent>
    );
}

export default ProductReviewItem;