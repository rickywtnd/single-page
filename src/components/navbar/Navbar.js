import "./Navbar.css";
import avatar from "../../assets/noimagee.png";
import {Reorder} from '@material-ui/icons';

const Navbar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i classname="fa fa-bars">
                    <Reorder/>{() => closeSidebar()}
                </i>
            </div>
            <div className="navbar__left">
                </div>
            <div className="navbar__right">
                <a href="#">Hallo,</a>
                <a className="active_link" href="#">Gadjian User</a>
                <a href="#">
                    <img width="50" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>  
     );       
}

    export default Navbar;