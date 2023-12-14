import style from "../../styles/header/search.module.css"

export const Search = () => {
    return (
        <>
            <div className={style.searchContainer}>
                <input type="text" placeholder="جست و جوی مقاله"/>
            </div>
        </>
    )
}