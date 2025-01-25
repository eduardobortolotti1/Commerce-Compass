import styled from "styled-components";
import ProductReviews from "./subcomponents/ProductReviews";

interface ProductReviewAreaProps {
  reviews: number;
  children?: React.ReactNode;
}

const ProductReviewAreaComponent = styled.div`
  gap: 30px;
  margin-block-end: 40px;
`;

function ProductReviewArea({ children, reviews }: ProductReviewAreaProps) {
  return (
    <ProductReviewAreaComponent className="d-flex flex-column">
      <h4 className="font-16">Reviews ({reviews})</h4>
      <ProductReviews>
        {children}
      </ProductReviews>
    </ProductReviewAreaComponent>
  );
}

export default ProductReviewArea;