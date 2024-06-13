import {IPostModel} from "../../../models/IPostModel";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {PostService} from "../../../services/postService/PostService";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPostModel[],
    post: IPostModel | null,
    isLoaded: boolean
}

const postInitState: PostSliceType = {
    posts: [],
    post: null,
    isLoaded: false
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await PostService.getAll();
            thunkAPI.dispatch(postsActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const loadPostById = createAsyncThunk(
    'postSlice/loadPostById',
    async (id: string, thunkAPI) => {
        try {
            const post = await PostService.getById(id);
            return thunkAPI.fulfillWithValue(post);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
        return null;
    }
)

export const PostSlice = createSlice({
    name: 'PostSlice',
    initialState: postInitState,
    reducers: {
        changeLoadState: (state, actions: PayloadAction<boolean>)=>{
            state.isLoaded = actions.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
        .addCase(loadPosts.rejected, (state, action) => {
            console.log('Error with downloading posts');
        })
        .addCase(loadPostById.fulfilled, (state, action)=>{
            state.post = action.payload;
        })
        .addCase(loadPostById.rejected, (state, action)=>{
            console.log('Error with downloading current post');
        })
        .addMatcher(isFulfilled(loadPostById,loadPosts), (state, action)=>{
            state.isLoaded = true;
        })
        .addMatcher(isRejected(loadPosts, loadPostById), (state, action)=>{
            console.log('Error with your service');
        })
})

export const postsActions={
    ...PostSlice.actions,
    loadPostById,
    loadPosts
}