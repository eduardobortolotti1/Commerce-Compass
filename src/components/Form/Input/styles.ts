import styled from "styled-components";

const InputWrapper = styled.div`
    position: relative;
`;

const Input = styled.input`
    position: relative;
    border-radius: 10px;
    height: 50px;
    border: 1px solid var(--grey);

    &::placeholder {
        color: var(--grey);
        font-size: 14px;
        padding-left: 50px;
    }

    &:focus {
        box-shadow: none;
    }
`;

const InputWrapperComponent = styled.div`
    gap: 20px;
`;

export { InputWrapper, Input, InputWrapperComponent };