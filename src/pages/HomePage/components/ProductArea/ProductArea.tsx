import styled from "styled-components";
import ProductNavBar from "./ProductNavBar/ProductNavBar";
import ProductCarousel from "./Carousels/ProductCarousel";
import { ProductAreaComponent } from "./styles";

function ProductArea() {
    return (
        <ProductAreaComponent>
            <ProductNavBar />
            <ProductCarousel />
        </ProductAreaComponent>
    )
}

export default ProductArea;