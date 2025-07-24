import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity, CartItemsCount, CartItemsTotal } from "../features/CartReducer";
import Warning from '../components/images/warning.avif'


const Cart= () => {
    const dispatch=useDispatch();
    const cart = useSelector(state => state.cart)
    const total = useSelector(CartItemsCount);
    const totalCost = useSelector(CartItemsTotal);

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
            <div className="CartSummary"> 
                    <h3>Summary</h3>
                    <p><strong>TOTAL ITEMS IN CART: </strong>{total}</p>
                    <p><strong>TOTAL AMOUNT:</strong>${totalCost}</p>
                    <button className="Button1">Checkout</button>

                </div>

            <table className="Cart">
                
                    <thead >
                        <tr>
                        <th><strong>NAME:</strong></th>
                        <th><strong>IMAGE:</strong></th>
                        <th><strong>PRICE</strong></th>
                        <th><strong>IN STOCK:</strong></th>
                        <th><strong>DISCOUNT:</strong></th>
                        <th><strong>WARRANTY:</strong></th>
                        <th><strong>SHIPPING:</strong></th>
                        <th><strong>QUANTITY:</strong></th>
                        <th><strong>SUBTOTAL: </strong></th>
                        <th><strong>REMOVE</strong></th>
                        </tr>
        
                    </thead>

                    <tbody>
                    
                    {cart.products.map((product) => (
                  <tr key={product.id}  >
                    <td>{product.title}</td>
                    <td><img src={product.thumbnail} className="detailImg"/></td>
                     <td>${product.price}</td>
                     <td>{product.stock}</td>
                     <td>{product.discountPercentage}%</td>
                     <td>{product.warrantyInformation}</td>
                     <td> {product.shippingInformation}</td>

                    <td className="QuantityCounter">
                    <button className="ButtonA" onClick={()=> handReduceQuantity(product.id)}>-</button>
                    <p className="Quantity">{product.quantity}</p>
                    <button className="ButtonA" onClick={()=> handleAddQuantity(product.id)}>+</button>
                </td>
                <td>${(product.quantity * product.price).toFixed(2)}</td>
                <td><button className="Button1" onClick={()=> handleRemoveFromCart(product.id)}>Remove</button>
                </td>

                </tr>
               
                 ))}
                
                </tbody>
            </table>
           
            </div>
            
        ) : (<div className="CartEmpty">
         
            <p id="EmptyCart">CART IS EMPTY!</p>
            <img src ={Warning} alt="empty cart"/>
            </div>)}

        <Footer/>
     </div>
    );
};

export default Cart;