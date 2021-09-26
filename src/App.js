import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Footer, OrderSummaryPage, Profile, SideNav } from './components';
import './App.css';
import {Container, Row, Col} from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {faLocationArrow, faMobileAlt, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'



library.add(fab, far, faLocationArrow, faMobileAlt, faShoppingCart, faUserCircle)

function App() {
  const [userDetails, setUserDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [orderDetails, setOrderDetails] = useState({})
  const [total, setTotal] = useState(null)

  useEffect(()=>{
    const getUserOrder = async () => {
        try{
            const url = 'https://indapi.kumba.io/webdev/assignment'
            const userOrder = await axios.get(url)

            const getUserDetails = userOrder.data.user
            setUserDetails(getUserDetails)

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
    <div className="App">
      {
        loading ? <p id="loading">loading...please wait</p> :
          <Container className="mt-4">
          <Row className="mx-auto app-parent-row">
            <Col xs="12" className="pages-col">
              <SideNav orderDetails={orderDetails} />
            </Col>
            <Col xs="12">
              <Router>
                  <Switch>
                    <Route exact path="/">
                      <Profile userDetails={userDetails} />
                    </Route>
                    <Route exact path="/order">
                      <OrderSummaryPage orderDetails={orderDetails} total={total} />
                    </Route>
                  </Switch>
                </Router>
            </Col>
            <Col xs="12" className="footer">
              <Footer orderDetails={orderDetails} />
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}

export default App;
