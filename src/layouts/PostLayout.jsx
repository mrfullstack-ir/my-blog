import {Navigation} from "../components/navigation/Navigation";
import {Content} from "../components/content/Content";
import {useEffect} from "react";

export const PostLayout = ({data}) => {

    return (
        <>
            <Navigation/>
            <Content content={data.content} tags={data.tags} cover={data.cover} title={data.title} date={data.date}/>
        </>
    )
}