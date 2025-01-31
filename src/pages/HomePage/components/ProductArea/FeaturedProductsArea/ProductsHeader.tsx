import { Link } from "react-router-dom";

interface ProductsHeaderProps {
    text: string;
}

function ProductsHeader({ text }: ProductsHeaderProps) {
    return (
        <div className="d-flex justify-content-between">
            <h2 className="font-16">
                {text}
            </h2>
            <Link to={"/products"} className="text-decoration-none color-grey-dark-1">See all</Link>
        </div>
    );
}

export default ProductsHeader;