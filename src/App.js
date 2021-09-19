import { Home, Reorder } from "@material-ui/icons";
import { useState } from "react";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(false);
  }

  const CloseSidebar = () =>{
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={CloseSidebar} />
      <Main/>
    </div>
    
  );
};

export default App;
