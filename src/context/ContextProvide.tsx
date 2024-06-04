import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavoriteUser: (user: IUserModel)=>void
    },
    postStore: {
        allPosts: IPostModel[]
    },
    commentStore:{
        allComments: ICommentModel[]
    }
}

const defaultValue = {
    userStore: {
        allUsers: [],
        setFavoriteUser: ()=>{}
    },
    postStore: {
        allPosts: []
    },
    commentStore:{
        allComments: []
    }
}

export const Context = createContext<StoreType>(defaultValue);
export const useContextProvider = (): StoreType => useContext(Context)