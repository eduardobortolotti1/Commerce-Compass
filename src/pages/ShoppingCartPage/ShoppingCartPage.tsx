import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import styled from "styled-components";
import ShoppingCartProductItem from "./components/ShoppingCartProductItem/ShoppingCartProductItem";
import Headphone from "@images/headphone.png"
import NavText from "../../components/Header/subcomponents/NavText";
import NavTrashButton from "../../components/Header/subcomponents/NavTrashButton";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { ChevronRight } from "react-feather";
import CheckoutInfo from "./components/CheckoutInfo/CheckoutInfo";

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
    return (
        <ShoppingCartPageComponent className="d-flex flex-column justify-content-between">
            <WrapperComponent>
                <Header>
                    <NavBackButton />
                    <NavText text={"Shopping Cart"} />
                    <NavTrashButton />
                </Header>
                <ShoppingCartProducts className="d-flex flex-column">
                    <ShoppingCartProductItem id={"1337"} imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={270} amount={1} />
                    <ShoppingCartProductItem id={"1337"} imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={270} amount={1} />
                </ShoppingCartProducts>
            </WrapperComponent>
            <TotalArea>
                <CheckoutInfo />
                <PrimaryButton text="Proceed to checkout" icon={ChevronRight} className="pt-3 pb-4"/>
            </TotalArea>

        </ShoppingCartPageComponent>
    );
}

export default ShoppingCartPage;