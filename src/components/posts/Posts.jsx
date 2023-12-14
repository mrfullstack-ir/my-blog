import style from "../../styles/posts/posts.module.css"
import {PostItem} from "./PostItem";
import {LoaderButton} from "./LoaderButton";

export const Posts = () => {
    return (
        <>
            <div className={style.headerContainer}>
                <div className={style.row}>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                    <div className={style.col}>
                        <PostItem/>
                    </div>
                </div>
                <LoaderButton/>
            </div>
        </>
    )
}