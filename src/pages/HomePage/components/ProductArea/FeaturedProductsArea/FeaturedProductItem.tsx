import styled from "styled-components"
import FeaturedProductText from "./FeaturedProductText"
import FeaturedProductImage from "./FeaturedProductImage"

const FeaturedProductItemComponent = styled.div`
    width: 45%;
    background-color: var(--white);
    border-radius: 15px;
    transform-origin: center; /* Keeps the content centered */
    padding: 15px 10px 15px 10px;
    min-height: 215px;
    gap: 20px;

    &:hover {
        cursor: pointer;
        background-color: var(--primary-light);
    }
`

interface ProductItemProps {
    name: string
    imageUrl: string
    currency: string
    value: number
    id: string
    children?: React.ReactNode
}

function FeaturedProductItem({ name, imageUrl, currency, value, id, children }: ProductItemProps) {
    return (
        <FeaturedProductItemComponent className="d-flex flex-column">
            <FeaturedProductImage>
                <img src={imageUrl} alt={name} draggable={false} height="125px" />
            </FeaturedProductImage>
            <FeaturedProductText name={name} currency={currency} value={value} />
            {children}
        </FeaturedProductItemComponent>
    )
}

export default FeaturedProductItem