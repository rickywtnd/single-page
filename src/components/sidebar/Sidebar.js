import "./Sidebar.css";
import logo from "../../assets/gajian.png";
import {Home , Group , DateRange , Reorder} from '@material-ui/icons';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo"/>
                </div>
                <i 
                    onClick={() => closeSidebar()}
                ></i>
                <div className="sidebar__menu">
                    <div className="sidebarList">
                    <Home/>
                        <a >Beranda</a>
                    </div>
                    <div className="sidebarList">
                    <Group/>
                        <a >Personnel list</a>
                    </div>
                    <div className="sidebarList">
                    <DateRange/>
                        <a >Daily Attendance</a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Sidebar;