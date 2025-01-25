import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import ProductDetailHeader from "./components/ProductDetailHeader";
import PrimaryButton from "../../components/Button/PrimaryButton";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import ProductFeatures from "./components/ProductFeatures/ProductFeatures";

const ProductDetailPageComponent = styled.div`
    &>*:not(.carousel, .marginless, .renderedContainer) {
        margin-inline: 25px;
    }

    &>.renderedContainer>:not(.carousel) {
        margin-inline: 25px;        
    }

    .renderedContainer {
        animation: fadeIn 1s ease forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
         }
    }
`;

function ProductDetailPage() {
    const [activeButton, setActiveButton] = useState<string>("Overview");

    function updateNavBar(name: string) {
        setActiveButton(name);
    }

    return (
        <ProductDetailPageComponent>
            <Header>
                <NavBackButton />
                <NavShoppingCartButton />
            </Header>

            <ProductDetailHeader name="TMA-2 HD WIRELESS" currency={"USD"} value={350} updateFunction={updateNavBar} />

            {/* Renders the product Overview or Features based on which button is active */}
            {activeButton === "Overview" ? <ProductOverview /> : null}
            {activeButton === "Features" ? <ProductFeatures /> : null}

            <PrimaryButton text="Add to cart" />
        </ProductDetailPageComponent>
    );
}

export default ProductDetailPage;