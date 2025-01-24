import Header from "../../components/Header/Header";
import NavBackButton from "../../components/Header/subcomponents/NavBackButton";
import NavShoppingCartButton from "../../components/Header/subcomponents/NavShoppingCartButton";
import FeaturedProductItem from "../HomePage/components/ProductArea/FeaturedProductsArea/FeaturedProductItem";
import ProductItemReviews from "../SearchPage/components/ProductItem/subcomponents/ProductItemReviews";
import ProductAreaContainer from "./components/ProductAreaContainer/ProductAreaContainer";
import ProductHeader from "./components/ProductHeader/ProductHeader";
import Headphone from "@images/headphone.png";

function MoreProductsPage() {
    return (
        <>
            <Header>
                <NavBackButton />
                <NavShoppingCartButton amountInCart={2} />
            </Header>
            <ProductHeader />
            <ProductAreaContainer>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
                <FeaturedProductItem name={"TMA-2 HD Wireless"} imageUrl={Headphone} id={""} currency={"USD"} value={"350"}>
                    <ProductItemReviews stars={4.5} reviews={4} />
                </FeaturedProductItem>
            </ProductAreaContainer>
        </>
    );
}

export default MoreProductsPage;