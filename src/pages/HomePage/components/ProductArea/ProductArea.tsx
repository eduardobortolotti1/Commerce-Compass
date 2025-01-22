import styled from "styled-components";
import ProductNavBar from "./ProductNavBar/ProductNavBar";
import ProductCarousel from "./Carousels/ProductCarousel";
import { ProductAreaComponent } from "./styles";
import FeaturedProductsArea from "./FeaturedProductsArea/FeaturedProductsArea";
import ProductItem from "./Carousels/ProductItem";
import Headphone from "@images/headphone.png"

function ProductArea() {
    return (
        <ProductAreaComponent>
            <ProductNavBar />
            <ProductCarousel infinite={false} slidesToShow={1.035} slidesToScroll={1} initialSlide={0} centerMode={true} centerPadding={"15px"}>
                <ProductItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={""}></ProductItem>
                <ProductItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={""}></ProductItem>
                <ProductItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={""}></ProductItem>
            </ProductCarousel>
            <FeaturedProductsArea />
        </ProductAreaComponent >
    )
}

export default ProductArea;