import { 
    Navbar, NavbarBrand, Nav, NavItem, NavLink
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideNav = () => {
    return(
        <Navbar className="custom-navbar" color="dark" dark>
            <NavbarBrand href="/"> My APTS Account</NavbarBrand>
            <ul>
                <li> <FontAwesomeIcon icon="user-circle" color="white" /> </li>
                <li> 
                    <FontAwesomeIcon icon="shopping-cart" color="white" /> 
                    <span class='badge badge-warning' id='lblCartCount'> 5 </span>
                </li>
            </ul>
            <Nav navbar>
                <NavItem>
                    <NavLink href="#">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/order">
                        Orders
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default SideNav