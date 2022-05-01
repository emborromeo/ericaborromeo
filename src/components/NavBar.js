import '../styles/styles.css'

import {NavLink, Outlet } from "react-router-dom";


const NavBar = () =>{

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid ">
                    <div className="justify-content-start collapse navbar-collapse d-flex align-items-center min-vh-100"  id="navbarTogglerDemo02">
                        <ul className="navbar-nav social-links " >
                            <li className="nav-item">
                                <NavLink to = "/hero_section" href="#heroSection" className="nav-link" ><i className="bx bx-home"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to = "/about_section" href="#aboutSection" className="nav-link"  ><i className="bx bx-user"></i> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to = "/skill_section" href="#skillSection" className="nav-link"  ><i className="bx bx-code-curly"></i> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to = "/project_section" href="#projectSection" className="nav-link"  ><i className="bx bx-folder"></i> </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to = "/blog_section" href="#blogSection" className="nav-link" ><i className="bx bx-receipt"></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to = "/contact_section" href="#contactSection" className="nav-link"> <i className="bx bx-envelope"></i>  </NavLink>
                            </li>        
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

        </>
    )
}

export default NavBar