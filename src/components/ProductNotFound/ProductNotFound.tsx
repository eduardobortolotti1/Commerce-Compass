import { Link } from "react-router-dom";

function ProductNotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Product not found!</h1>
            <Link to="/" className="color-default">Go back to home</Link>
        </div>
    );
}

export default ProductNotFound;