import { Link } from "react-router-dom";
function Menu(){
    return(
    <>
    <header className="top-header"> 
    <ul className='menu'>
            <li><Link to = "/Contact">Contact</Link></li>
            <li><Link to = "/Blog">Blog</Link></li>
            <li><Link to = "/Pages">Pages</Link></li>
            <li><Link to = "/About">About us</Link></li>
            <li><Link to = "/Home">Home</Link></li>

        </ul> 
    
    </header>
     </>
    );

}

export default Menu;