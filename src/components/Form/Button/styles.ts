import styled from "styled-components";

const SignButtonComponent = styled.button`
    height: 50px;
    background-color: var(--primary);
    border: none;
    margin-block-end: 10px;
`

const SignWithGoogleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 50px;
    background-color: transparent !important;
    border: none;
    margin-block-end: 95px;
`

export { SignButtonComponent, SignWithGoogleButton };