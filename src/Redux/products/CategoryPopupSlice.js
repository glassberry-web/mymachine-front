import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncCategoryImages = createAsyncThunk(
    "popupc/fetchAsyncCategoryImages",
    async ({category,page,pageSize}) => {
     
      const response = await axios.get(
          // "http://194.31.53.145/api/fetch"
          `http://194.31.53.145/api/productbycategory/${category}`,{ 
            params: {
              page,
              pageSize,
            },})
      console.log("categorypop==>", response);
      return response.data;
    }
  );

const initialState = {
//    LatestShow:false,
    CategoryShow:false,
    // FilterShow:false,
    // selectedLatestImage:null,
    // selectedFilterImage:null,
    selectedCategoryImage:null,
    // selectedCategory:"",
    selectedFilter:"",
    popupCategoryImage:[],  
    
 
  };

  const popupcSlice = createSlice({
    name: "popupc",
    initialState,    
     reducers: {
   setCategoryShow(state, {payload}){
    console.log("categorypayload=>", payload);
    return{
      ...state, CategoryShow:payload[0], selectedCategoryImage:payload[1]    
    }
  
  },  
},
extraReducers: {
    [fetchAsyncCategoryImages.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncCategoryImages.fulfilled]: (state, { payload }) => {
      console.log("popupFetched Successfully!=>", payload);
      return { ...state, popupCategoryImage: payload };
    },
    [fetchAsyncCategoryImages.rejected]: () => {
      console.log("Rejected!");
    },
}
});
export const { 
    setCategoryShow
  } = popupcSlice.actions;
  export const getCategorypopup = (state) => state.popupc.CategoryShow;
//   export const getLatestpopup = (state) => state.popup.LatestShow;
  export const getFilterpopup = (state) => state.popupc.FilterShow;
  export const getAllCategorypopup = (state) => state.popupc.popupCategoryImage;
  export const getCategorySelectedImage = (state) => state.popupc.selectedCategoryImage;
//   export const getLatestSelectedImage = (state) => state.popup.selectedLatestImage;
//   export const getFilterSelectedImage = (state) => state.popup.selectedFilterImage;
//   export const getSelectedCategory = (state) => state.popup.selectedCategory;
//   export const getSelectedFilter = (state) => state.popup.selectedFilter
  export default popupcSlice.reducer;