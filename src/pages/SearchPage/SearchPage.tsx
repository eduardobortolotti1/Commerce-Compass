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

const SearchPageComponent = styled.div`
    padding: 0 30px 30px 30px;
`

function SearchPage() {
    return (
        <SearchPageComponent>
            <Header>
                <NavBackButton />
                <NavText text={"Search"} />
                <NavShoppingCartButton />
            </Header>
            <InputWithIcon icon={Search} placeholder={"Search Headphone"} />
            <SearchResults>
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={4.6} reviews={3} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={4.6} reviews={3} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={4.6} reviews={3} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={4.6} reviews={3} />
            </SearchResults>
            <PopularProducts>
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={4.6} reviews={3} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={4.6} reviews={3} />
            </PopularProducts>
        </SearchPageComponent>
    );
}
export default SearchPage;