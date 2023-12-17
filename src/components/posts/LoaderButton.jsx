import style from "../../styles/posts/loaderButton.module.css"
import {useDispatch, useSelector} from "react-redux";
import getPosts from "../../request/getPosts";
import {updatePagination, updatePosts} from "../../services/redux/posts"

export const LoaderButton = () => {

    const {posts, totalPosts, pagination} = useSelector(selector => selector.posts)
    const dispatch = useDispatch()

    async function getPostsFunction() {
        const newPagination = pagination + 1
        dispatch(updatePagination(newPagination))
        const {posts: newPosts} = await getPosts({offset: pagination * 10})
        const data = [...posts, ...newPosts]
        dispatch(updatePosts(data))
    }

    return (
        <>
            <div className={style.loaderContainer}>
                <button onClick={() => getPostsFunction()}>
                    بارگذاری بیشتر
                </button>
            </div>
        </>
    )
}