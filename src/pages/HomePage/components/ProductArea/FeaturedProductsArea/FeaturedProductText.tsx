import styled from "styled-components"

const nameComponent = styled.h3`

`;

interface FeaturedProductTextProps {
    name: string
    currency: string
    value: string
}

function FeaturedProductText({ name, currency, value }: FeaturedProductTextProps) {
    return (
        <div>
            <h3 className="font-14 mb-1">{name}</h3>
            <p className="font-12 fw-bold m-0">{currency} {value}</p>
        </div>
    )
}

export default FeaturedProductText