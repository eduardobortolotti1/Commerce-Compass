interface CarouselItemImageProps {
    children: React.ReactNode; // This allows any JSX content to be passed as children
}

function ProductImage({ children }: CarouselItemImageProps) {
    return (
        <div className="col-6 d-flex align-items-center">
            {children}
        </div>
    )
}

export default ProductImage;