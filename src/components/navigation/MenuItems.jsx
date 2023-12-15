import style from "../../styles/navigation/menuItems.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const MenuItems = () => {

    const {categories} = useSelector(selector => selector.categories)

    return (
        <>
            <div className={style.navigationMenuItems + " fontBold"}>
                {
                    categories.map(category => {
                        return (
                            <Link to={"/category/" + category.slug}>
                                <p>
                                    {category.name}
                                </p>
                            </Link>
                        )
                    })
                }
                <Link to="/">
                    <h1>رزومه من</h1>
                </Link>
            </div>
        </>
    )
}