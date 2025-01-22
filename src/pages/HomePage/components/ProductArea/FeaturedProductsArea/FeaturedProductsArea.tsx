import styled from "styled-components";
import ProductCarousel from "../Carousels/ProductCarousel";
import FeaturedProductItem from "./FeaturedProductItem";
import Headphone from "@images/headphone.png"
import Cables from "@images/cable.png"

function FeaturedProductsArea() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <h2 className="font-16">
                    Featured Products
                </h2>
                <a href="#see-all" className="text-decoration-none color-grey-dark-1">See all</a>
            </div>
            <ProductCarousel infinite={true} slidesToShow={2.035} slidesToScroll={2} initialSlide={1} centerMode={true} centerPadding={"25px"}>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}  />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"}  />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}  />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"}  />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}  />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"}  />
            </ProductCarousel>
        </>
    )
}

export default FeaturedProductsArea;