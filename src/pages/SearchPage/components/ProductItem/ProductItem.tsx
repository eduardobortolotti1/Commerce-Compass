import ProductItemDesc from "./ProductItemDesc"
import ProductItemImage from "./ProductItemImage"
import ProductItemProps from "../../../../types/product"
import { ProductItemComponent } from "./styles"

interface ProductSearchItemProps extends ProductItemProps {
    stars: number
    reviews: number
}

function ProductItem({ productId, imageUrl, name, currency, value, stars, reviews }: ProductSearchItemProps) {
    return (
        <a href={`#${productId}`} className="text-decoration-none">
            <ProductItemComponent>
                <ProductItemImage imageUrl={imageUrl} name={name} />
                <ProductItemDesc name={name} currency={currency} value={value} stars={stars} reviews={reviews} />
            </ProductItemComponent>
        </a>
    );
}

export default ProductItem;