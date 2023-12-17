import {Navigation} from "../components/navigation/Navigation";
import {Content} from "../components/content/Content";
import {Header} from "../components/header/Header";
import {Posts} from "../components/posts/Posts";
import {useEffect, useState} from "react";
import getTag from "../request/getTag";
import {useParams} from "react-router-dom";

export const TagLayout = ({title}) => {

    const {slug} = useParams()

    const [tagName, setTagName] = useState("");
    const [tagDescription, setTagDescription] = useState("");

    useEffect(() => {

        async function runner() {
            const {name, description} = await getTag({id: slug})
            setTagName(name)
            setTagDescription(description)
        }

        runner()

    }, []);

    return (
        <>
            {
                tagName.length > 0 && (
                    <>
                        <Navigation/>
                        <Header title={tagName} search={false} description={tagDescription}/>
                        <Posts/>
                    </>
                )
            }
        </>
    )
}