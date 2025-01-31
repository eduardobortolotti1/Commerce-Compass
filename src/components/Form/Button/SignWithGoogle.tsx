import { SignWithGoogleButton } from "./styles";
import google from "@icons/google.svg"

interface SignUpWithGoogleProps {
    isLoading: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SignUpWithGoogle({ isLoading, onClick }: SignUpWithGoogleProps) {
    return (
        <>
            <SignWithGoogleButton type="submit" onClick={isLoading ? undefined : onClick} className="btn btn-primary w-100 fw-bold">
                <img src={google} alt="google icon" />
                {isLoading ? "Loading..." : "Sign up with Google"}
            </SignWithGoogleButton>
        </>
    );
}

export default SignUpWithGoogle