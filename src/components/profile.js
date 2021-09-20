import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileImage from '../assets/images/hijabi1.png'
import { LocationMarkerIcon } from '@heroicons/react/solid'


const Profile = () => {
    const [user, setUser] = useState({})

    useEffect(()=>{
        const getUser = async () => {
            try{
                const url = 'https://indapi.kumba.io/webdev/assignment'
                const userData = await axios.get(url)
                // console.log(userData.data.user)
                setUser(userData.data.user)
            }
            catch (err){
                console.log(err)
            }
        }
        getUser()
    }, [])

    return (
        <Container fluid={true} className="profile-container">
            <header className="profile-header"> 
                <Row>
                    <Col xs="12">
                        <img src={ProfileImage} alt="user-profile-display" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <h4> Welcome, <span> {user.name} - </span>  </h4>
                        <span> {user.id} </span>
                    </Col>
                </Row>
            </header>
            <section className="user-details">
                <Row>
                    <Col xs="1">
                        <FontAwesomeIcon icon="mobile-alt" /> 
                        
                    </Col>
                    <Col xs="11">
                        {user.phone}
                    </Col>
                </Row>
                <Row>
                    <Col xs="1">
                        <LocationMarkerIcon className="location-icon" /> 
                    </Col>
                    <Col xs="10">
                        {user.address}
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Profile