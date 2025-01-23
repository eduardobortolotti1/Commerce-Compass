import ProductNavBar from "./ProductNavBar/ProductNavBar";
import { ProductAreaComponent } from "./styles";
import FeaturedProductsArea from "./FeaturedProductsArea/FeaturedProductsArea";
import ProductItem from "./Carousels/ProductCarousel/ProductItem";
import Headphone from "@images/headphone.png"
import ProductSwiper from "../../../../components/ProductSwiper/ProductSwiper";

function ProductArea() {
    return (
        <ProductAreaComponent>
            <ProductNavBar />
            <ProductSwiper>
                <ProductItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={""}></ProductItem>
                <ProductItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={""}></ProductItem>
                <ProductItem name={"TMA-2 Modular Headphone"} imageUrl={Headphone} id={""}></ProductItem>
            </ProductSwiper>
            <FeaturedProductsArea />
        </ProductAreaComponent >
    )
}

export default ProductArea;