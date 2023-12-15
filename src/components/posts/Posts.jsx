import style from "../../styles/posts/posts.module.css"
import {PostItem} from "./PostItem";
import {LoaderButton} from "./LoaderButton";
import {useSelector} from "react-redux";

export const Posts = () => {

    const {posts, totalPosts} = useSelector(selector => selector.posts)

    return (
        <>
            <div className={style.headerContainer}>
                {
                    Number(totalPosts) > 0 &&
                    (
                        <div className={style.row}>
                            {
                                posts.map(post => {
                                    return (
                                        <div className={style.col} key={post.slug}>
                                            <PostItem
                                                title={post.title}
                                                category={post.category}
                                                cover={post.cover}
                                                excerpt={post.excerpt}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                {
                    Number(totalPosts) > posts.length && <LoaderButton/>
                }
            </div>
        </>
    )
}