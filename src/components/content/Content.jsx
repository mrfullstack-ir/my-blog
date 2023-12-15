import style from "../../styles/content/content.module.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Content = ({date, title, tags, cover, content}) => {

    const [persianDate, setPersianDate] = useState("");

    useEffect(() => {
        const persianDate = new Date(date);
        const year = persianDate.toLocaleDateString('fa-IR', {year: 'numeric'});
        const month = persianDate.toLocaleDateString('fa-IR', {month: 'long'});
        const day = persianDate.toLocaleDateString('fa-IR', {day: 'numeric'});
        setPersianDate(`نوشته شده در ${day} ${month} ${year}`)
    }, []);

    return (
        <>
            <div className={style.contentHeader}>
                <h6>
                    {persianDate}
                </h6>
                <h1>
                    {title}
                </h1>
                <div className={style.tags}>
                    {
                        tags.map(tag => {
                            return (
                                <Link to={"/tag/" + tag.slug}>
                                    <p>
                                        {tag.name}
                                    </p>
                                </Link>
                            )
                        })
                    }
                </div>
                <img
                    className={style.cover}
                    src={cover}
                    alt=""/>
            </div>
            <div className={style.content} dangerouslySetInnerHTML={content}>
            </div>
        </>
    )
}