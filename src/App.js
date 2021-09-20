import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Profile, SideNav } from './components';
import './App.css';
import {Container, Row, Col} from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faLocationArrow, faMobileAlt, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'



library.add(fab, faLocationArrow, faMobileAlt, faShoppingCart, faUserCircle)

function App() {
  return (
    <div className="App">
      <Container className="mt-4">
        <Row className="mx-auto app-parent-row">
          <Col xs="12" md="6" className="pages-col">
            <SideNav />
          </Col>
          <Col xs="12" md="6">
            <Router>
                <Switch>
                  <Route exact path="/" component={Profile} />
                  {/* <Route path="/about" component={About} />
                  <Route path="/how_it_works" component={Guides} />
                  <Route exact path="/faq" component={Faq} />
                  <Route exact path="/" component={HomePage} />
                  <Route path="/order" component={Order} />
                  <Route path="/reservation" component={Reservation} />
                  <Route path="/view-cart-page" component={ViewCart} /> */}
                </Switch>
              </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
