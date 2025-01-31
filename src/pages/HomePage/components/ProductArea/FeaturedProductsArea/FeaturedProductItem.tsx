import styled from "styled-components"
import FeaturedProductText from "./FeaturedProductText"
import FeaturedProductImage from "./FeaturedProductImage"
import { Link } from "react-router-dom"
import { Category } from "../../../../../types/category"

const FeaturedProductItemComponent = styled(Link)`
    background-color: var(--white);
    border-radius: 15px;
    transform-origin: center; /* Keeps the content centered */
    padding: 15px 10px 15px 10px;
    min-height: 215px;
    gap: 20px;

    &:hover {
        cursor: pointer;
        background-color: var(--primary-light-1);
    }
`

interface ProductItemProps {
    name: string
    imageUrl: string
    currency: string
    value: number
    id: string
    children?: React.ReactNode
    style?: React.CSSProperties
    postedDate?: Date
    visitCount?: number
    category?: Category
}

function FeaturedProductItem({ name, imageUrl, currency, value, id, children, style }: ProductItemProps) {
    return (
        <FeaturedProductItemComponent to={`/product/${id}`} className="d-flex flex-column text-decoration-none" style={style}>
            <FeaturedProductImage>
                <img src={imageUrl} alt={name} draggable={false} height="125px" />
            </FeaturedProductImage>
            <FeaturedProductText name={name} currency={currency} value={value} />
            {children}
        </FeaturedProductItemComponent>
    )
}

export default FeaturedProductItem