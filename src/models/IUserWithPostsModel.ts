import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type IUserWithPostsModel = IUserModel & {
    posts: IPostModel[]
}