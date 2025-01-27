import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import ProductDetailHeader from "./components/ProductDetailHeader";
import PrimaryButton from "../../components/Button/PrimaryButton";
import ProductOverview from "./components/ProductOverview/ProductOverview";
import ProductFeatures from "./components/ProductFeatures/ProductFeatures";
import axios from "axios";
import { ProductItemDetail } from "../../types/product";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const ProductDetailPageComponent = styled.div`
    &>*:not(.carousel, .renderedContainer) {
        padding-inline: 25px;
    }

    &>.renderedContainer>:not(.carousel) {
        padding-inline: 25px;        
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
    const [productDetail, setProductDetail] = useState<ProductItemDetail | null>(null);

    useEffect(() => {
        // Making the GET request to fetch product details
        axios
            .get<ProductItemDetail>("https://run.mocky.io/v3/991b5924-1006-4968-ba3c-2ebc1731c6bf")
            .then((response) => {
                // Successfully received the product data
                setProductDetail(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                // Handle error if the request fails
                console.error(err);
            });
    }, []);

    // Handles product not found situations
    if (productDetail === null) {
        return <LoadingScreen />;
    }

    function updateNavBar(name: string) {
        setActiveButton(name);
    }

    return (
        <ProductDetailPageComponent>
            <Header>
                <NavBackButton />
                <NavShoppingCartButton />
            </Header>

            <ProductDetailHeader name={productDetail.name} currency={productDetail.currency} value={productDetail.value} updateFunction={updateNavBar} />

            {/* Renders the product Overview or Features based on which button is active */}
            {activeButton === "Overview" ? <ProductOverview productItemDetail={productDetail} /> : null}
            {activeButton === "Features" ? <ProductFeatures productItemDetail={productDetail}/> : null}

            <PrimaryButton text="Add to cart" className="py-4" />
        </ProductDetailPageComponent>
    );
}

export default ProductDetailPage;