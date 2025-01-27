import { ProductReview } from "./review"

export default interface ProductItemProps {
    productId: string // short number id
    imageUrl: string
    name: string
    currency: string // Always USD
    value: number
}

export interface ProductItemDetail extends ProductItemProps {
    images: string[]
    reviews: ProductReview[]
    descriptionTitle: string // Use catchy terms like "The best headphones in the market"
    description_section1: string // one paragraph only
    description_section2: string // one paragraph only
}

