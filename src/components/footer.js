import FastFood from '../assets/images/fast-food.png'
import { Row, Col } from "reactstrap";


const Footer = ({loading, orderDetails}) => {
    return (
        <>
            {
                loading ? 'loading' :

                <Row>
                    <Col xs="12" className="fastfood-col">
                        <img src={FastFood} alt="fastFood-logo" className="fastfood-logo" />
                        <span>{orderDetails.restaurant.name}</span>
                    </Col>
                    <Col className="contact-col" xs="12">
                        <Row>
                            <Col className="contact-us" xs="12">
                                Contact Us
                            </Col>
                            <Col className="12 restaurant-info">
                                <Row>
                                    <Col xs="6">
                                        {orderDetails.restaurant.street},
                                    </Col>
                                    <Col xs="6">
                                        {orderDetails.restaurant.city},
                                    </Col>
                                    <Col xs="6">
                                        {orderDetails.restaurant.state},
                                    </Col>
                                    <Col xs="6">
                                        {orderDetails.restaurant.zipcode}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }
        </>
    )
}
export default Footer