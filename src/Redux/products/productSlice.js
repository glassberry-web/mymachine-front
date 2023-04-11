import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (debouceSearchTerm) => {
    const response = await axios.get(
        `https://my-machine-store-restapi.onrender.com/search/${debouceSearchTerm}`
    );
    console.log("slice==>", response
    );
    return response.data;
  }
);



// export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
//   "movies/fetchAsyncMovieOrShowDetail",
//   async (id) => {
//     const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
//     return response.data;
//   }
// );

const initialState = {
  products: {},
//   selectMovieOrShow: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  // reducers: {
  //   removeSelectedMovieOrShow: (state) => {
  //     state.selectMovieOrShow = {};
  //   },
  // },
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, products: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      console.log("Rejected!");
    },
    
    // [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, selectMovieOrShow: payload };
    // },
  },
});

// export const { removeSelectedMovieOrShow } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
// export const getAllFilters = (state) => state.filter.filter;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default productSlice.reducer;