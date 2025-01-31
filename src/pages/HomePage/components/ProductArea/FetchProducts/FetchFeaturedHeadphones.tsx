import FeaturedProductItem from "../FeaturedProductsArea/FeaturedProductItem";
import ProductSwiperStyle1 from "../../../../../components/ProductSwiper/ProductSwiperStyle1";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductItemProps from "../../../../../types/product";

const WrapperAnimationComponent = styled.div`
    animation: fadeIn 1s ease forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
         }
    }
`;

function FetchFeaturedHeadphones() {
    const [featuredHeadphones, setFeaturedHeadphones] = useState<ProductItemProps[]>([]);

    // Loading Featured Headphones information
    useEffect(() => {
        axios
            .get<ProductItemProps[]>("https://run.mocky.io/v3/2b1289c2-2319-4b34-b382-fcc421ab206b")
            .then((response) => {
                setFeaturedHeadphones(response.data);
            })
            .catch((error) => {
                console.error("Error fetching featured headphones", error);
            });
    }, []);

    return (
        <WrapperAnimationComponent className="carousel">
            <ProductSwiperStyle1>
                {featuredHeadphones.map((product) => (
                    <FeaturedProductItem key={product.id} name={product.name} imageUrl={product.imageUrl} id={product.id} currency={product.currency} value={product.value} />
                ))}
            </ProductSwiperStyle1>
        </WrapperAnimationComponent>
    );
}

export default FetchFeaturedHeadphones;