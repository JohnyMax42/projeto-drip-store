import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ProductListingPage from "./ProductListingPage";
import ProductViewPage from "./ProductViewPage";

export default function RoutesPages(){
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}exact/>
            <Route path='/ProductListingPage' element={<ProductListingPage/>}exact/>
            <Route path='/ProductViewPage' element={<ProductViewPage/>}exact/>
        </Routes>
    )
}