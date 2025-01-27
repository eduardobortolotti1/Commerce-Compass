import { ShoppingCart } from "react-feather";
import ShoppingCartBadge from "./ShoppingCartBadge";
import { Link } from "react-router-dom";

interface NavShoppingCartButtonProps {
    amountInCart?: number
}

function NavShoppingCartButton({ amountInCart }: NavShoppingCartButtonProps) {
    return (
        <Link className="position-relative color-default" to={"/cart"}>
            <ShoppingCart />
            {amountInCart ? <ShoppingCartBadge amountInCart={amountInCart} ></ShoppingCartBadge> : null}
        </Link>
    );
}

export default NavShoppingCartButton;