import ProductItemDesc from "./ProductItemDesc"
import ProductItemImage from "./ProductItemImage"
import ProductItemProps from "../../../../types/product"
import { ProductItemComponent } from "./styles"
import { ProductSearchItemProps } from "../../../../types/product"


function ProductItem({ id, imageUrl, name, currency, value, stars, reviews }: ProductSearchItemProps) {
    return (
        <a href={`#${id}`} className="text-decoration-none">
            <ProductItemComponent>
                <ProductItemImage imageUrl={imageUrl} name={name} />
                <ProductItemDesc name={name} currency={currency} value={value} stars={stars} reviews={reviews} />
            </ProductItemComponent>
        </a>
    );
}

export default ProductItem;