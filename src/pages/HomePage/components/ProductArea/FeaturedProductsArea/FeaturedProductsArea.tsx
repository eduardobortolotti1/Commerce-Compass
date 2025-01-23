import ProductCarousel from "../Carousels/ProductCarousel/ProductCarousel";
import FeaturedProductItem from "./FeaturedProductItem";
import Headphone from "@images/headphone.png"
import Cables from "@images/cable.png"
import ProductSwiper from "../../../../../components/ProductSwiper/ProductSwiper";

function FeaturedProductsArea() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <h2 className="font-16">
                    Featured Products
                </h2>
                <a href="#see-all" className="text-decoration-none color-grey-dark-1">See all</a>
            </div>
            <ProductSwiper slidesPerView={2} isFreeMode={true} spaceBetween={15}>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"} />
                <FeaturedProductItem name={"C02 - Cable"} imageUrl={Cables} id={""} currency={"USD"} value={"25"} />
            </ProductSwiper>
        </>
    )
}

export default FeaturedProductsArea;