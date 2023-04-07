import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/productSlice";
import filterviewReducer from "./products/FilteredProductslice"
import filterReducer from "./products/filterSlice"
import popupReducer from "./products/PopupSlice"
import tabviewReducer  from "./products/TabSlice"


export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filterReducer, 
    filterview: filterviewReducer,
    popup:popupReducer,
    tabview :tabviewReducer
  },
});