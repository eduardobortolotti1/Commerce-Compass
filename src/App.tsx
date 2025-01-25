// import './App.css'
// import SignUpPage from './pages/SignPage/SignUpPage'
// import SignInPage from './pages/SignPage/SignInPage'
// import HomePage from './pages/HomePage/HomePage'
// import SearchPage from "./pages/SearchPage/SearchPage"
// import MoreProductsPage from "./pages/MoreProductsPage/MoreProductsPage"
// import ProductDetailPage from "./pages/ProductDetailPage/ProdutDetailPage"
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage"

function App() {
  return (
    <div className="screen">
      <ShoppingCartPage />
    </div>
  )
}

export default App

// TODO: Modify the icon input component from Home page to be more generic. Use it in the Sign In/Up screen.
// Replace keyframes and styled in many components for global css variable in main.css