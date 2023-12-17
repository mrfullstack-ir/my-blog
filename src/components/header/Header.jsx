import {TitleAndDescription} from "./TitleAndDescription";
import style from "../../styles/header/header.module.css"
import {Search} from "./Search";

export const Header = ({title, description, search = true}) => {
    return (
        <>
            <div className={style.headerContainer}>
                <TitleAndDescription title={title} description={description}/>
                {search && <Search/>}
            </div>
        </>
    )
}