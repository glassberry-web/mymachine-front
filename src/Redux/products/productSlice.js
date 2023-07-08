import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import debounce from "lodash.debounce";


export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (debouceSearchTerm) => {
    console.log("aatessearch=>", debouceSearchTerm);
    const response = await axios.get(
        // `http://194.31.53.145/api/search/${debouceSearchTerm}`
        `http://194.31.53.145/api/search/${debouceSearchTerm}`
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
  products: [], 
  searchTerm:"",
//   selectMovieOrShow: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
    setSearchTerm:(state, action) => {
      console.log("payloaddd", action
      .payload);
      state.searchTerm = action.payload.toLowerCase();
    },
   
  },
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, {payload}) => {
      console.log("Fetched Successfully!");
      console.log("payloaddd222", 
      payload);
      return { ...state, products: payload };
     
      // state.products = action.payload;
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
export const { setSearchTerm }= productSlice.actions;
export const getsearch = (state) => state.products.searchTerm;
export const getAllProducts = (state) => state.products.products;
// export const getAllFilters = (state) => state.filter.filter;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default productSlice.reducer;

// export const debouncedSearch = debounce((dispatch, searchTerm) => {
//   console.log("dissearch=>", searchTerm);
//   dispatch(fetchAsyncProducts(searchTerm));
//   console.log("aasearch=>", searchTerm);
// }, 500);