interface ProductItemInfoProps {
    name: string
    currency: string
    value: string
    productId?: string
}

function ProductItemInfo({ name, currency, value, productId }: ProductItemInfoProps) {
    return (
        <div>
            {productId ?
                <a href={`#${productId}`} className="m-0 text-decoration-none color-default">{name}</a> :
                <p className="m-0">{name}</p>
            }
            <p className="fw-bold font-14 m-0">{currency} {value}</p>
        </div>
    );
}

export default ProductItemInfo;