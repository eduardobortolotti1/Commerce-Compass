import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

interface NavUserIconProps {
    imageUrl: string
}

function NavUserIcon({ imageUrl }: NavUserIconProps) {
    const { logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
        navigate("/signIn");
    }

    return (
        <button onClick={handleLogout} title="Click to Sign Out"><img src={imageUrl} alt="user" height="35px" width="auto" /></button>
    );
}

export default NavUserIcon;