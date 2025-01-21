import { SignButtonComponent } from "./styles";

function SignUpButton() {
    return (
        <>
            <SignButtonComponent type="submit" className="btn btn-primary w-100 fw-bold" style={{marginBlockStart: "60px"}}>
                Sign Up
            </SignButtonComponent>
        </>
    );
}

export default SignUpButton