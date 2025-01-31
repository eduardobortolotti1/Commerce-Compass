import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import SignInPage from "./pages/SignPage/SignInPage";
import SignUpPage from "./pages/SignPage/SignUpPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductDetailPage from "./pages/ProductDetailPage/ProdutDetailPage"
import ExploreProductsPage from "./pages/ExploreProductsPage/ExploreProductsPage";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />
  },
  {
    path: "/signIn",
    element: <SignInPage />
  },
  {
    path: "/signUp",
    element: <SignUpPage />
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "/products",
    element: <ExploreProductsPage />
  },
  {
    path: "/cart",
    element: <ShoppingCartPage />
  },
  {
    path: "product/:id",
    element: <ProductDetailPage />
  }
]);

function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <div className="screen">
          <RouterProvider router={router} />
        </div>
      </ShoppingCartProvider>
    </AuthProvider>
  )
}

export default App

// TODO: Modify the icon input component from Home page to be more generic. Use it in the Sign In/Up screen.
// Replace keyframes and styled in many components for global css variable in main.css