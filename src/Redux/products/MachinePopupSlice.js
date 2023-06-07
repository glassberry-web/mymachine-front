import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMachineImages = createAsyncThunk(
    "popupm/fetchAsyncMachineImages",
    async (pageNo) => {
      const response = await axios.get(
          // "https://mymachinestore.com/api/fetch"
          `https://mymachinestore.com/api/products?page=${pageNo}`
      );
      console.log("machinepop==>", response);
      return response.data;
    }
  );

const initialState = {
//    LatestShow:false,
    MachineShow:false,
    // FilterShow:false,
    // selectedLatestImage:null,
    // selectedFilterImage:null,
    selectedMachineImage:null,
    // selectedCategory:"",
    selectedFilter:"",
    popupMachineImage:[],  
    
 
  };

  const popupmSlice = createSlice({
    name: "popupm",
    initialState,    
     reducers: {
   setMachineShow(state, {payload}){
    console.log("machinepayload=>", payload);
    return{
      ...state, MachineShow:payload[0], selectedMachineImage:payload[1]    
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
  setFilterShow(state, {payload}){
    console.log("payload=>", payload);
   
    return{
      
      ...state,  MachineShow:payload[0], selectedMachineImage:payload[1], selectedFilter:payload[2]  
        

    }
  
  },
  
},
extraReducers: {
    [fetchAsyncMachineImages.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMachineImages.fulfilled]: (state, { payload }) => {
      console.log("popupFetched Successfully!");
      return { ...state, popupMachineImage: payload };
    },
    [fetchAsyncMachineImages.rejected]: () => {
      console.log("Rejected!");
    },
}
});
export const { 
    setMachineShow, setFilterShow 
  } = popupmSlice.actions;
  export const getMachinepopup = (state) => state.popupm.MachineShow;
//   export const getLatestpopup = (state) => state.popup.LatestShow;
  export const getFilterpopup = (state) => state.popupm.FilterShow;
  export const getAllMachinepopup = (state) => state.popupm.popupMachineImage;
  export const getMachineSelectedImage = (state) => state.popupm.selectedMachineImage;
//   export const getLatestSelectedImage = (state) => state.popup.selectedLatestImage;
//   export const getFilterSelectedImage = (state) => state.popup.selectedFilterImage;
//   export const getSelectedCategory = (state) => state.popup.selectedCategory;
//   export const getSelectedFilter = (state) => state.popup.selectedFilter
  export default popupmSlice.reducer;