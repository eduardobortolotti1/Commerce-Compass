import { ArrowRight } from "react-feather"
import styled from "styled-components"
import CarouselItemRow from "./CarouselItemRow"
import ProductImage from "./ProductImage"
import ProductText from "./ProductText"
import ProductTextTitle from "./ProductTextTitle"
import { useNavigate } from "react-router-dom"

const CarouselItemComponent = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: 10px;
    transform-origin: center; /* Keeps the content centered */
    height: 180px;
`

interface ProductItemProps {
    name: string,
    imageUrl: string,
}

function ProductBannerItem({ name, imageUrl }: ProductItemProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/products`);
    }

    return (
        <CarouselItemComponent>
            <CarouselItemRow>
                <ProductText>
                    <ProductTextTitle name={name} />
                    <button className="d-flex gap-2 color-primary fw-bold font-14" onClick={handleClick}>
                        Shop Now
                        <ArrowRight />
                    </button>
                </ProductText>

                <ProductImage imageUrl={imageUrl} name={name} />
            </CarouselItemRow>
        </CarouselItemComponent>
    )
}

export default ProductBannerItem