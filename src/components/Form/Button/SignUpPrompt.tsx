import { Link } from "react-router-dom";

function SignUpPrompt() {
    return (
        <>
            <p className='font-14 mb-4 color-white'>
                Don't have an account? <Link to={"/signUp"} className='color-primary fw-bold text-decoration-underline'>Sign Up here</Link>
            </p>
        </>
    )
}

export default SignUpPrompt;