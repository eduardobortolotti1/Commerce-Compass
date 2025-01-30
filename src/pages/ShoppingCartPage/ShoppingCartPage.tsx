import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import styled from "styled-components";
import ShoppingCartProductItem from "./components/ShoppingCartProductItem/ShoppingCartProductItem";
import NavText from "../../components/Header/subcomponents/NavText";
import NavTrashButton from "../../components/Header/subcomponents/NavTrashButton";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { ChevronRight } from "react-feather";
import CheckoutInfo from "./components/CheckoutInfo/CheckoutInfo";
import { useEffect, useState } from "react";
import { ShoppingCartProductItemProps } from "../../types/product";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

const ShoppingCartPageComponent = styled.div`
    padding-inline: 25px;
`;

const WrapperComponent = styled.div`
`;

const TotalArea = styled.div`

`;

const ShoppingCartProducts = styled.div`
    margin-block-start: 20px;
    gap: 35px;
`;

function ShoppingCartPage() {
    const [products, setProducts] = useShoppingCart();
    const [total, setTotal] = useState<number>(0);

    // Ensures that 'total' updates after 'products' changes
    useEffect(() => {
        setTotal(products.reduce((acc, product) => acc + product.value * product.amount, 0));
    }, [products]); // Runs whenever 'products' changes (dependency)


    // Handles + and - button clicks on the product amount
    function handleAmountChange(id: string, amount: number) {
        setProducts(
            products
                .map((product) => product.id === id ? { ...product, amount } : product)
                .filter((product) => product.amount > 0));
    }

    // Handles the delete button click on the trash icon
    function handleDeleteProduct(id: string) {
        setProducts(products.filter((product) => product.id !== id));
    }

    function handleDeleteAllProducts() {
        setProducts([]);
    }

    return (
        <ShoppingCartPageComponent className="d-flex flex-column justify-content-between">
            <WrapperComponent>
                <Header>
                    <NavBackButton />
                    <NavText text={"Shopping Cart"} />
                    <NavTrashButton onClick={handleDeleteAllProducts} />
                </Header>
                <ShoppingCartProducts className="d-flex flex-column">
                    {products.map((product) => <ShoppingCartProductItem key={product.id} deleteProduct={handleDeleteProduct} handleAmountChange={handleAmountChange} amount={product.amount} id={product.id} imageUrl={product.imageUrl} name={product.name} currency={product.currency} value={product.value} />)}
                </ShoppingCartProducts>
            </WrapperComponent>
            <TotalArea>
                <CheckoutInfo amount={products.length} currency={"USD"} total={total} />
                <PrimaryButton text="Proceed to checkout" icon={ChevronRight} className="pt-3 pb-4" />
            </TotalArea>

        </ShoppingCartPageComponent>
    );
}

export default ShoppingCartPage;