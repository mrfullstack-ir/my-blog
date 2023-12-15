import {TitleAndDescription} from "./TitleAndDescription";
import style from "../../styles/header/header.module.css"
import {Search} from "./Search";

export const Header = ({title, description}) => {
    return (
        <>
            <div className={style.headerContainer}>
                <TitleAndDescription title={title} description={description}/>
                <Search/>
            </div>
        </>
    )
}