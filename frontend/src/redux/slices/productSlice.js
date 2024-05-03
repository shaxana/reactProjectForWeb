import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);


// export const deleteProducts = createAsyncThunk(
//   "products/deleteProducts/id",
//   async () => {
//     const response = await axios.delete(`http://localhost:5000/products/` + id);
//     return response.data;
//   }
// );

const initialState = {
  wishlistProduct: JSON.parse(localStorage.getItem("wishlist")) || [],
  cartProduct: JSON.parse(localStorage.getItem("cart")) || [],
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      let { _id, name, price, description, rating , imgUrl} = action.payload;
      let wishlistProductIndex = state.wishlistProduct.findIndex(
        (w) => w._id === _id
      );
      if (wishlistProductIndex !== -1) {
        state.wishlistProduct.splice(wishlistProductIndex, 1);
      } else {
        state.wishlistProduct = [
          ...state.wishlistProduct,
          { _id, name, price, description, rating , imgUrl},
        ];
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistProduct));
    },
    addToCart: (state, action) => {
      let { _id, name, price, description, rating , imgUrl} = action.payload;
      let cartProductIndex = state.cartProduct.findIndex((c) => c._id === _id);
      if (cartProductIndex !== -1) {
        state.cartProduct[cartProductIndex].count += 1;
      } else {
        state.cartProduct = [
          ...state.cartProduct,
          { _id, name, price, description, rating,imgUrl, count: 1 },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    increaseCount: (state, action) => {
      let { _id, name, price, description, rating,imgUrl } = action.payload;
      let cartProductIndex = state.cartProduct.findIndex((c) => c._id === _id);
      if (cartProductIndex !== -1) {
        if (state.cartProduct[cartProductIndex].count > 1) {
          state.cartProduct[cartProductIndex].count -= 1;
        } 
      }
      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    deleteProduct: (state,action)=>{
        let { _id, name, price, description, rating , imgUrl}  = action.payload
        let cartProductIndex = state.cartProduct.findIndex((c) => c._id === _id);
            let deleted = state.cartProduct.find((c) => c._id !== _id);
            state.cartProduct.splice(deleted[cartProductIndex], 1)
        
    }
    ,
    extraReducers(builder) {
      builder
        .addCase(fetchProducts.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
    // extraReducers(builder) {
    //   builder
    //     .addCase(deleteProduct.pending, (state, action) => {
    //       state.status = "loading";
    //     })
    //     .addCase(deleteProduct.fulfilled, (state, action) => {
    //       state.status = "succeeded";
    //       state.products = action.payload;
    //     })
    //     .addCase(deleteProduct.rejected, (state, action) => {
    //       state.status = "failed";
    //       state.error = action.error.message;
    //     });
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, addToCart, increaseCount, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
