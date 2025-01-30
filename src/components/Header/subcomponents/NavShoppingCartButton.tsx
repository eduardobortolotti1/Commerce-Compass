import { ShoppingCart } from "react-feather";
import ShoppingCartBadge from "./ShoppingCartBadge";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../contexts/ShoppingCartContext";
import { useEffect, useState } from "react";

function NavShoppingCartButton() {
    const [products, _] = useShoppingCart();
    const [amountInCart, setAmountInCart] = useState<number>(0);

    useEffect(() => {
        setAmountInCart(products.length);
    }, [products]);

    return (
        <Link className="position-relative color-default" to={"/cart"}>
            <ShoppingCart />
            {amountInCart > 0 ? <ShoppingCartBadge amountInCart={amountInCart} ></ShoppingCartBadge> : null}
        </Link>
    );
}

export default NavShoppingCartButton;