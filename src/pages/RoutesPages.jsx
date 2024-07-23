import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ProductListingPage from "./ProductListingPage";
import ProductViewPage from "./ProductViewPage";
import LoginPage from "./Login/LoginPage";

export default function RoutesPages() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/ProductListingPage' element={<ProductListingPage />} />
            <Route path='/ProductViewPage' element={<ProductViewPage />} />
            <Route path='/Login' element={<LoginPage />} />
        </Routes>
    )
}