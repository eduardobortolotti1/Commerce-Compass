import styled from "styled-components";
import ReviewItemImage from "./ReviewItemImage";
import ReviewItemContent from "./ReviewItemContent";

interface ProductReviewItemProps {
    profileUrl: string;
    profileId: string;
    profilePicUrl: string;
    authorName: string;
    stars: number;
    review: string;
}

const ProductReviewItemComponent = styled.div`
    gap: 15px;
`;

function ProductReviewItem({ profilePicUrl, profileId, authorName, stars, review }: ProductReviewItemProps) {
    return (
        <ProductReviewItemComponent className="d-flex flex-row">
            <ReviewItemImage profilePicUrl={profilePicUrl} profileId={profileId} />
            <ReviewItemContent authorName={authorName} stars={stars} review={review} />
        </ProductReviewItemComponent>
    );
}

export default ProductReviewItem;