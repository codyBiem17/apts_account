import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const OrderSummaryPage = () => {
    const [orderDetails, setOrderDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getUserOrder = async () => {
            try{
                const url = 'https://indapi.kumba.io/webdev/assignment'
                const userOrder = await axios.get(url)
                // console.log(userOrder.data.order_id)
                setOrderDetails(userOrder.data)
                setLoading(false)
            }
            catch (err){
                console.log(err)
            }
        }
        getUserOrder()
    }, [])

    return (
        <>
            {
                loading ? 'loading...' :
                <Container fluid={true} className="order-container">
                    <Row>
                        <Col xs="12">
                            <h4 className="text-center"> {orderDetails.restaurant.name} </h4>
                        </Col>
                        <Col xs="12">
                            <p id="order-page-user-greeting">Hi <span> {orderDetails.user.name}, </span> </p>
                            <p>
                                Your order has been Confirmed and will be shipping soon
                            </p>
                        </Col>
                        <hr />
                        <Col xs="12">
                            <p className="h5">Check Order Details</p>
                            <Table borderless>
                                {/* <thead className="">
                                    <tr>
                                        <th scope="row">Order Id</th>
                                        <th scope="row">Order Date</th>
                                        <th scope="row">Name</th>
                                        <th scope="row">Address</th>
                                        <th scope="row">Phone</th>
                                    </tr>
                                </thead> */}
                                <tbody className="d-md-none">
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
                        <hr />
                        <Col xs="12">
                            <p className="h5">Item Details</p>
                            <Table borderless>
                                {/* <thead className="">
                                    <tr>
                                        <th scope="row">Order Id</th>
                                        <th scope="row">Order Date</th>
                                        <th scope="row">Name</th>
                                        <th scope="row">Address</th>
                                        <th scope="row">Phone</th>
                                    </tr>
                                </thead> */}
                                <tbody className="d-md-none">
                                    {
                                        orderDetails.items.map(item => {
                                            return (
                                                <>
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
                                                            Currency
                                                        </th>
                                                        <td>
                                                            <p>{item.currency}</p>
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
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default OrderSummaryPage