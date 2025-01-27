interface FeaturedProductTextProps {
    name: string
    currency: string
    value: number
}

function FeaturedProductText({ name, currency, value }: FeaturedProductTextProps) {
    return (
        <div>
            <h3 className="font-14 mb-1 text-truncate" style={{display: "block"}}>{name}</h3>
            <p className="font-12 fw-bold m-0">{currency} {value}</p>
        </div>
    )
}

export default FeaturedProductText