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
                            <Link to={"/category/" + category.id}>
                                <p>
                                    {category.name}
                                </p>
                            </Link>
                        )
                    })
                }
                <Link to="https://mrfullstack.ir/wp-content/uploads/2023/12/karboom-resume-رزومه-1-محمد-سعید-روح-بخش-jdelvj-standard.pdf">
                    <h1>رزومه من</h1>
                </Link>
            </div>
        </>
    )
}