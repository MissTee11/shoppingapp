import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    products: [],
    productDetails: {},
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
    setProducts(state, action){
        state.products=action.payload;
    },

    setProductDetails(state,action){
        state.productDetails = action.payload;
    },
},

});

export const {setProducts, setProductDetails}=productSlice.actions;
export default productSlice.reducer;