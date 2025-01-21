import styled from "styled-components";
import { Lock, Mail } from 'react-feather'

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

const StyledLock = styled(Lock)`
    position: absolute;
    top: 50%;
    transform: translate(15px, -50%);
    color: var(--grey);
`;

const StyledMail = styled(Mail)``;

export { InputWrapper, Input, StyledLock, StyledMail };