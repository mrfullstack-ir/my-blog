import style from "../../styles/posts/postItem.module.css"
import {Link} from "react-router-dom";

export const PostItem = ({cover, category, title, excerpt, slug}) => {
    return (
        <>
            <Link to={"/post/" + slug}>
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
            </Link>
        </>
    )
}