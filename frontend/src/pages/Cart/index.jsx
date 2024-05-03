import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteProduct, increaseCount } from '../../redux/slices/productSlice'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import { addToWishlist } from '../../redux/slices/productSlice';
import './cart.scss'
function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.products.cartProduct)
  const wishlist = useSelector((state) => state.products.wishlistProduct);

  return (
    <>
  <section className='cartSection'>
  <h1>Cart</h1>
    <Grid container spacing={2}>
    {
        cart && cart.map((c)=>{
            return <Grid item xs={4} key={uuidv4()}>
                    <div className="cardForCart">
                      <div className="imgContainerForCart">
                        <img src={c.imgUrl} alt="cartproductimage" />

                        <div className="headerForCard">{c.name}</div>
                        <div className="ratingsForProdct">
                          <span  style={{marginRight:"20px"}}>
                            <FaStar /> 5.0
                          </span>
                          <span>
                            <FaHeart /> 29
                          </span>
                        </div>
                        <div className="descriptionForCard">
                          {c.description}
                        </div>
                        <div className="buttonsForCardProduct">
                          <button className="buttonForCart" onClick={()=>{
                            dispatch(addToCart(c))
                          }}>
                            CART
                          </button>
                          <button className="buttonForCart" onClick={()=>{
                            dispatch(addToWishlist(c))
                            console.log("wish", wishlist);
                          }}>
                            Favorite
                          </button>
                          <button onClick={()=>{
                            dispatch(addToCart(c))
                          }}>+</button>
                          <span>count: {c.count}</span>
                          <button onClick={()=>{
                            dispatch(increaseCount(c))
                          }}>-</button>
                          <button onClick={()=>{
                            dispatch(deleteProduct(c._id))
                          }}>delete</button>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  
        })
    }
    </Grid>
  </section>
    </>
  )
}

export default Cart