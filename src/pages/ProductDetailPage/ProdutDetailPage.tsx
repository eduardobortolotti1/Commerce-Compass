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
        case '001': url = 'https://run.mocky.io/v3/4dad0472-8c14-4365-a285-b48ebce85823'; break;
        case '002': url = 'https://run.mocky.io/v3/ab5ca761-5780-48ec-94a0-34d99f5d6339'; break;
        case '003': url = 'https://run.mocky.io/v3/0b8f81ab-ccd4-425d-8341-2af5f531f97f'; break;
        case '004': url = 'https://run.mocky.io/v3/636445cf-8e3f-49f0-9c8d-03ba4129621d'; break;
        case '005': url = 'https://run.mocky.io/v3/adbf67f9-a007-448b-9863-4cc82236d42f'; break;
        case '006': url = 'https://run.mocky.io/v3/05b378cc-4f9e-4b49-b2f4-bc088cfcefc8'; break;
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