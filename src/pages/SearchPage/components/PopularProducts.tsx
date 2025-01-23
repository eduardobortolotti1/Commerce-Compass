import SearchResults from "./SearchResults";

interface PopularProductsProps {
    children?: React.ReactNode;

}

function PopularProducts({ children, }: PopularProductsProps) {
    return (
        <SearchResults>
            <h3 className="font-16">Popular products</h3>
            {children}
        </SearchResults>
    );
}

export default PopularProducts;