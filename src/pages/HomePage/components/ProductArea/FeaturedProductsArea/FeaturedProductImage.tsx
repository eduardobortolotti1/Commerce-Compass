import styled from "styled-components"

const FeaturedProductImageComponent = styled.div`
    width: 100%;
    height: 100%;
    max-height: 125px;
`

interface FeaturedProductImageProps {
    children: React.ReactNode
} 

function FeaturedProductImage({children}: FeaturedProductImageProps) {
    return (
        <FeaturedProductImageComponent className="d-flex justify-content-center align-items-center">
            {children}
        </FeaturedProductImageComponent>
    )
}

export default FeaturedProductImage