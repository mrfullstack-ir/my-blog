import {HomeLayout} from "../layouts/HomeLayout";
import {useEffect} from "react";
import getPosts from "../request/getPosts";
import {updatePosts, updateTotalPosts} from "../services/redux/posts"
import {updateCategories} from "../services/redux/categories"
import {useDispatch} from "react-redux";
import getCategories from "../request/getCategory";

export const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        async function runner() {
            const data = await Promise.allSettled([getPosts(), getCategories()])
            dispatch(updatePosts(data[0].value.posts))
            dispatch(updateTotalPosts(data[0].value.totalPosts))
            dispatch(updateCategories(data[1].value))
        }

        runner()
    }, []);

    return (
        <>
            <HomeLayout/>
        </>
    )
}