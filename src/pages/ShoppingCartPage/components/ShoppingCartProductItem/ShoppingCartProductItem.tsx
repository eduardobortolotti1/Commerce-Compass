import ProductItemProps from "../../../../types/product";
import ProductItemImage from "../../../SearchPage/components/ProductItem/ProductItemImage";
import { ProductItemComponent } from "../../../SearchPage/components/ProductItem/styles";
import ShoppingCartProductItemDesc from "./subcomponents/ShoppingCartProductItemDesc";

interface ShoppingCartProductItemProps extends ProductItemProps {
    amount: number
}

function ShoppingCartProductItem({ id, imageUrl, name, currency, value, amount }: ShoppingCartProductItemProps) {
    return (
        <ProductItemComponent>
            <ProductItemImage imageUrl={imageUrl} name={name} />
            <ShoppingCartProductItemDesc productId={id} name={name} currency={currency} value={value} amount={amount} />
        </ProductItemComponent>
    );
}

export default ShoppingCartProductItem;