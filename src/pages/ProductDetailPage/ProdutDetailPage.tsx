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
import { useParams } from "react-router-dom";
import ProductNotFound from "../../components/ProductNotFound/ProductNotFound";

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

    const productId = useParams<{id: string}>().id;
    let url: string;
    switch (productId) {
        case '001': url = 'https://run.mocky.io/v3/33f8d270-60ae-4698-baa3-44e26a8ce927'; break;
        case '002': url = 'https://run.mocky.io/v3/4fcb2b54-40e5-4fd1-a644-69e2f96a2e71'; break;
        case '003': url = 'https://run.mocky.io/v3/457b734d-3936-4140-9a03-dbf679728ffd'; break;
        case '004': url = 'https://run.mocky.io/v3/3055b675-9d28-4dd5-934a-f4da7b7bbe19'; break;
        case '005': url = 'https://run.mocky.io/v3/ceea62a4-6238-45c9-aa85-94352bba7d12'; break;
        case '006': url = 'https://run.mocky.io/v3/115e6556-a468-41a9-9fa0-0a700794e1f0'; break;
        default: return <ProductNotFound />
    }
    useEffect(() => {
        // Making the GET request to fetch product details
        axios
            .get<ProductItemDetail>(url)
            .then((response) => {
                // Successfully received the product data
                setProductDetail(response.data);
            })
            .catch((err) => {
                // Handle error if the request fails
                console.error(err);
            });
    }, [url]);

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