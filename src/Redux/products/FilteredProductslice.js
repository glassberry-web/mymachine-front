import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchAsyncFilter = createAsyncThunk(
//     "filter/fetchAsyncFilter",
//     async () => {
//       const response = await axios.get(
//         "http://194.31.53.145:5000/fetch"
//       );
//       console.log("filter==>", response
//     );
    
//       return response.data;
//     }
//   );

  const  initialState = {
   
    grid_view:true,
  
  };

  const filterSlice = createSlice({
    name: "filterview",
    initialState,
    // initialState: {
    //     filteredProducts:
    //       JSON.parse(sessionStorage.getItem("filteredData"))
    //     },
          
        // singleProduct:
        //   JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
        // error: false,
      
    
    // extraReducers: {
      
    //   [fetchAsyncFilter.fulfilled]: (state, { payload }) => {
    //     console.log("Fetched Successfully!" , state, payload);
    //     return { ...state, filters: payload,
    //       console.log(state);
    //     };
        
    //   },
     
    // },
    reducers: {
        filterProducts(state, {payload}) {
          state.filters = payload;
          console.log("reducerdata==>", state.filters); 
          // try {
           
          //   const filter = state.filters.filter(
          //     (fil) => fil.category === payload
          //   );
          //   console.log("hars", filter);
          //   state.filteredProducts = filter;
          //   state.error = false;
          //   const savedState = JSON.stringify(filter);
          //   sessionStorage.setItem("filteredData", savedState);
          // } catch (err) {
          //   return err;
          // }
        },
        setGrid_view(state, {payload}){
          return{
            ...state, grid_view:payload
          }
        },

        filterUniqueProducts(state, action){
           console.log("unique", current(state), action);
            try {
           
            const filter = state.filters.filter(
              (fil) => fil.category === action.payload
            );
            console.log("reducerFilterata==>", filter);
            state.filteredProducts = filter;
            state.error = false;
            const savedState = JSON.stringify(filter);
            sessionStorage.setItem("filteredData", savedState);
          } catch (err) {
            return err;
          }
    },
  }

  });
  
  // export const { removeSelectedMovieOrShow } = productSlice.actions;
  export const {
    filterProducts, filterUniqueProducts, setGrid_view    
  } = filterSlice.actions;
  // export const getAllProducts = (state) => state.products.products;
  export const getgridView = (state) => state.filterview.grid_view;
  export const getAllFilters = (state) => state.filters.filters;
  // export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
  export default filterSlice.reducer;