import logo from "../../assets/images/navigation/logo.png";
import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <>
            <Link to={"/"}>
                <div>
                    <img src={logo} alt=""/>
                </div>
            </Link>
        </>
    )
}