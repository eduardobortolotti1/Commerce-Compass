import SignUpButton from "./Button/SignUpButton";
import SignUpWithGoogle from "./Button/SignWithGoogle";
import SignInPrompt from "./Button/SignInPrompt";
import { useEffect, useState } from "react";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import { Lock, Mail } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { InputWrapperComponent } from "./Input/styles";


function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUpWithEmail, loginWithGoogle, user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Handle successful authentication with useEffect
    useEffect(() => {
        if (user && !isLoading) {
            navigate("/home");
        }
    }, [user, navigate, isLoading]);

    async function handleEmailSignUp(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        if (isLoading) return;

        setIsLoading(true);
        try {
            await signUpWithEmail(email, password);
            // Don't navigate here - let the useEffect handle it
        } catch (error) {
            console.error("Email login failed:", error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleGoogleLogin(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        if (isLoading) return;

        setIsLoading(true);
        try {
            await loginWithGoogle();
            // Don't navigate here - let the useEffect handle it
        } catch (error) {
            console.error("Google login failed:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className="w-100 text-center d-flex flex-column">
            <InputWrapperComponent className="d-flex flex-column">
                <InputWithIcon icon={Mail} placeholder={"Insert Email"} value={email} onChange={setEmail} style={{ height: "50px" }} />
                <InputWithIcon icon={Lock} placeholder={"Insert Password"} type={"password"} value={password} onChange={setPassword} style={{ height: "50px" }} />
            </InputWrapperComponent>
            <SignUpButton isLoading={isLoading} onClick={handleEmailSignUp} />
            <SignUpWithGoogle isLoading={isLoading} onClick={handleGoogleLogin} />
            <SignInPrompt />
        </form>
    )
}

export default SignUpForm;