import {IUserModel} from "../../../models/IUserModel";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {UserService} from "../../../services/userServices/UserService";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUserModel[];
    user: IUserModel | null,
    isLoaded: boolean
}

const userInitState: UserSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await UserService.getAll()
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string, thunkAPI) => {
        if (id) {
            try {
                const user = await UserService.getById(id)
                return thunkAPI.fulfillWithValue(user)
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null;
    }
)

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, actions: PayloadAction<boolean>) => {
            state.isLoaded = actions.payload
        }
    },
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled,
            (state, actions) => {
                state.users = actions.payload
            })
        .addCase(loadUsers.rejected,
            (state, actions) => {
                console.log('Error with downloading users');
            })
        .addCase(loadUserById.fulfilled,
            (state, action) => {
                state.user = action.payload
            })
        .addCase(loadUserById.rejected,
            (state, action) => {
                console.log('Error with downloading current user');
            })
        .addMatcher(isFulfilled(loadUsers, loadUserById), (state, action) => {
            state.isLoaded = true
        })
        .addMatcher(isRejected(loadUsers, loadUserById), (state, action) => {
            console.log('Error with your service');
        })
})


export const userActions = {
    ...UserSlice.actions,
    loadUsers,
    loadUserById,
}