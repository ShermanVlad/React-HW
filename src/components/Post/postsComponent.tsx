import React
    , {
    FC,
    useEffect,
    useState
} from 'react';
import {
    IPostModel
} from "../../models/Post/postModel";
import {
    getPostsByUserId
} from "../../servises/dummy.api.service";
import PostComponent
    from "./postComponent";
import styles from "./post.module.css"

interface IProps {
    userId: number
}

const PostsComponent: FC<IProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        getPostsByUserId(userId).then((posts) => setPosts(posts.data.posts))
    }, [userId]);


    return (
        <div  className={styles.PostsDiv}>
            {
                posts.map((post => (
                    <PostComponent
                        key={post.id}
                        post={post}/>)))
            }
        </div>
    );
};

export default PostsComponent;