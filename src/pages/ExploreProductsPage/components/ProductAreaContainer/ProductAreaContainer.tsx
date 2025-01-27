import styled from "styled-components";

interface ProductAreaContainerProps {
    children?: React.ReactNode;
}

const ProductAreaContainerComponent = styled.div`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 25px;
    background-color: var(--grey-light-1);
    display: grid;
    grid-template-columns: repeat(2, auto); /* Two rows with automatic height */
    grid-auto-flow: row; /* Add items vertically, then move to the next column */
    gap: 15px; /* Space between items */
`;

function ProductAreaContainer({ children }: ProductAreaContainerProps) {
    return (
        <ProductAreaContainerComponent className="d-flex flex-wrap justify-content-center">
            {children}
        </ProductAreaContainerComponent>
    );
}

export default ProductAreaContainer;
