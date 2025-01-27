import { useEffect, useState } from "react";
import ProductItemProps from "../../../../types/product";
import ProductItem from "../ProductItem/ProductItem";
import axios from "axios";

{/* <ProductItem productId="1337" imageUrl={Headphone} name={"TMA-2 Comfort Wireless "} currency={"USD"} value={"270"} stars={4.6} reviews={3} /> */}

function FetchSearchResults() {
    const [results, setResults] = useState<ProductItemProps[]>([]);

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/9d58e83d-66cb-496c-9915-e4e4b22b7c49')
    }, []); // Fetch search results

    return (
        <>
            
        </>
    );
}

export default FetchSearchResults;