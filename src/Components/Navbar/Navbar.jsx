import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./Navbar.css";
const Navbar = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={"navbar " + theme}>
            <div> HIMANSHU </div>
            <div>
                <div> About </div>
                <div> Experience </div>
                <div> Education </div>
                <div> Projects </div>
                <div> Contacts </div>
            </div>
        </div>
    )
};

export default Navbar;

