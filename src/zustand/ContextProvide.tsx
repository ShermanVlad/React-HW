import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userSlice: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void

        favoriteUser: IUserModel | null;
        setFavoriteUser: (user: IUserModel) => void;
    },
    postSlice: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void

    },
    commentSlice: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void
    }
}

export const useZustand = create<StoreType>()((set) => {
    return {
        userSlice: {
            allUsers: [],
            loadUsers: (users: IUserModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        userSlice: {
                            ...state.userSlice,
                            allUsers: users
                        }
                    }
                })
            },
            favoriteUser: null,
            setFavoriteUser: (user: IUserModel) => {
                return set(state => {
                    return {
                        ...state,
                        userSlice: {
                            ...state.userSlice,
                            favoriteUser: user
                        }
                    }
                })
            }
        },
        postSlice: {
            allPosts: [],
            loadPosts: (posts: IPostModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        postSlice: {
                            ...state.postSlice,
                            allPosts: posts
                        }
                    }
                })
            }
        },
        commentSlice: {
            allComments: [],
            loadComments: (comments: ICommentModel[]) => {
                return set((state: StoreType) => {
                    return {
                        ...state,
                        commentSlice: {
                            ...state.commentSlice,
                            allComments: comments
                        }
                    }
                })
            }
        }
    }
})