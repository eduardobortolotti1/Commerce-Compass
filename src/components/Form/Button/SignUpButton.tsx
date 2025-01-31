import { SignButtonComponent } from "./styles";
import styled from "styled-components";

const SignUpButtonComponent = styled(SignButtonComponent)`
    margin-block-start: 60px;
`;

interface SignUpButtonProps {
    isLoading: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SignUpButton({ isLoading, onClick }: SignUpButtonProps) {


    return (
        <>
            <SignUpButtonComponent type="submit" onClick={isLoading ? undefined : onClick} className="w-100 fw-bold">
                {isLoading ? "Loading..." : "Sign Up"}
            </SignUpButtonComponent>
        </>
    );
}

export default SignUpButton