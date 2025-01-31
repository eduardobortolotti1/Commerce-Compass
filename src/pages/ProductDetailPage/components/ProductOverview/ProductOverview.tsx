import ProductSwiper from "../../../../components/ProductSwiper/ProductSwiper";
import FeaturedProductItem from "../../../HomePage/components/ProductArea/FeaturedProductsArea/FeaturedProductItem";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";
import ProductReviewItem from "../ProductReviewArea/subcomponents/ProductReviewItem";
import ProductDetailImageItem from "./ProductDetailImageItem";
import { ProductItemDetail } from "../../../../types/product";
import OtherProductsArea from "./OtherProductsArea";
import { useEffect, useState } from "react";
import axios from "axios";

interface ProductOverviewProps {
    productItemDetail: ProductItemDetail
}

function ProductOverview({ productItemDetail }: ProductOverviewProps) {
    const [otherProducts, setOtherProducts] = useState<ProductItemDetail[]>([]);

    // Grabs products from mock api to display in the other products area
    useEffect(() => {
        axios
            .get<ProductItemDetail[]>("https://run.mocky.io/v3/2b1289c2-2319-4b34-b382-fcc421ab206b")
            .then((response) => {
                setOtherProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="renderedContainer ">
            <ProductSwiper spaceBetween={20} slidesPerView={1.1} style={{ marginBlockEnd: "25px", paddingInline: "25px" }}>
                {productItemDetail.images.map((imageUrl, index) => {
                    return <ProductDetailImageItem key={index} imageUrl={imageUrl} alt={"Image"} />
                })}
            </ProductSwiper>
            <ProductReviewArea reviews={productItemDetail.reviews.length}>
                {productItemDetail.reviews.map((productReview, index) => {
                    return <ProductReviewItem key={index} productReview={productReview} />
                })}
            </ProductReviewArea>
            <OtherProductsArea>
                {otherProducts.map((product, index) => {
                    return <FeaturedProductItem key={index} name={product.name} imageUrl={product.imageUrl} id={product.id} currency={product.currency} value={product.value} />
                })}
            </OtherProductsArea>
        </div>
    );
}

export default ProductOverview;