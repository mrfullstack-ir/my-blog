import {HomeLayout} from "../layouts/HomeLayout";
import {useEffect} from "react";
import getPosts from "../request/getPosts";
import {updatePosts, updateTotalPosts} from "../services/redux/posts"
import {useDispatch} from "react-redux";

export const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        async function runner() {
            const {posts, totalPosts} = await getPosts()
            dispatch(updatePosts(posts))
            dispatch(updateTotalPosts(totalPosts))
        }

        runner()
    }, []);

    return (
        <>
            <HomeLayout/>
        </>
    )
}