import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {updatePagination, updatePosts, updateTotalPosts} from "../services/redux/posts";
import getPosts from "../request/getPosts";
import getCategories from "../request/getCategories";
import {updateCategories} from "../services/redux/categories";
import {useNavigate, useParams} from "react-router-dom";
import {TagLayout} from "../layouts/TagLayout";

export const TagPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => {
        async function runner() {
            const data = await Promise.allSettled([getPosts({offset: 1, tag: slug}), getCategories()])
            if (data[0]?.value?.posts?.length > 0) {
                dispatch(updatePagination(1))
                dispatch(updatePosts(data[0].value.posts))
                dispatch(updateTotalPosts(data[0].value.totalPosts))
                dispatch(updateCategories(data[1].value))
            } else {
                navigate("/")
            }
        }

        runner()
    }, []);

    return (
        <>
            <TagLayout/>
        </>
    )
}