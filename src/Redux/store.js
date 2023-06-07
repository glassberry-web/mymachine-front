import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import filterviewReducer from "./products/FilteredProductslice"
import filterReducer from "./products/filterSlice"
import popupReducer from "./products/PopupSlice"
import tabviewReducer  from "./products/TabSlice"
import popupmReducer from "./products/MachinePopupSlice";
import popupbReducer from "./products/BrandPopupSlice.js"
import popupcReducer from "./products/CategoryPopupSlice"
import searchReducer from "./products/SearchPopupSlice";


export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filterReducer, 
    filterview: filterviewReducer,
    popup:popupReducer,
    popupm:popupmReducer,
    popupb:popupbReducer,
    popupc:popupcReducer,
    tabview :tabviewReducer,
    search:searchReducer,
  },
});