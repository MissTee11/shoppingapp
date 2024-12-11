import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../features/CartReducer";
import Warning from '../components/images/warning.avif'


const Cart= () => {
    const dispatch=useDispatch();
    const cart = useSelector(state => state.cart)

    const handleRemoveFromCart= (productId) => {
        dispatch(removeFromCart({id: productId}));
    };
    const handleAddQuantity = (productId) => {
        dispatch(incrementQuantity({id: productId}));
    }
    const handReduceQuantity = (productId) =>{
        dispatch(decrementQuantity({id: productId}))
    }

    
    return(
       
    <div>
         <Navbar/>
         {cart.products.length> 0 ?(
         <div>
            <h3 id="motto">SHOPPING CART</h3>
            <div>
                <div className="Details">

                    {cart.products.map((product) => (
                  <div key={product.id}>
                     <div>
                        <h3>{product.title}</h3>
                     <p><strong>PRICE:</strong>${product.price}</p>
                     <p><strong>In stock:</strong>{product.stock}</p>
                     <img src={product.thumbnail} className="detailImg"/>
                     <p><strong>Discount:</strong>{product.discountPercentage}%</p>
                     <p><strong>Warranty:</strong>{product.warrantyInformation}</p>
                     <p><strong>Shipping: </strong> {product.shippingInformation}</p>

                    <div className="QuantityCounter">
                    <button className="Button1" onClick={()=> handReduceQuantity(product.id)}>-</button>
                    <p className="Quantity">{product.quantity}</p>
                    <button className="Button1" onClick={()=> handleAddQuantity(product.id)}>+</button>
                </div>
                <p><strong>TOTAL: </strong>${(product.quantity * product.price).toFixed(2)}</p>
                <button className="Button2" onClick={()=> handleRemoveFromCart(product.id)}>Remove</button>

                </div>
                </div>
                 ))}

            </div>
            </div>
            </div>
        ) : (<div className="Cart">
            <p id="EmptyCart">CART IS EMPTY!</p>
            <img src ={Warning} alt="empty cart"/>
            </div>)}

        <Footer/>
     </div>
    );
};

export default Cart;