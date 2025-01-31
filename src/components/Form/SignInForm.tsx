import ForgotPassword from "./Button/ForgotPassword";
import SignInButton from "./Button/SignInButton";
import SignUpPrompt from "./Button/SignUpPrompt";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Lock, Mail } from "react-feather";
import InputWithIcon from "../InputWithIcon/InputWithIcon";
import { InputWrapperComponent } from "./Input/styles";
import SignWithGoogle from "./Button/SignWithGoogle";

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { loginWithEmail, loginWithGoogle, user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Handle successful authentication with useEffect
    useEffect(() => {
        if (user && !isLoading) {
            navigate("/");
        }
    }, [user, navigate, isLoading]);

    async function handleEmailLogin(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        if (isLoading) return;

        setIsLoading(true);
        try {
            await loginWithEmail(email, password);
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
        <form className="w-100 text-center">
            <InputWrapperComponent className="d-flex flex-column">
                <InputWithIcon icon={Mail} placeholder={"Insert Email"} value={email} onChange={setEmail} style={{ height: "50px" }} />
                <InputWithIcon icon={Lock} placeholder={"Insert Password"} type={"password"} value={password} onChange={setPassword} style={{ height: "50px" }} />
            </InputWrapperComponent>
            <ForgotPassword />
            <SignInButton isLoading={isLoading} onClick={handleEmailLogin} />
            <SignWithGoogle isLoading={isLoading} onClick={handleGoogleLogin} />
            <SignUpPrompt />
        </form>
    )
}

export default SignInForm;