// import './App.css'
// import SignUpPage from './pages/SignPage/SignUpPage'
// import SignInPage from './pages/SignPage/SignInPage'
// import HomePage from './pages/HomePage/HomePage'
// import SearchPage from "./pages/SearchPage/SearchPage"
// import MoreProductsPage from "./pages/MoreProductsPage/MoreProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage/ProdutDetailPage"

function App() {
  return (
    <div className="screen">
      <ProductDetailPage />
    </div>
  )
}

export default App

// TODO: Modify the icon input component from Home page to be more generic. Use it in the Sign In/Up screen.
// TODO: Make Product render dynamic in the Home page. Integrate with the category navigation bar.