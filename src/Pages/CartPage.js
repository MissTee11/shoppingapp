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

            <div className='ProductContainer'>
                <div className='Right-area'>
                    {cart.products.map((product)=>(
                       <div key={product.id}>
                            <button className="Button1" onClick={()=> handleRemoveFromCart(product.id)}>Remove</button>
                            <div className='CartItemDetails'>
                                <p>${(product.quantity * product.price).toFixed(2)}</p>
                                <div className='QuantityCounter'>
                                    <button className="ButtonA" onClick={()=> handReduceQuantity(product.id)}>-</button>
                                    <p className="Quantity">{product.quantity}</p>
                                    <button className="ButtonA" onClick={()=> handleAddQuantity(product.id)}>+</button>
                                </div>
                            </div>
                       </div>
                    ))}
                </div>

                <div className='Left-area'>
                    {cart.products.map((product)=>(
                       <div key={product.id} className="CartItem">
                        <img src={product.thumbnail} alt={product.title}/>
                            <div className='CartItemDetails'>
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p>{product.shippingInformation}</p>
                                <p>{product.warrantyInformation}</p>
                            </div>
                       </div>
                    ))}
                </div>

            </div>
           
            </div>
            
        ) : (<div className="CartEmpty">
         
            <p id="EmptyCart">CART IS EMPTY!</p>
            <img src ={Warning} alt="empty cart"/>
            </div>)}


            <div className='SummaryWrapper'>
                <div className="CartSummary"> 
                    <h3>Summary</h3>
                    <p><strong>TOTAL ITEMS IN CART: </strong>{total}</p>
                    <p><strong>TOTAL AMOUNT:</strong>${totalCost}</p>
                    <button className="CheckoutBtn">Checkout</button>

            </div>
            </div>
            

        <Footer/>
     </div>
    );
};

export default Cart;