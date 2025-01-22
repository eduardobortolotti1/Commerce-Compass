import InputEmail from "./Input/InputEmail";
import InputPassword from "./Input/InputPassword";
import SignUpButton from "./Button/SignUpButton";
import SignUpWithGoogle from "./Button/SignUpWithGoogle";
import SignInPrompt from "./Button/SignInPrompt";

function SignUpForm() {
    return (
        <form className="w-100 text-center">
            <InputEmail />
            <InputPassword />
            <SignUpButton />
            <SignUpWithGoogle />
            <SignInPrompt/>
        </form>
    )
}

export default SignUpForm;