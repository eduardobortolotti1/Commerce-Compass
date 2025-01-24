import styled from "styled-components";

interface ProductAreaContainerProps {
  children?: React.ReactNode;  
}

const ProductAreaComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: var(--grey-light-1);
    margin-block-start: 25px;
    padding: 30px 0 25px 0;

    & > *:not(.carousel) {
        margin-inline: 25px;
    }
`;

function ProductAreaContainer({ children,  }: ProductAreaContainerProps) {
  return (
    <ProductAreaComponent>
      {children}
    </ProductAreaComponent>
  );
}

export default ProductAreaContainer;