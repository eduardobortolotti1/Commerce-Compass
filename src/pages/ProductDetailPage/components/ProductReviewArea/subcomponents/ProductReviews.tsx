import styled from "styled-components";

interface ProductReviewsProps {
  children?: React.ReactNode;
  
}

const ProductReviewsComponent = styled.div`
    gap: 20px;
`;

function ProductReviews({ children }: ProductReviewsProps) {
  return (
    <ProductReviewsComponent className="d-flex flex-column">
      {children}
    </ProductReviewsComponent>
  );
}

export default ProductReviews;