import { Link } from "react-router-dom";

function SeeAllButton() {
    return (
        <>
            <Link to={"/products"} className="text-decoration-none color-grey-dark-1">See all</Link>
        </>
    );
}

export default SeeAllButton;