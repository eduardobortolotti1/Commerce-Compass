import styled from "styled-components";

interface CarouselItemTextProps {
    children: React.ReactNode; // This allows any JSX content to be passed as children
}

const ProductTextComponent = styled.div`
    height: 100%;
`
function ProductText({ children }: CarouselItemTextProps) {
    return (
        <ProductTextComponent className="col-6 d-flex flex-column justify-content-between montserrat">
            {children}
        </ProductTextComponent>
    )
}

export default ProductText;