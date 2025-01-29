import ProductItemReviews from "./subcomponents/ProductItemReviews";
import ProductItemInfo from "./subcomponents/ProductItemInfo";
import { ProductItemDescComponent } from "./styles";

interface ProductItemDescProps {
    name: string
    currency: string
    value: number
    stars: number
    reviews: number
}

function ProductItemDesc({ name, currency, value, stars, reviews }: ProductItemDescProps) {
    return (
        <ProductItemDescComponent>
            <ProductItemInfo name={name} currency={currency} value={value} />
            <ProductItemReviews stars={stars} reviews={reviews} />
        </ProductItemDescComponent>
    );
}

export default ProductItemDesc;