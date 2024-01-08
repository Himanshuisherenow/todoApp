import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
//import localStorageMiddleware from "./middleware";


export const store = configureStore(
    {
        reducer :todoSlice, // name is given by you 

        // reducer : {todo : todoSlice}
    },
  
);  


