import { ArrowRight } from "react-feather"
import styled from "styled-components"
import CarouselItemRow from "./CarouselItemRow"
import ProductImage from "./ProductImage"
import ProductText from "./ProductText"
import ProductTextTitle from "./ProductTextTitle"

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
    id: string
}

function ProductBannerItem({name, imageUrl, id}: ProductItemProps) {
    return (
        <CarouselItemComponent>
            <CarouselItemRow>
                <ProductText>
                    <ProductTextTitle name={name} />
                    <button className="d-flex gap-2 color-primary fw-bold font-14">
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