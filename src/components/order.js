import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const OrderSummaryPage = () => {
    const [userOrderDetails, setUserOrderDetails] = useState({})

    useEffect(()=>{
        const getUserOrderDetails = async () => {
            try{
                const url = 'https://indapi.kumba.io/webdev/assignment'
                const userOrderDetails = await axios.get(url)
                // console.log(userData.data.user.likes[2])
                setUserOrderDetails(userData.data)
            }
            catch (err){
                console.log(err)
            }
        }
        getUserOrderDetails()
    }, [])

    return (
        <Container fluid={true} className="">
            <Row>
                <Col xs="12">
                    <h4>Your Order has been Confirmed!</h4>
                    <p>Hi {userOrderDetails.user.name}, </p>
                    <p>
                        Thank you for your patronage. Your order has been Confirmed
                        and will be shipping soon
                    </p>
                </Col>
                <hr />
                <Col xs="12">
                    <p>Check Order Details</p>
                    <Table borderless>
                        <thead>
                            <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>{userOrderDetails.order_id}</td>
                            <td>22 Sept, 2021</td>
                            <td>{userOrderDetails.user.name}</td>
                            <td>{userOrderDetails.user.address}</td>
                            <td>{userOrderDetails.user.phone}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <hr />
                <Col xs="12">
                    <p>Item Details</p>
                    <Table>
                        <thead className="hide-show-th-tb">
                            <tr>
                                <th></th>
                                <th>FoodItem</th>
                                <th className="foodItemImg">FoodItem Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="d-md-none hide-at-md">
                            <tr>
                                <th scope="row">
                                    <span>
                                        <FontAwesomeIcon style={{"color": "red"}} icon={["far", "trash-alt"]} />
                                    </span>
                                    FoodItem
                                </th>
                                <td>
                                    <p>{viewMyCart.foodItemName}</p>
                                    <p> Expect: </p> 
                                    <p>({viewMyCart.foodItemMakeUp}) </p>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Price</th>
                                <td>
                                    {decode('&#8358;')} 500
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Quantity</th>
                                <td className="plus-or-minus">
                                    <span> <FontAwesomeIcon icon="plus-circle" onClick={plusIcon} /> </span>
                                    <span> {value} </span>
                                    <span>  <FontAwesomeIcon icon="minus-circle" onClick={minusIcon} /> </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Subtotal</th>
                                <td>
                                    {decode('&#8358;')} {subtotalValue}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderSummaryPage