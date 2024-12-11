import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from '../App'
import CartPage from '../Pages/CartPage';
import ProdDetails from '../Pages/ProdDetails';
import ProductPage from '../Pages/ProductsPage';


const AppRoutes = () =>{

return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Products" element={<ProductPage/>}/>
    <Route path="/ProductDets" element={<ProdDetails/>}/>
    <Route path="/ProductDets/:id" element={<ProdDetails/>}/>
    <Route path="/YourCart" element={<CartPage/>}/>

</Routes>
</BrowserRouter>

);

};
export default AppRoutes;
