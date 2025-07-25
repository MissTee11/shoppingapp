import React, {useEffect} from "react";
import axios from 'axios';
import './Pages.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import {setProducts} from '../features/ProductReducer';
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addToCart } from "../features/CartReducer";


const Products= () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products);

const fetchProducts= async () =>{
    const response = await axios.get('https://dummyjson.com/products').catch((err) =>{
        console.log("Error",err);
    });
    dispatch(setProducts(response.data.products||[]));
};

    useEffect(()=>{
        fetchProducts();
    },[])

    const handleAddToCart= (product) => {
        dispatch(addToCart(product));
    }

    const groupedProducts = products.reduce((groups, product) => {
        const category = product.category || 'Uncategorized';
        if (!groups[category]) groups[category] = [];
        groups[category].push(product);
        return groups;
    }, {});


  return (
  <>
    <Navbar />
    <div>
      <h2>Our Products</h2>
      <div className="ProductsDisplay">
        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div key={category} className="CategoryGroup">
            <h3>{category.toUpperCase()}</h3>
            <div className="CategoryItems">
              {categoryProducts.map(product => (
                <div key={product.id} className="Card">
                  <h4>{product.title}</h4>
                  <img src={product.thumbnail} className="products" />
                  <p>Price: ${product.price}</p>
                  <p>Rating: {product.rating}</p>
                  <div className="Buttons">
                    <Link to={`/ProductDets/${product.id}`}>
                      <button className="Button1">See more</button>
                    </Link>
                    <button className="Button2" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

}
export default Products;