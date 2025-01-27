import ProductSwiper from "../../../../components/ProductSwiper/ProductSwiper";
import FeaturedProductItem from "../../../HomePage/components/ProductArea/FeaturedProductsArea/FeaturedProductItem";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";
import ProductReviewItem from "../ProductReviewArea/subcomponents/ProductReviewItem";
import AnotherProductArea from "./AnotherProductArea";
import ProductDetailImageItem from "./ProductDetailImageItem";
import Headphone from "@images/headphone.png";
import Cables from "@images/cable.png";
import { ProductItemDetail } from "../../../../types/product";

interface ProductOverviewProps {
    productItemDetail: ProductItemDetail
}

function ProductOverview({ productItemDetail }: ProductOverviewProps) {
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
            <AnotherProductArea>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={350} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={25} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={350} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={25} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={350} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={25} />
            </AnotherProductArea>
        </div>
    );
}

export default ProductOverview;