import styled from "styled-components"
import FeaturedProductText from "./FeaturedProductText"
import FeaturedProductImage from "./FeaturedProductImage"

const CarouselItemComponent = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: 15px;
    transform: scaleX(0.95); /* Scales down the content */
    transform-origin: center; /* Keeps the content centered */
    padding: 15px 10px 15px 10px;
    min-height: 215px;
    gap: 20px;
`

interface ProductItemProps {
    name: string
    imageUrl: string
    currency: string
    value: string
    id: string
}

function FeaturedProductItem({ name, imageUrl, currency, value, id }: ProductItemProps) {
    return (
        <CarouselItemComponent className="d-flex flex-column">
            <FeaturedProductImage>
                <img src={imageUrl} alt={name} draggable={false} />
            </FeaturedProductImage>
            <FeaturedProductText name={name} currency={currency} value={value} />
        </CarouselItemComponent>
    )
}

export default FeaturedProductItem