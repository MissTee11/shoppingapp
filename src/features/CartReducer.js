import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    products: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const existingProduct = state.products.find(
                (product)=> product.id === action.payload.id
            );
            if(existingProduct){
                existingProduct.quantity +=1;
            }
            else{
                state.products.push({...action.payload, quantity:1});
            } 
    },
    
    removeFromCart:(state,action) =>{
        state.products = state.products.filter(
            (product) => product.id !== action.payload.id
        );
    },
    incrementQuantity: (state, action) =>{
       const productInCart = state.products.find(
        (product)=> product.id === action.payload.id
       );
       if(productInCart && productInCart.quantity< productInCart.stock){
        productInCart.quantity++;
       }
    },
    decrementQuantity: (state, action) =>{
        const productInCart = state.products.find(
         (product)=> product.id === action.payload.id
        );
        if(productInCart && productInCart.quantity>1){
         productInCart.quantity--;
        }
     },

    
    },


});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;