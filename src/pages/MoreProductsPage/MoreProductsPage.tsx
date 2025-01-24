import FilterButton from "../../components/FiilterButton/FilterButton";
import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import ProductHeader from "./components/ProductHeader/ProductHeader";

function MoreProductsPage() {
    return (
        <>
            <Header>
                <NavBackButton />
                <NavShoppingCartButton amountInCart={2} />
            </Header>
            <ProductHeader />
        </>
    );
}

export default MoreProductsPage;