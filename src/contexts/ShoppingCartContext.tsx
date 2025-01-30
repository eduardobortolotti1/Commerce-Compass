import { createContext, useContext, useState } from "react";
import { ShoppingCartProductItemProps } from "../types/product";

// Define the context type
type ShoppingCartContextType = {
    products: ShoppingCartProductItemProps[];
    setProducts: React.Dispatch<React.SetStateAction<ShoppingCartProductItemProps[]>>;
}


// Create the context with the correct type
export const ShoppingCartContext = createContext<ShoppingCartContextType>({
    products: [],
    setProducts: () => null
});

export function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
    // Creates the context variables
    const [products, setProducts] = useState<ShoppingCartProductItemProps[]>([]);

    // Returns the provider along with the context variables
    return (
        <ShoppingCartContext.Provider value={{ products, setProducts }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export function useShoppingCart(): [
    ShoppingCartProductItemProps[],
    React.Dispatch<React.SetStateAction<ShoppingCartProductItemProps[]>>
] {
    const context = useContext(ShoppingCartContext);

    return [context.products, context.setProducts];
}