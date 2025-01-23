import styled from "styled-components";
import SearchNav from "./components/SearchNav";
import InputWithIcon from "../../components/InputWithIcon/InputWithIcon";
import { Search } from "react-feather";
import Headphone from "@images/headphone.png"
import SearchResults from "./components/SearchResults";
import ProductItem from "./components/ProductItem/ProductItem";
import PopularProducts from "./components/PopularProducts";

const SearchPageComponent = styled.div`
    padding: 0 30px 30px 30px;
`

function SearchPage() {
    return (
        <SearchPageComponent>
            <SearchNav />
            <InputWithIcon icon={Search} placeholder={"Search Headphone"} />
            <SearchResults>
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={"4.6"} reviews={"3"} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={"4.6"} reviews={"3"} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={"4.6"} reviews={"3"} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={"4.6"} reviews={"3"} />
            </SearchResults>
            <PopularProducts>
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={"4.6"} reviews={"3"} />
                <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={"4.6"} reviews={"3"} />
            </PopularProducts>
        </SearchPageComponent>
    );
}
export default SearchPage;