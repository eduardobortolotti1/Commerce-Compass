import ProductItemDesc from "./ProductItemDesc"
import ProductItemImage from "./ProductItemImage"
import { ProductItemComponent } from "./styles"
import { ProductSearchItemProps } from "../../../../types/product"
import { Link } from "react-router-dom";


function ProductItem({ id, imageUrl, name, currency, value, stars, reviews }: ProductSearchItemProps) {
    return (
        <Link to={`/product/${id}`} className="text-decoration-none">
            <ProductItemComponent>
                <ProductItemImage imageUrl={imageUrl} name={name} />
                <ProductItemDesc name={name} currency={currency} value={value} stars={stars} reviews={reviews} />
            </ProductItemComponent>
        </Link>
    );
}

export default ProductItem;