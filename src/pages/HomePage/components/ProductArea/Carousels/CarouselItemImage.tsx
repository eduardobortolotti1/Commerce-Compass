interface CarouselItemImageProps {
    children: React.ReactNode; // This allows any JSX content to be passed as children
}

function CarouselItemImage({ children }: CarouselItemImageProps) {
    return (
        <div className="col-6">
            {children}
        </div>
    )
}

export default CarouselItemImage;