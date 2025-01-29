import styled from "styled-components";
import ProductSwiper from "../../../../../components/ProductSwiper/ProductSwiper";
import ProductBannerItem from "../Carousels/ProductCarousel/ProductBannerItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingSkeleton } from "./Skeletons/ProductItemSkeleton";
import { Category } from "../../../../../types/category";

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

interface FetchBannerProductsProps {
    category: Category;
}

function FetchBannerProducts({ category }: FetchBannerProductsProps) {
    const [products, setProducts] = useState<{ name: string; imageUrl: string }[]>([]);
    const [loading, setLoading] = useState(true);

    const url = category === 'Headphone' ? 'https://run.mocky.io/v3/9d58e83d-66cb-496c-9915-e4e4b22b7c49' : 'https://run.mocky.io/v3/0ce9375a-e0fb-4412-b4d2-f2dff8a59eaa';

    useEffect(() => {
        setLoading(true); // Uses Skeleton div after category dependency changes

        axios.get(url)
            .then((response) => {
                setProducts(response.data.products); // Store the products in state
                setLoading(false); // Data loaded
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Stop loading on error
            });
    }, [category, url]); // Re-run the effect whenever `category/url` changes

    return (
        <WrapperAnimationComponent className="carousel">
            {loading ? (
                <LoadingSkeleton>Loading products...</LoadingSkeleton>
            ) : (
                <ProductSwiper>
                    {products.map((product) => (
                        <ProductBannerItem
                            key={product.name}
                            name={product.name}
                            imageUrl={product.imageUrl}
                        />
                    ))}
                </ProductSwiper>
            )}
        </WrapperAnimationComponent>
    );
}

export default FetchBannerProducts;
