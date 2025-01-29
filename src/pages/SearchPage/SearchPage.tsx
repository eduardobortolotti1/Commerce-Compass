import styled from "styled-components";
import InputWithIcon from "../../components/InputWithIcon/InputWithIcon";
import { Search } from "react-feather";
import Headphone from "@images/headphone.png"
import SearchResults from "./components/SearchResults";
import ProductItem from "./components/ProductItem/ProductItem";
import PopularProducts from "./components/PopularProducts";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavText from "../../components/Header/subcomponents/NavText";
import Header from "../../components/Header/Header";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import { useState } from "react";
import FetchSearchResults from "./components/FetchSearchResults/FetchSearchResults";

const SearchPageComponent = styled.div`
    padding: 0 30px 30px 30px;
`

function SearchPage() {
    const [searchValue, setSearchValue] = useState("");

    function handleSearchChange(value: string) {
        setSearchValue(value);
        console.log(value);
    }

    return (
        <SearchPageComponent>
            <Header>
                <NavBackButton />
                <NavText text={"Search"} />
                <NavShoppingCartButton />
            </Header>
            <InputWithIcon icon={Search} placeholder={"Search Headphone"} value={searchValue} onChange={handleSearchChange}/>
            <SearchResults>
                <FetchSearchResults />
            </SearchResults>
            <PopularProducts>
                <ProductItem id={"1337"} imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={270} stars={4.6} reviews={3} />
                <ProductItem id={"1337"} imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={270} stars={4.6} reviews={3} />
            </PopularProducts>
        </SearchPageComponent>
    );
}
export default SearchPage;