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
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

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
    const [products, setProducts] = useShoppingCart();

    const productId = useParams<{ id: string }>().id;
    let url: string;
    switch (productId) {
        case '001': url = 'https://run.mocky.io/v3/476b1f0b-7faa-4d73-8730-0da8a7133963'; break;
        case '002': url = 'https://run.mocky.io/v3/8b7f5e56-5a1c-4b65-a27a-b3af79ab862d'; break;
        case '003': url = 'https://run.mocky.io/v3/c4f98ddb-8441-4dac-8d54-ec3a31533fc7'; break;
        case '004': url = 'https://run.mocky.io/v3/147b274e-def8-4e40-8dce-ad1ae4ee5f4a'; break;
        case '005': url = 'https://run.mocky.io/v3/16a0de92-1f42-472f-8b5b-d0cb72ec427f'; break;
        case '006': url = 'https://run.mocky.io/v3/b475d006-05a9-483e-a7b3-c93f2d17feb1'; break;
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

    function handleAddToCart() {
        if (!productDetail) {
            console.warn('Attempted to add null product to cart');
            return;
        }
        const isAlreadyInCart = products.find((product) => product.id === productDetail.id);
        if (isAlreadyInCart) {
            setProducts(
                products.map((product) => product.id === productDetail.id ? { ...product, amount: product.amount + 1 } : product)
            );
        }
        else {
            setProducts((prevProducts) => [
                ...prevProducts,
                { id: productDetail.id, imageUrl: productDetail.images[0], name: productDetail.name, currency: productDetail.currency, value: productDetail.value, amount: 1 }
            ])
        }
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
            {activeButton === "Features" ? <ProductFeatures productItemDetail={productDetail} /> : null}

            <PrimaryButton text="Add to cart" className="py-4" onClick={handleAddToCart} />
        </ProductDetailPageComponent>
    );
}

export default ProductDetailPage;