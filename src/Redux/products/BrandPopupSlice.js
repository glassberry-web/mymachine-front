import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncBrandImages = createAsyncThunk(
    "popupb/fetchAsyncBrandImages",
    async ({brand,page,pageSize}) => {
     
      const response = await axios.get(
          // "https://mymachinestore.com/api/fetch"
          `https://mymachinestore.com/api/productbybrand/${brand}`,{ 
            params: {
              page,
              pageSize,
            },})
      console.log("brandpop==>", response);
      return response.data;
    }
  );

const initialState = {
//    LatestShow:false,
    BrandShow:false,
    // FilterShow:false,
    // selectedLatestImage:null,
    // selectedFilterImage:null,
    selectedBrandImage:null,
    // selectedCategory:"",
    selectedFilter:"",
    popupBrandImage:[],  
    
 
  };

  const popupbSlice = createSlice({
    name: "popupb",
    initialState,    
     reducers: {
   setBrandShow(state, {payload}){
    console.log("brandpayload=>", payload);
    return{
      ...state, BrandShow:payload[0], selectedBrandImage:payload[1]    
    }
  
  },
//   setLatestShow(state, {payload}){
//     console.log("payload=>", payload);
//     return{
//       ...state, LatestShow:payload[0], selectedLatestImage:payload[1]    
//     }
  
//   },
//   setCategoryShow(state, {payload}){
//     console.log("payload=>", payload);
//     return{
      
//       ...state, Show:payload[0], selectedImage:payload[1], selectedCategory:payload[2] 

//     }
  
//   },
//   setFilterShow(state, {payload}){
//     console.log("payload=>", payload);
   
//     return{
      
//       ...state,  MachineShow:payload[0], selectedMachineImage:payload[1], selectedFilter:payload[2]  
        

//     }
  
//   },
  
},
extraReducers: {
    [fetchAsyncBrandImages.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncBrandImages.fulfilled]: (state, { payload }) => {
      console.log("popupFetched Successfully!=>", payload);
      return { ...state, popupBrandImage: payload };
    },
    [fetchAsyncBrandImages.rejected]: () => {
      console.log("Rejected!");
    },
}
});
export const { 
    setBrandShow
  } = popupbSlice.actions;
  export const getBrandpopup = (state) => state.popupb.BrandShow;
//   export const getLatestpopup = (state) => state.popup.LatestShow;
  export const getFilterpopup = (state) => state.popupb.FilterShow;
  export const getAllBrandpopup = (state) => state.popupb.popupBrandImage;
  export const getBrandSelectedImage = (state) => state.popupb.selectedBrandImage;
//   export const getLatestSelectedImage = (state) => state.popup.selectedLatestImage;
//   export const getFilterSelectedImage = (state) => state.popup.selectedFilterImage;
//   export const getSelectedCategory = (state) => state.popup.selectedCategory;
//   export const getSelectedFilter = (state) => state.popup.selectedFilter
  export default popupbSlice.reducer;