import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncImages = createAsyncThunk(
    "popup/fetchAsyncImages",
    async () => {
      const response = await axios.get(
          "https://api.mymachinestore.in/fetch"
          // "https://api.mymachinestore.in/api/fetch"
      );
      console.log("popuppro==>", response
      );
      return response.data;
    }
  );

const initialState = {
   LatestShow:false,
    Show:false,
    FilterShow:false,
    selectedLatestImage:null,
    selectedFilterImage:null,
    selectedImage:null,
    selectedCategory:"",
    selectedFilter:"",
    popupImage:[],  
    
 
  };

  const popupSlice = createSlice({
    name: "popup",
    initialState,    
     reducers: {
   setShow(state, {payload}){
    console.log("payload=>", payload);
    return{
      ...state, Show:payload[0], selectedImage:payload[1]    
    }
  
  },
  setLatestShow(state, {payload}){
    console.log("payload=>", payload);
    return{
      ...state, LatestShow:payload[0], selectedLatestImage:payload[1]    
    }
  
  },
  setCategoryShow(state, {payload}){
    console.log("payload=>", payload);
    return{
      
      ...state, Show:payload[0], selectedImage:payload[1], selectedCategory:payload[2] 

    }
  
  },
  setFilterShow(state, {payload}){
    console.log("payload=>", payload);
   
    return{
      
      ...state,  Show:payload[0], selectedImage:payload[1], selectedFilter:payload[2]     

    }
  
  },
  
},
extraReducers: {
    [fetchAsyncImages.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncImages.fulfilled]: (state, { payload }) => {
      console.log("popupFetched Successfully!");
      return { ...state, popupImage: payload };
    },
    [fetchAsyncImages.rejected]: () => {
      console.log("Rejected!");
    },
}
});
export const { 
    setShow, setLatestShow, setCategoryShow, setFilterShow   
  } = popupSlice.actions;
  export const getpopup = (state) => state.popup.Show;
  export const getLatestpopup = (state) => state.popup.LatestShow;
  export const getFilterpopup = (state) => state.popup.FilterShow;
  export const getAllpopup = (state) => state.popup.popupImage;
  export const getSelectedImage = (state) => state.popup.selectedImage;
  export const getLatestSelectedImage = (state) => state.popup.selectedLatestImage;
  export const getFilterSelectedImage = (state) => state.popup.selectedFilterImage;
  export const getSelectedCategory = (state) => state.popup.selectedCategory;
  export const getSelectedFilter = (state) => state.popup.selectedFilter
  export default popupSlice.reducer;