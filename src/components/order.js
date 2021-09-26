import { Container, Row, Col, Table } from "reactstrap";
import FastFood from '../assets/images/fast-food.png'


const OrderSummaryPage = ({orderDetails, total}) => {

    return (
        <Container fluid={true} className="order-container">
            <Row>
                <Col xs="12" className="h4 fastfood fastfood-col">
                    <img src={FastFood} alt="fastFood-logo" className="fastfood-logo" />
                    <span>{orderDetails.restaurant.name}</span>
                </Col>
                <Col xs="12">
                    <p id="order-page-user-greeting">Hi <span> {orderDetails.user.name}, </span> </p>
                    <p>
                        Your order has been Confirmed and will be shipping soon
                    </p>
                </Col>
                <hr />
                <Col xs="12">
                    <h5>Check Order Details</h5>
                    <Table striped>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    Order Id
                                </th>
                                <td>
                                    <p>{orderDetails.order_id}</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Order Date
                                </th>
                                <td>
                                    <p>22 Sept, 2021</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Name
                                </th>
                                <td>
                                    <p>{orderDetails.user.name}</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Address
                                </th>
                                <td>
                                    <p>{orderDetails.user.address}</p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Phone
                                </th>
                                <td>
                                    <p>{orderDetails.user.phone}</p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <hr className="mb-5" />
                <Col xs="12" className="mb-5">
                    <p className="h5">Item Details</p>
                    <Table borderless>
                        <tbody>
                            {
                                orderDetails.items.map(item => {
                                    return (
                                        <div className="items" key={item.name}>
                                            <tr>
                                                <th scope="row">
                                                    Food-Name
                                                </th>
                                                <td>
                                                    <p>{item.name}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Category
                                                </th>
                                                <td>
                                                    <p>{item.category}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Price
                                                </th>
                                                <td>
                                                    <p>{item.price}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Tax_pct
                                                </th>
                                                <td>
                                                    <p>{item.tax_pct}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    Quantity
                                                </th>
                                                <td>
                                                    <p>{item.quantity}</p>
                                                </td>
                                            </tr>
                                            <tr className="h6 subtotal">
                                                <th scope="row">
                                                    Subtotal
                                                </th>
                                                <td>
                                                    <p>{item.price * item.quantity}</p>
                                                </td>
                                            </tr>
                                        </div>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                <hr />
                <Col xs="12">
                    <Table> 
                        <tr className="h5 subtotal">
                            <th scope="row">
                                Total
                            </th>
                            <td>
                                {total}
                            </td>
                        </tr> 
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderSummaryPage