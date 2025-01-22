import styled from "styled-components";

const SearchBarComponent = styled.input`
    width: 100%;
    height: 100%;
    padding: 12px 12px 12px 45px;
    border-radius: 10px;
    border: 1px solid var(--grey);
    
    &::placeholder {
        color: var(--grey);
    }
    `;

const Wrap = styled.div`

    height: 45px;
    position: relative;

    svg {
        position: absolute;
        width: 22px;
        height: auto;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
        color: var(--grey);
    }
`;

export { SearchBarComponent, Wrap };