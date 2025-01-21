import { SignWithGoogleButton } from "./styles";
import google from "../../../icons/google.svg"

function SignInWithGoogle() {
    return (
        <>
            <SignWithGoogleButton type="submit" className="btn btn-primary w-100 fw-bold">
                <img src={google} alt="google icon" />
                Sign in with Google
            </SignWithGoogleButton>
        </>
    );
}

export default SignInWithGoogle