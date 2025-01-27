import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Page not found!</h1>
            <Link to="/" className="color-default">Go back to home</Link>
        </div>
    );
}

export default PageNotFound;