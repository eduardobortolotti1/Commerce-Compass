import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

function NavBackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // This will take the user back to the previous page
    };

    return (
        <button onClick={handleGoBack}>
            <ChevronLeft />
        </button>
    );
}

export default NavBackButton;