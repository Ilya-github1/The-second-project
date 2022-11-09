import { configureStore } from "@reduxjs/toolkit";
import Calc from "../reducers/ReducerCalc";
const store = configureStore({
    reducer: {
        Calc,
    }

})
export default store;