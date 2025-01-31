import { Link } from "react-router-dom";

function SignInPrompt() {
    return (
        <>
            <p className='font-14 mb-4 color-white text-decoration-none'>
                If you have an account? <Link to={"/signIn"} className='color-primary fw-bold text-decoration-underline'>Sign In here</Link>
            </p>
        </>
    )
}

export default SignInPrompt;