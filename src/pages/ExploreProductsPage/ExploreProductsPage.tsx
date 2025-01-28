import styled from "styled-components";
import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import FeaturedProductItem from "../HomePage/components/ProductArea/FeaturedProductsArea/FeaturedProductItem";
import ProductItemReviews from "../SearchPage/components/ProductItem/subcomponents/ProductItemReviews";
import ProductAreaContainer from "./components/ProductAreaContainer/ProductAreaContainer";
import ProductHeader from "./components/ProductHeader/ProductHeader";
import { useEffect, useState } from "react";
import { ProductItemSearch } from "../../types/product";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { Sheet } from "react-modal-sheet";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";

const WrapperComponent = styled.div`
    padding-inline: 25px;
`;

function ExploreProductsPage() {
    const [products, setProducts] = useState<ProductItemSearch[]>([])
    // Bottom sheet drawer state
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        // Making the GET request to fetch product details
        axios
            .get<ProductItemSearch[]>("https://run.mocky.io/v3/9bf038af-1267-485f-91e7-2f335890e9d0")
            .then((response) => {
                // Successfully received the product data
                setProducts(response.data);
            })
            .catch((err) => {
                // Handle error if the request fails
                console.error(err);
            });
    }, []);

    if (products.length === 0) {
        return <LoadingScreen />;
    }

    return (
        <div>
            <FilterDrawer isOpen={isOpen} setOpen={setOpen} />
            <WrapperComponent>
                <Header>
                    <NavBackButton />
                    <NavShoppingCartButton amountInCart={2} />
                </Header>
                <ProductHeader onClick={() => setOpen(true)} />
            </WrapperComponent>
            <ProductAreaContainer>
                {products.map((product, index) => {
                    return (
                        <FeaturedProductItem key={index} name={product.name} imageUrl={product.imageUrl} id={product.id} currency={product.currency} value={product.value} postedDate={product.postedDate} visitCount={product.visitCount} style={{ width: "45%" }}>
                            <ProductItemReviews stars={product.stars} reviews={product.reviews} />
                        </FeaturedProductItem>
                    );
                })}
            </ProductAreaContainer>
        </div>
    );
}

export default ExploreProductsPage;