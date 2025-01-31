import { Category } from "./category"
import { ProductReview } from "./review"

export default interface ProductItemProps {
    id: string
    imageUrl: string
    name: string
    currency: string
    value: number
}

export interface ProductItemDetail extends ProductItemProps {
    images: string[]
    reviews: ProductReview[]
    descriptionTitle: string
    description_section1: string
    description_section2: string
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

export interface ShoppingCartProductItemProps extends ProductItemProps {
    amount: number
    handleAmountChange?: (id: string, amount: number) => void
    deleteProduct?: (id: string) => void
}