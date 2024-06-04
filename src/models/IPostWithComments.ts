import {ICommentModel} from "./ICommentModel";
import {IPostModel} from "./IPostModel";

export type IPostWithComments= IPostModel&{comments: ICommentModel[]}