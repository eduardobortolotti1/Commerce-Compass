import styled from "styled-components";

const ProductAreaComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 300px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: var(--grey-light-1);
    margin-block-start: 25px;
    /* padding: 30px 25px 25px 25px; */
    padding-block: 30px;
`;

export { ProductAreaComponent }