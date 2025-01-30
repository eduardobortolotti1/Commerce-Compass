import { ProductItemDescComponent } from "../../../../SearchPage/components/ProductItem/styles";
import ProductItemInfo from "../../../../SearchPage/components/ProductItem/subcomponents/ProductItemInfo";
import ProductItemAmount from "./ProductItemAmount";

interface ShoppingCartProductItemDescProps {
    id: string
    name: string
    currency: string
    value: number
    amount: number
    handleAmountChange?: (id: string, amount: number) => void
    deleteProduct?: (id: string) => void
}

function ShoppingCartProductItemDesc({ id, name, currency, value, amount, handleAmountChange, deleteProduct }: ShoppingCartProductItemDescProps) {
    return (
        <ProductItemDescComponent>
            <ProductItemInfo name={name} currency={currency} value={value} productId={id} />
            <ProductItemAmount id={id} amount={amount} handleAmountChange={handleAmountChange} deleteProduct={deleteProduct} />
        </ProductItemDescComponent>
    );
}

export default ShoppingCartProductItemDesc;