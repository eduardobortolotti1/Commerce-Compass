import ProductItemProps, { ShoppingCartProductItemProps } from "../../../../types/product";
import ProductItemImage from "../../../SearchPage/components/ProductItem/ProductItemImage";
import { ProductItemComponent } from "../../../SearchPage/components/ProductItem/styles";
import ShoppingCartProductItemDesc from "./subcomponents/ShoppingCartProductItemDesc";

function ShoppingCartProductItem({ id, imageUrl, name, currency, value, amount, handleAmountChange, deleteProduct }: ShoppingCartProductItemProps) {
    return (
        <ProductItemComponent>
            <ProductItemImage imageUrl={imageUrl} name={name} />
            <ShoppingCartProductItemDesc deleteProduct={deleteProduct} handleAmountChange={handleAmountChange} id={id} name={name} currency={currency} value={value} amount={amount} />
        </ProductItemComponent>
    );
}

export default ShoppingCartProductItem;