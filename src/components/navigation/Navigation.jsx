import style from "../../styles/navigation/navigation.module.css"
import {MenuItems} from "./MenuItems";
import {Logo} from "./Logo";

export const Navigation = () => {
    return (
        <>
            <nav className={style.navigationContainer}>
                <Logo/>
                <MenuItems/>
            </nav>
        </>
    )
}