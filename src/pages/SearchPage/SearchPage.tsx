import styled from "styled-components";
import InputWithIcon from "../../components/InputWithIcon/InputWithIcon";
import { Search } from "react-feather";
import SearchResults from "./components/SearchResults";
import ProductItem from "./components/ProductItem/ProductItem";
import PopularProducts from "./components/PopularProducts";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavText from "../../components/Header/subcomponents/NavText";
import Header from "../../components/Header/Header";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import { useEffect, useState } from "react";
import { ProductSearchItemProps } from "../../types/product";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingItem from "./components/LoadingItem/LoadingItem";

const SearchPageComponent = styled.div`
    padding: 0 25px 25px 25px;
`

function SearchPage() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [products, setProducts] = useState<ProductSearchItemProps[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductSearchItemProps[]>([]);
    const [popularProducts, setPopularProducts] = useState<ProductSearchItemProps[]>([]);

    // Grabs product list once because of mock API response
    useEffect(() => {
        axios
            .get("https://run.mocky.io/v3/688db0e0-deea-4e00-bf48-7f983a129d42")
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            }
            )
        axios
            .get("https://run.mocky.io/v3/0045dd64-07d5-41c4-8eb5-29af78f51c1d")
            .then(response => {
                setPopularProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            }
            )
    }, []);

    function handleSearchChange(value: string) {
        setSearchValue(value);
        setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <SearchPageComponent className="d-flex flex-column justify-content-between">
            <div style={searchValue === "" ? { marginBottom: "300px" } : undefined}>
                <Header>
                    <NavBackButton />
                    <NavText text={"Search"} />
                    <NavShoppingCartButton />
                </Header>
                <InputWithIcon icon={Search} placeholder={"Search Headphone"} value={searchValue} onChange={handleSearchChange} />
            </div>
            <SearchResults>
                {searchValue === "" ? null :
                    filteredProducts.map(product => (
                        <ProductItem id={product.id} imageUrl={product.imageUrl} name={product.name} currency={product.currency} value={product.value} stars={product.stars} reviews={product.reviews} />
                    ))
                }
            </SearchResults>
            <PopularProducts>
                {popularProducts.length === 0 ? <LoadingItem /> :
                    popularProducts.map(product => (
                        <ProductItem key={product.id} id={product.id} imageUrl={product.imageUrl} name={product.name} currency={product.currency} value={product.value} stars={product.stars} reviews={product.reviews} />
                    ))
                }
            </PopularProducts>
        </SearchPageComponent>
    );
}
export default SearchPage;