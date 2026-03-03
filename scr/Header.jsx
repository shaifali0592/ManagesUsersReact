import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <Navbar className="header-nav">
            
                <div className="random-color">
                        <NavLink to="/"><img src="https://static.thenounproject.com/png/374770-200.png"/>Users List</NavLink>
                         </div>
            </Navbar>
        </>
    )
}

export default Header;