interface CarouselItemTextProps {
    children: React.ReactNode; // This allows any JSX content to be passed as children
}

function ProductText({ children }: CarouselItemTextProps) {
    return (
        <div className="col-6 d-flex flex-column justify-content-between montserrat">
            {children}
        </div>
    )
}

export default ProductText;