import { Outlet } from "react-router-dom";
import Menu from "./Menu";


function Root(){
    return<>
    <Menu></Menu>
    <Outlet></Outlet>
    </>
    
}

export default Root;