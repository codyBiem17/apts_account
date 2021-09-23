import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Table } from "reactstrap";



const OrderSummaryPage = () => {
    const [loading, setLoading] = useState(true)
    const [orderDetails, setOrderDetails] = useState({})
    const [total, setTotal] = useState(null)
  

    useEffect(()=>{
        const getUserOrder = async () => {
            try{
                const url = 'https://indapi.kumba.io/webdev/assignment'
                const userOrder = await axios.get(url)
                setOrderDetails(userOrder.data)
                const subtotal = userOrder.data.items.map(item => {
                    const itemCost = item.price * item.quantity
                    const totalSalesTax = itemCost * (item.tax_pct / 100)
                    const getTotalTaxSales = totalSalesTax + itemCost
                    return getTotalTaxSales
                })
                const getTotalBill = subtotal.reduce( (x,y) => x + y )
                setTotal(getTotalBill)   
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
                            <h4 className="text-center fastfood"> {orderDetails.restaurant.name} </h4>
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
                        <hr className="mb-5" />
                        <Col xs="12" className="mb-5">
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
                                                <div className="items">
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
            }
        </>
    )
}

export default OrderSummaryPage