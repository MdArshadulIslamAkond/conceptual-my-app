import { NavLink } from "react-router-dom"
import { UseAuth } from "./auth";

export default function Navbar(){

    const navLinkStyle = ({ isActive, isPending }) => {
        return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "red" : isActive ?"red" : "black"
        };
        }

        const auth = UseAuth();

    return(
        <nav className="primary-nav">
            <ul>
                <li>
                    <NavLink to="/" style={navLinkStyle} >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={navLinkStyle} >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" style={navLinkStyle} >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order-summary" style={navLinkStyle} >
                        OlderSummary
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" style={navLinkStyle} >
                        Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" style={navLinkStyle} >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" style={navLinkStyle} >
                        Profile
                    </NavLink>
                </li>
                {!auth.user && <li>
                    <NavLink to="/login" style={navLinkStyle} >
                        Login
                    </NavLink>
                </li>}
            </ul>
        </nav>

/* <nav>
<ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/services">Services</Link>
    </li>
</ul>
</nav> */
    )
}


