import { ShoppingCart } from "react-feather";
import ShoppingCartBadge from "./ShoppingCartBadge";

interface NavShoppingCartButtonProps {
    amountInCart?: number
}

function NavShoppingCartButton({ amountInCart }: NavShoppingCartButtonProps) {
    return (
        <button className="position-relative">
            <ShoppingCart />
            {amountInCart ? <ShoppingCartBadge amountInCart={amountInCart} ></ShoppingCartBadge> : null}
        </button>
    );
}

export default NavShoppingCartButton;