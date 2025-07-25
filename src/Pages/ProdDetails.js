import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductDetails } from "../features/ProductReducer";
import { addToCart } from "../features/CartReducer";
import { Link } from 'react-router-dom';


const ProductDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state)=> state.product.productDetails);

   const fetchProductDetails = async () =>{
    try{
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        dispatch(setProductDetails(response.data));
    } catch(err){
    console.log("Error fetching details: ",err);
   }
};

useEffect(()=>{
    fetchProductDetails();
},[id])

const handleAddToCart= (product) => {
    dispatch(addToCart(product));
}


    return( 
        <div>
        <Navbar/>
        <div className="Details">
        <div className="Left-Section">
        <p className="productName">{product.category}~{product.title}</p>
        <img src={product.thumbnail} className="detailsImg"/>
        </div>

        <div className="Right-Section">
        <h3>{product.title}</h3>
        <h5><strong>CATEGORY: </strong>{product.category}</h5>
        <h5><strong>BRAND: </strong>{product.brand}</h5>

        <p><strong>Description: </strong>{product.description}</p>
        <p><strong>Rating: </strong>{product.rating}</p>
        <p><strong>Price: </strong>${product.price}</p>

        <button className="Button3" onClick={() =>handleAddToCart(product)}>Add To Cart</button>
        <Link to="/Products">
        <button className="Button3">Continue Shopping</button></Link>
        

        </div>
        

        </div>

        <div className="ReviewSection">
           <h3>See what others say!</h3>
           {product.reviews && product.reviews.length > 0 ? (
                   product.reviews.map((review, index) => (
                       <div key={index} className="ReviewSubSection">
                           <p><strong>Name:</strong> {review.reviewerName}</p>
                           <p><strong>Rating:</strong> {review.rating}</p>
                           <p><strong>Comment:</strong> {review.comment}</p>
                           <p><strong>Date:</strong> {review.date}</p>
                       </div>
                   ))
                ) : (
                    <p>No reviews available.</p>
                  )} 
                
        </div> 
        
    
       <Footer/>
       </div>
    );  
};
export default ProductDetails;