import styled from "styled-components";

const ProductItemComponent = styled.div`
    display: flex;
    width: 100%;
    gap: 15px;
    border-radius: 10px;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--grey-light-1);
    }
`;

const ProductItemDescComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    justify-content: space-between;
`;

export {ProductItemComponent, ProductItemDescComponent};