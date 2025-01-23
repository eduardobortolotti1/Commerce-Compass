interface ProductItemInfoProps {
    name: string
    currency: string
    value: string
}

    function ProductItemInfo({ name, currency, value }: ProductItemInfoProps) {
    return (
        <div>
            <p className="m-0">{name}</p>
            <p className="fw-bold font-14 m-0">{currency} {value}</p>
        </div>
    );
}

export default ProductItemInfo;