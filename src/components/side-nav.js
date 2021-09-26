import { 
    Navbar, NavbarBrand, Nav, NavItem, NavLink,
    Row, Col
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FastFood from '../assets/images/fast-food.png'

const SideNav = ({orderDetails}) => {
    return(
        <Row>
            <Col xs="12" className="h4 fastfood fastfood-col">
                <img src={FastFood} alt="fastFood-logo" className="fastfood-logo" />
                <span>{orderDetails.restaurant.name}</span>
            </Col>
            <Col xs="12">
                <Navbar className="custom-navbar" color="dark" dark>
                    <NavbarBrand href="/" className="my-account"> My Account</NavbarBrand>
                    <ul className="user-cart-icon">
                        <li> <FontAwesomeIcon icon="user-circle" color="white" /> </li>
                        <li> 
                            <FontAwesomeIcon icon="shopping-cart" color="white" /> 
                            <span className='badge badge-warning' id='lblCartCount'> 4 </span>
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
            </Col>  
        </Row>
    )
}

export default SideNav