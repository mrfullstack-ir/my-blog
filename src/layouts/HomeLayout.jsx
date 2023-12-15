import {Navigation} from "../components/navigation/Navigation";
import {Header} from "../components/header/Header";
import {Posts} from "../components/posts/Posts";

export const HomeLayout = () => {
    return (
        <>
            <Navigation/>
            <Header title="بلاگ"/>
            <Posts/>
        </>
    )
}