import ProductSwiper from "../../../../components/ProductSwiper/ProductSwiper";
import FeaturedProductItem from "../../../HomePage/components/ProductArea/FeaturedProductsArea/FeaturedProductItem";
import ProductReviewArea from "../ProductReviewArea/ProductReviewArea";
import ProductReviewItem from "../ProductReviewArea/subcomponents/ProductReviewItem";
import AnotherProductArea from "./AnotherProductArea";
import ProductDetailImageItem from "./ProductDetailImageItem";
import Headphone from "@images/headphone.png";
import HeadphoneBig from "@images/headphone-big.png";
import HeadphoneClose from "@images/headphone-close.png";
import Cables from "@images/cable.png";
import ProfilePicture from "@images/avatar_large.png";

function ProductOverview() {
    return (
        <div className="renderedContainer">
            <ProductSwiper spaceBetween={20} slidesPerView={1.1} className="carousel" style={{ marginBlockEnd: "25px", paddingInline: "25px" }}>
                <ProductDetailImageItem imageUrl={HeadphoneBig} alt={"Image"} />
                <ProductDetailImageItem imageUrl={HeadphoneClose} alt={"Image"} />
                <ProductDetailImageItem imageUrl={HeadphoneBig} alt={"Image"} />
                <ProductDetailImageItem imageUrl={HeadphoneClose} alt={"Image"} />
                <ProductDetailImageItem imageUrl={HeadphoneBig} alt={"Image"} />
            </ProductSwiper>
            <ProductReviewArea reviews={3}>
                <ProductReviewItem profileUrl={"/123"} profileId={"123"} profilePicUrl={ProfilePicture} authorName={"Madelina"} stars={4} review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <ProductReviewItem profileUrl={"/123"} profileId={"123"} profilePicUrl={ProfilePicture} authorName={"Irfan"} stars={5} review={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."} />
                <ProductReviewItem profileUrl={"/123"} profileId={"123"} profilePicUrl={ProfilePicture} authorName={"Ravi Putra"} stars={5} review={"Excepteur sint occaecat cupidatat non proident"} />
            </ProductReviewArea>
            <AnotherProductArea>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
            </AnotherProductArea>
        </div>
    );
}

export default ProductOverview;