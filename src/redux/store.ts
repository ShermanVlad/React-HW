import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {UserSlice} from "./slices/userSlice/userSlice";

export const store=configureStore({
    reducer:{
        userSlice: UserSlice.reducer,
        // postSlice: postSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()