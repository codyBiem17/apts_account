import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, List } from "reactstrap";
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
                // console.log(userData.data.user.likes[2])
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
            <Row className="profile-header">  
                <Col xs="12">
                    <img src={ProfileImage} alt="user-profile-display" />
                </Col>
                <Col xs="12">
                    <h4> Welcome, <span> {user.name} - </span>  </h4>
                    <span> {user.id} </span>
                    <p>{user.about}</p>
                </Col>
            </Row>
            <Row className="h5 likes-and-dislikes">
                <Col xs="12">
                    My Likes are:
                    <List>
                        <ul>
                            <li>
                                {user.likes[0]}
                            </li>
                            <li>
                                {user.likes[1]}
                            </li>
                            <li>
                                {user.likes[2]}
                            </li>
                        </ul>
                    </List>
                </Col>
                <Col xs="12">
                    My Dislikes are:
                    <List>
                        <ul>
                            <li>
                                {user.likes[0]}
                            </li>
                            <li>
                                {user.likes[1]}
                            </li>
                            <li>
                                {user.likes[2]}
                            </li>
                        </ul>
                    </List>
                </Col>
            </Row>
            <Row className="user-details">
                <Col xs="12">
                    <Row>
                        <Col className="h5" xs="12">
                            Contact Information
                        </Col>
                    </Row>
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
                        <Col xs="11">
                            {user.address}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile