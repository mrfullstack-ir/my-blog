import {PostLayout} from "../layouts/PostLayout";
import {useEffect, useState} from "react";
import getContent from "../request/getContent";
import {useNavigate, useParams} from "react-router-dom";

export const PostPage = () => {

    const {slug} = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function runner() {
            const content = await getContent(slug)
            if (content) {
                setData(content)
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