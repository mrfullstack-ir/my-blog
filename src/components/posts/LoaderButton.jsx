import style from "../../styles/posts/loaderButton.module.css"
import {useDispatch, useSelector} from "react-redux";
import getPosts from "../../request/getPosts";
import {updatePagination, updatePosts} from "../../services/redux/posts"
import {useLocation, useParams} from "react-router-dom";

export const LoaderButton = () => {

    const {posts, totalPosts, pagination} = useSelector(selector => selector.posts)
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const {slug} = useParams()

    async function getPostsFunction() {
        const newPagination = pagination + 1
        dispatch(updatePagination(newPagination))
        let data = []
        if (pathname.startsWith("category")) {
            const {posts: newPosts} = await getPosts({offset: pagination * 10, category: slug})
            data = [...posts, ...newPosts]
        } else if (pathname.startsWith("tag")) {
            const {posts: newPosts} = await getPosts({offset: pagination * 10, tag: slug})
            data = [...posts, ...newPosts]
        } else {
            const {posts: newPosts} = await getPosts({offset: pagination * 10})
            data = [...posts, ...newPosts]
        }
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