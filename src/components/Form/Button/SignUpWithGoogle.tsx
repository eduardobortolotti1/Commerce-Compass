import { SignWithGoogleButton } from "./styles";
import google from "@icons/google.svg"

function SignUpWithGoogle() {
    return (
        <>
            <SignWithGoogleButton type="submit" className="btn btn-primary w-100 fw-bold">
                <img src={google} alt="google icon" />
                Sign up with Google
            </SignWithGoogleButton>
        </>
    );
}

export default SignUpWithGoogle