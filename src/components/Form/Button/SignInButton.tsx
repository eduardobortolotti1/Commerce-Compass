import { SignButtonComponent } from "./styles";

interface SignUpButtonProps {
    isLoading: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SignInButton({ isLoading, onClick }: SignUpButtonProps) {
    return (
        <>
            <SignButtonComponent type="submit" onClick={isLoading ? undefined : onClick} className="w-100 fw-bold mt-3">
                {isLoading ? "Loading..." : "Sign In"}
            </SignButtonComponent>
        </>
    );
}

export default SignInButton