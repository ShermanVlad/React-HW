import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {UserSlice} from "./slices/userSlice/userSlice";
import {PostSlice} from "./slices/userSlice/postSlice";

export const store= configureStore({
    reducer:{
        userSlice: UserSlice.reducer,
        postSlice: PostSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();