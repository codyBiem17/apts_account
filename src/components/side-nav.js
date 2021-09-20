import { 
    Navbar, NavbarBrand, Nav, NavItem, NavLink
} from "reactstrap";

const SideNav = () => {
    return(
        <Navbar className="custom-navbar" color="dark" dark>
            <NavbarBrand href="/"> My APTS Account</NavbarBrand>
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