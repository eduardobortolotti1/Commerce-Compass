import styled from "styled-components";

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

export { ProductAreaComponent }