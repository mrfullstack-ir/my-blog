import {PostLayout} from "../layouts/PostLayout";
import {useEffect, useState} from "react";
import getContent from "../request/getContent";
import {useNavigate, useParams} from "react-router-dom";
import getCategories from "../request/getCategories";
import {updateCategories} from "../services/redux/categories";
import {updatePagination} from "../services/redux/posts";
import {useDispatch} from "react-redux";

export const PostPage = () => {

    const dispatch = useDispatch()
    const {slug} = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function runner() {
            dispatch(updatePagination(1))
            const response = await Promise.allSettled([getContent(slug), getCategories()])
            if (response[0].value) {
                setData(response[0].value)
                dispatch(updateCategories(response[1].value))
            } else {
                navigate("/")
            }
        }

        runner()
    }, []);

    return (
        <>
            {
                data && <PostLayout data={data}/>
            }
        </>
    )
}