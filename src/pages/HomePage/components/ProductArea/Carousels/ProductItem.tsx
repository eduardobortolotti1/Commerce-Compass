import { ArrowRight } from "react-feather"
import styled from "styled-components"
import CarouselItemRow from "./CarouselItemRow"
import ProductImage from "./CarouselItemImage"
import ProductText from "./CarouselItemText"

const CarouselItemComponent = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: 10px;
    transform: scale(0.95); /* Scales down the content */
    transform-origin: center; /* Keeps the content centered */
`

interface ProductItemProps {
    name: string,
    imageUrl: string,
    id: string
}

function ProductItem({name, imageUrl, id}: ProductItemProps) {
    return (
        <CarouselItemComponent>
            <CarouselItemRow>
                <ProductText>
                    <h3 className="fw-bold font-22 montserrat">
                        {name}
                    </h3>
                    <button className="d-flex gap-2 color-primary fw-bold font-14">
                        Shop Now
                        <ArrowRight />
                    </button>
                </ProductText>

                <ProductImage>
                    <img src={imageUrl} alt={name} draggable="false" width="100%" height="auto"/>
                </ProductImage>
            </CarouselItemRow>
        </CarouselItemComponent>
    )
}

export default ProductItem