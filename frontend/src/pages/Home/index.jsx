import React, { useEffect, useState } from "react";
import "./../Home/home.scss";
import Grid from "@mui/material/Grid";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, fetchProducts } from "../../redux/slices/productSlice";
import { v4 as uuidv4 } from "uuid";
import { IoCloudDone } from "react-icons/io5";

import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'
function Home() {
  let {id}= useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.products.wishlistProduct);
  const cart = useSelector((state) => state.products.cartProduct);

  const goDetail = (id)=>{
    navigate(`/detail/${id}`)
  }

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  const [products, setProducts] = useState([])
useEffect(()=>{
  
axios("http://localhost:5000/products").then((res)=>{
  setProducts(res.data)
})
},[])


console.log(products);

  return (
    <>
      <section>
        <div className="heroSectionMain">
          <div className="heroContent">
            <h1 className="headerTextForHero">Shop With Us</h1>
            <h6 className="headerSixForHero">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam <br />
              assumenda ea quo cupiditate facere deleniti fuga officia.
            </h6>
            <div className="buttonsForHeroSection">
              <button className="heroSectionBtn1">SHOP NOW</button>
              <button className="heroSectionBtn2">CLUB MEMBERSHIP</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="productSectionForData">
          <p className="littleHeaderForProducts">POPULAR PRODUCTS</p>
          <h1 className="headerForProducts">Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
            <br />
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut{" "}
            <br />
            consequatur laboriosam ipsam.
          </p>

        <div className="productsCards">

        <Grid container spacing={6}>
            {
            products &&
              products.map((product) => {
                return (
                  <Grid item xs={4} key={uuidv4()} >
                    <div className="card"    >
                      <div className="imgContainer">
                        <img src={product.imgUrl} alt="" />

                        <div className="headerForCard">{product.name}</div>
                        <div className="ratingsForProdct">
                          <span>
                            <FaStar /> 5.0
                          </span>
                          <span>
                            <FaHeart /> 29
                          </span>
                        </div>
                        <div className="descriptionForCard">
                          {product.description}
                        </div>
                        <div className="buttonsForCardProduct">
                          <button className="firstBtnForCardProduct" onClick={()=>{
                            dispatch(addToCart(product))
                            console.log("cart", cart);
                          }}>
                            CART
                          </button>
                          <button className="secondBtnForCardProduct" onClick={()=>{
                            dispatch(addToWishlist(product))
                            console.log("wish", wishlist);
                          }}>
                            Favorite
                          </button>
                          <button className="firstBtnForCardProduct" onClick={()=>{
                          goDetail(product._id)
                            console.log("cart", cart);
                          }}>
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
               
          </Grid>
        </div>
        </div>
      </section>


      <section>
        <div className="aboutSection">
          <div className="imageDivForABOUT">
            <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
            <div className="trustedDivForAboutSection">
            <h1>Trusted Merchant</h1>
            <p >FOR 50 YEARS </p>
          </div>
          </div>

         <div className="rightAboutSection">
          <span>Merhcant Company</span>
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet, <br />
          consectetur adipisicing elit. Qui <br />
          fuga ipsa, repellat blanditiis nihil, <br />
          consectetur. Consequuntur eum <br />
           inventore, rem maxime, nisi <br />
           excepturi ipsam libero ratione <br />
           adipisci alias eius vero vel!</p>
         </div>
        </div>
      </section>


      <section>
        <div className="productSectionForData">
          <p className="littleHeaderForProducts">TEAM</p>
          <h1 className="headerForProducts">Leadership</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
            <br />
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut{" "}
            <br />
            consequatur laboriosam ipsam.
          </p>

        <div className="productsCards">

        <Grid container spacing={2}>
            
           
                  <Grid item xs={4} key={uuidv4()} >
                    <div className="teamCard"    >
                      <div className="imgContainer">
                        <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />

                        <div className="teamHeader">John Rooster</div>
                        <p className="teamName" >CO-FOUNDER, PRESIDENT</p>
                        
                        <div className="descriptionForTeam">
                        Nisi at consequatur unde molestiae quidem <br />
                         provident voluptatum deleniti quo iste error eos <br /> 
                         est praesentium distinctio cupiditate tempore <br />
                          suscipit inventore deserunt tenetur.
                        </div>
                       
                      </div>
                    </div>
                  </Grid>
               
                  <Grid item xs={4} key={uuidv4()} >
                    <div className="teamCard"    >
                      <div className="imgContainer">
                        <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" alt="" />

                        <div className="teamHeader">John Rooster</div>
                        <p className="teamName" >CO-FOUNDER, PRESIDENT</p>
                        
                        <div className="descriptionForTeam">
                        Nisi at consequatur unde molestiae quidem <br />
                         provident voluptatum deleniti quo iste error eos <br /> 
                         est praesentium distinctio cupiditate tempore <br />
                          suscipit inventore deserunt tenetur.
                        </div>
                       
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4} key={uuidv4()} >
                    <div className="card"    >
                      <div className="imgContainer">
                        <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp" alt="" />


                        <div className="teamHeader">John Rooster</div>
                        <p className="teamName" >CO-FOUNDER, PRESIDENT</p>
                        
                        <div className="descriptionForTeam">
                        Nisi at consequatur unde molestiae quidem <br />
                         provident voluptatum deleniti quo iste error eos <br /> 
                         est praesentium distinctio cupiditate tempore <br />
                          suscipit inventore deserunt tenetur.
                        </div>
                       
                      </div>
                    </div>
                  </Grid>   
               
          </Grid>
        </div>
        </div>
      </section>


      <section>
        <div className="serviceSection">
          <p>OUR SERVICES</p>
          <h1>We Offer Services</h1>


          <div className="serviceSectionMain">
          <Grid container spacing={2}>
          <Grid item xs={4}>
          <div className="serviceCards">
            <div className="icon">
            <IoCloudDone />

            </div> 
            <div className="textService">
            <h4>Buisness Consulting</h4>
           
            <p>Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />
             Perferendis quis molestiae vitae <br />
             eligendi at.</p>
             <Link>Learn More</Link>
            </div>
          </div>
          </Grid>
          <Grid item xs={4}>
          <div className="serviceCards">
            <div className="icon">
            <IoCloudDone />

            </div> 
            <div className="textService">
            <h4>Buisness Consulting</h4>
           
            <p>Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />
             Perferendis quis molestiae vitae <br />
             eligendi at.</p>
             <Link>Learn More</Link>
            </div>
          </div>
          </Grid>
          <Grid item xs={4}>
          <div className="serviceCards">
            <div className="icon">
            <IoCloudDone />

            </div> 
            <div className="textService">
            <h4>Buisness Consulting</h4>
           
            <p>Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />
             Perferendis quis molestiae vitae <br />
             eligendi at.</p>
             <Link>Learn More</Link>
            </div>
          </div>
          </Grid>
          <Grid item xs={4}>
          <div className="serviceCards">
            <div className="icon">
            <IoCloudDone />

            </div> 
            <div className="textService">
            <h4>Buisness Consulting</h4>
           
            <p>Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />
             Perferendis quis molestiae vitae <br />
             eligendi at.</p>
             <Link>Learn More</Link>
            </div>
          </div>
          </Grid>
          <Grid item xs={4}>
          <div className="serviceCards">
            <div className="icon">
            <IoCloudDone />

            </div> 
            <div className="textService">
            <h4>Buisness Consulting</h4>
           
            <p>Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />
             Perferendis quis molestiae vitae <br />
             eligendi at.</p>
             <Link>Learn More</Link>
            </div>
          </div>
          </Grid>
          <Grid item xs={4}>
          <div className="serviceCards">
            <div className="icon">
            <IoCloudDone />

            </div> 
            <div className="textService">
            <h4>Buisness Consulting</h4>
           
            <p>Lorem ipsum dolor sit amet <br />
             consectetur adipisicing elit. <br />
             Perferendis quis molestiae vitae <br />
             eligendi at.</p>
             <Link>Learn More</Link>
            </div>
          </div>
          </Grid>
          
          </Grid>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
