import { configureStore } from "@reduxjs/toolkit";
import resturentSlice from "./Slice/resturentSlice";

const MealMapper = configureStore({
    reducer:{
        resturentReducer:resturentSlice
    }
})

export default MealMapper