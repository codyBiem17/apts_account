import FastFood from '../assets/images/fast-food.png'
import { Row, Col, Table } from "reactstrap";


const Footer = () => {
    return (
        <Row>
            <Col xs="12">
                <img src={FastFood} alt="fastFood-logo" />
                <span></span>
            </Col>
        </Row>
    )
}
export default Footer