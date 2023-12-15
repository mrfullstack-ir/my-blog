import style from "../../styles/header/titleAndDescription.module.css"

export const TitleAndDescription = ({title, description}) => {
    return (
        <>
            <div className={style.titleAndDescription}>
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>
            </div>
        </>
    )
}