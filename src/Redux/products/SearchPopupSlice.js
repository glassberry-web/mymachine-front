import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import debounce from "lodash.debounce";


export const fetchAsyncSearchProducts = createAsyncThunk(
  "search/fetchAsyncSearchProducts",
  async (debouceSearchTerm) => {
    console.log("aatessearch=>", debouceSearchTerm);
    const response = await axios.get(
        `https://mymachinestore.com/api/search/${debouceSearchTerm}`
        // `http://localhost:5000/api/search/${debouceSearchTerm}`
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
  
  SearchShow:false,
  selectedSearchImage:null,
  popupSearchImage:[],
//   searchTerm:"",
//   selectMovieOrShow: {},
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {    
    setSearchShow(state, {payload}){
      console.log("searchpayload=>", payload);
      return{
        ...state, SearchShow:payload[0], selectedSearchImage:payload[1]    
      }
  },
},
  extraReducers: {
    [fetchAsyncSearchProducts.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncSearchProducts.fulfilled]: (state, {payload}) => {
      console.log("Fetched Successfully!");
      console.log("payloaddsearch", 
      payload);
      return { ...state, popupSearchImage: payload };
     
      // state.products = action.payload;
    },
    [fetchAsyncSearchProducts.rejected]: () => {
      console.log("Rejected!");
    },
    
    // [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully!");
    //   return { ...state, selectMovieOrShow: payload };
    // },
  },
});

// export const { removeSelectedMovieOrShow } = productSlice.actions;
export const { setSearchShow }= searchSlice.actions;
export const getSearchpopup = (state) => state.search.SearchShow;
export const getAllSearchpopup = (state) => state.search.popupSearchImage;
export const getSearchSelectedImage = (state) => state.search.selectedSearchImage;
// export const getAllFilters = (state) => state.filter.filter;
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default searchSlice.reducer;

// export const debouncedSearch = debounce((dispatch, searchTerm) => {
//   console.log("dissearch=>", searchTerm);
//   dispatch(fetchAsyncProducts(searchTerm));
//   console.log("aasearch=>", searchTerm);
// }, 500);