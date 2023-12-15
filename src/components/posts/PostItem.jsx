import style from "../../styles/posts/postItem.module.css"

export const PostItem = ({cover, category, title, excerpt}) => {
    return (
        <>
            <div className={style.postItemContainer}>
                <img
                    src={cover}
                    alt=""/>
                <h6>
                    {category}
                </h6>
                <h1>
                    {title}
                </h1>
                <div dangerouslySetInnerHTML={excerpt}>

                </div>
            </div>
        </>
    )
}