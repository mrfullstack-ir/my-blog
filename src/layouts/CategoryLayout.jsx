import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getTag from "../request/getTag";
import getCategory from "../request/getCategory";
import {Navigation} from "../components/navigation/Navigation";
import {Header} from "../components/header/Header";
import {Posts} from "../components/posts/Posts";

export const CategoryLayout = () => {

    const {slug} = useParams()

    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    useEffect(() => {

        async function runner() {
            const {name, description} = await getCategory({id: slug})
            setCategoryName(name)
            setCategoryDescription(description)
        }

        runner()

    }, [slug]);

    return (
        <>
            {
                categoryName.length > 0 && (
                    <>
                        <Navigation/>
                        <Header title={categoryName} search={false} description={categoryDescription}/>
                        <Posts/>
                    </>
                )
            }
        </>
    )
}