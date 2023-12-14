import {TitleAndDescription} from "./TitleAndDescription";
import style from "../../styles/header/header.module.css"
import {Search} from "./Search";

export const Header = () => {
    return (
        <>
            <div className={style.headerContainer}>
                <TitleAndDescription/>
                <Search/>
            </div>
        </>
    )
}