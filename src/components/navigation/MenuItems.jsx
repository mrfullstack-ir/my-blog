import style from "../../styles/navigation/menuItems.module.css";
import {Link} from "react-router-dom";

export const MenuItems = () => {
    return (
        <>
            <div className={style.navigationMenuItems + " fontBold"}>
                <Link to="/">
                    <p>فرانت اند</p>
                </Link>
                <Link to="/">
                    <p>فرانت اند</p>
                </Link>
                <Link to="/">
                    <p>فرانت اند</p>
                </Link>
                <Link to="/">
                    <h1>رزومه من</h1>
                </Link>
            </div>
        </>
    )
}