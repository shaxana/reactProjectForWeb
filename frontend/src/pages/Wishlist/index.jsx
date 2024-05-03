import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import { addToWishlist } from '../../redux/slices/productSlice';
import './wishlist.scss';

function Wishlist() {
    const wishlist = useSelector((state)=>state.products.wishlistProduct)
    const dispatch = useDispatch()
  return (
    <>
    <h1>Wishlist</h1>
    <Grid container spacing={2}>
    {
        wishlist && wishlist.map((w)=>{
            return <Grid item xs={4} key={uuidv4()}>
                    <div  className="card">
                      <div className="imgContainer">
                        <img src={w.imgUrl} alt=""  />

                        <div className="headerForCard">{w.name}</div>
                        <div className="ratingsForProdct">
                          <span>
                            <FaStar /> 5.0
                          </span>
                          <span>
                            <FaHeart /> 29
                          </span>
                        </div>
                        <div className="descriptionForCard">
                          {w.description}
                        </div>
                        <div className="buttonsForCardProduct">
                          <button className="firstBtnForCardProduct">
                            CART
                          </button>
                          <button className="secondBtnForCardProduct" onClick={()=>{
                            dispatch(addToWishlist(w))
                            console.log("wish", wishlist);
                          }}>
                            Favorite
                          </button>
                        </div>
                      </div>
                    </div>
                  </Grid>
        })
    }
    </Grid>
    </>
  ) 
}

export default Wishlist