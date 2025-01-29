import { Category } from "./category"
import { ProductReview } from "./review"

export default interface ProductItemProps {
    id: string // short number id
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

export interface ProductItemSearch extends ProductItemProps {
    category: Category
    stars: number
    reviews: number
    postedDate: Date 
    visitCount: number
}

export interface ProductSearchItemProps extends ProductItemProps {
    stars: number
    reviews: number
}