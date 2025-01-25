import styled from "styled-components";
import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import ProductDetailHeader from "./components/ProductDetailHeader";
import ProductSwiper from "../../components/ProductSwiper/ProductSwiper";
import Headphone from "@images/headphone.png";
import HeadphoneBig from "@images/headphone-big.png";
import HeadphoneClose from "@images/headphone-close.png";
import Cables from "@images/cable.png";
import ProductDetailImageItem from "./components/ProductDetailImageItem";
import ProductReviewArea from "./components/ProductReviewArea/ProductReviewArea";
import ProductReviewItem from "./components/ProductReviewArea/subcomponents/ProductReviewItem";
import ProfilePicture from "@images/avatar_large.png";
import FeaturedProductItem from "../HomePage/components/ProductArea/FeaturedProductsArea/FeaturedProductItem";
import AnotherProductArea from "./components/AnotherProductArea";
import AddToCartButtton from "../../components/Button/AddToCartButtton";

const ProductDetailPageComponent = styled.div`
    &>*:not(.carousel, .cartButton) {
        margin-inline: 25px;
    }
`;

function ProductDetailPage() {
    return (
        <ProductDetailPageComponent>
            <Header>
                <NavBackButton />
                <NavShoppingCartButton />
            </Header>
            <ProductDetailHeader name="TMA-2 HD WIRELESS" currency={"USD"} value={350} />
            <ProductSwiper spaceBetween={20} slidesPerView={1.1} className="carousel" style={{ marginBlock: "25px", paddingInline: "25px" }}>
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
            <AddToCartButtton />
        </ProductDetailPageComponent>
    );
}

export default ProductDetailPage;