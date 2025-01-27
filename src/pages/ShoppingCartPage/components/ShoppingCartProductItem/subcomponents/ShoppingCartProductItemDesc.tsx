import { ProductItemDescComponent } from "../../../../SearchPage/components/ProductItem/styles";
import ProductItemInfo from "../../../../SearchPage/components/ProductItem/subcomponents/ProductItemInfo";
import ProductItemAmount from "./ProductItemAmount";

interface ShoppingCartProductItemDescProps {
    productId: string
    name: string
    currency: string
    value: number
    amount: number
}

function ShoppingCartProductItemDesc({ name, currency, value, amount, productId }: ShoppingCartProductItemDescProps) {
    return (
        <ProductItemDescComponent>
            <ProductItemInfo name={name} currency={currency} value={value} productId={productId}/>
            <ProductItemAmount amount={amount} />
        </ProductItemDescComponent>
    );
}

export default ShoppingCartProductItemDesc;