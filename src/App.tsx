import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import SignInPage from "./pages/SignPage/SignInPage";
import SignUpPage from "./pages/SignPage/SignUpPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductDetailPage from "./pages/ProductDetailPage/ProdutDetailPage"
import ExploreProductsPage from "./pages/ExploreProductsPage/ExploreProductsPage";

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
    <div className="screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

// TODO: Modify the icon input component from Home page to be more generic. Use it in the Sign In/Up screen.
// Replace keyframes and styled in many components for global css variable in main.css