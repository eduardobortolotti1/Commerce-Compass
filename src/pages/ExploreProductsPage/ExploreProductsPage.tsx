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
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import React from "react";
import { Category } from "../../types/category";
import { SortBy } from "../../types/sortby";
import Filter from "../../types/filter";

const WrapperComponent = styled.div`
    padding-inline: 25px;
`;

function ExploreProductsPage() {
    const [products, setProducts] = useState<ProductItemSearch[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductItemSearch[]>([]);
    const [activeCategory, setActiveCategory] = React.useState<Category>("Headphone");
    const [activeSortBy, setActiveSortBy] = React.useState<SortBy>("Popularity");
    const [activeFilter, setActiveFilter] = React.useState({ category: activeCategory, sortBy: activeSortBy });
    // Bottom sheet drawer state
    const [isOpen, setOpen] = useState(false);

    function handleApplyFilter(filter: Filter) {
        setActiveFilter(filter);

        // Using variable because of async nature of useState();
        let filtered = products.filter(product => product.category === filter.category);

        // Filters by category
        setFilteredProducts(filtered);
        console.log("Filtered array by category:")
        console.log(filteredProducts);
        // Filters by sort by
        switch (filter.sortBy) {
            case "Popularity":
                filtered = [...filtered].sort((a, b) => b.visitCount - a.visitCount);
                break;
            case "Newest":
                filtered = [...filtered].sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
                break;
            case "High Price":
                filtered = [...filtered].sort((a, b) => b.value - a.value);
                break;
            case "Low Price":
                filtered = [...filtered].sort((a, b) => a.value - b.value);
                break;
            case "Oldest":
                filtered = [...filtered].sort((a, b) => new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime());
                break;
        }
    }


    useEffect(() => {
        // Making the GET request to fetch product details
        axios
            .get<ProductItemSearch[]>("https://run.mocky.io/v3/4e55a81c-7da3-4e9c-8737-7677900426a2")
            .then((response) => {
                // Successfully received the product data
                setProducts(response.data);
                setFilteredProducts(response.data);
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
            <FilterDrawer isOpen={isOpen} setOpen={setOpen} activeCategory={activeCategory} setActiveCategory={setActiveCategory} activeSortBy={activeSortBy} setActiveSortBy={setActiveSortBy} onApplyFilter={handleApplyFilter} />
            <WrapperComponent>
                <Header>
                    <NavBackButton />
                    <NavShoppingCartButton amountInCart={2} />
                </Header>
                <ProductHeader onClick={() => setOpen(true)} />
            </WrapperComponent>
            <ProductAreaContainer>
                {filteredProducts.map((product, index) => {
                    return (
                        <FeaturedProductItem key={index} name={product.name} imageUrl={product.imageUrl} id={product.id} currency={product.currency} value={product.value} postedDate={product.postedDate} visitCount={product.visitCount} category={product.category} style={{ width: "45%" }}>
                            <ProductItemReviews stars={product.stars} reviews={product.reviews} />
                        </FeaturedProductItem>
                    );
                })}
            </ProductAreaContainer>
        </div>
    );
}

export default ExploreProductsPage;