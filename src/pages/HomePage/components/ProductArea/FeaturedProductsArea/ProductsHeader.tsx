interface ProductsHeaderProps {
    text: string;
}

function ProductsHeader({ text }: ProductsHeaderProps) {
    return (
        <div className="d-flex justify-content-between">
            <h2 className="font-16">
                {text}
            </h2>
            <a href="#see-all" className="text-decoration-none color-grey-dark-1">See all</a>
        </div>
    );
}

export default ProductsHeader;