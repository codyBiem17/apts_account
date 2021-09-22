import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Table } from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const OrderSummaryPage = () => {
    const [userOrderDetails, setUserOrderDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getUserOrder = async () => {
            try{
                const url = 'https://indapi.kumba.io/webdev/assignment'
                const userOrder = await axios.get(url)
                // console.log(userData.data.user.likes[2])
                setUserOrderDetails(userOrder.data.user)
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
                <Container fluid={true} className="">
                    <Row>
                        <Col xs="12">
                            <h5>Your Order has been Confirmed!</h5>
                            <p>Hi {userOrderDetails.name}, </p>
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
                                    <td>{userOrderDetails.name}</td>
                                    <td>{userOrderDetails.address}</td>
                                    <td>{userOrderDetails.phone}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <hr />
                        <Col xs="12">
                            <p>Item Details</p>
                            <Table>
                                
                            </Table>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default OrderSummaryPage