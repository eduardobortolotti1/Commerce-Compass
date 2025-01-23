interface CarouselItemImageProps {
    imageUrl: string;
    name: string;
}

function ProductImage({ imageUrl, name }: CarouselItemImageProps) {
    return (
        <div className="col-6 d-flex h-100 align-items-center">
            <img src={imageUrl} alt={name} draggable="false" height="135px" width="auto" />
        </div>
    )
}

export default ProductImage;