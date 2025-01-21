import ForgotPassword from "./Button/ForgotPassword";
import InputEmail from "./Input/InputEmail";
import InputPassword from "./Input/InputPassword";
import SignInButton from "./Button/SignInButton";
import SignInWithGoogle from "./Button/SignInWithGoogle";
import SignUpPrompt from "./Button/SignUpPrompt";

function SignInForm() {
    return (
        <form className="w-100 text-center">
            <InputEmail />
            <InputPassword />
            <ForgotPassword />
            <SignInButton />
            <SignInWithGoogle />
            <SignUpPrompt/>
        </form>
    )
}

export default SignInForm;