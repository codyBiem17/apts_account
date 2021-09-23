import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, List } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileImage from '../assets/images/hijabi1.png'
import { LocationMarkerIcon } from '@heroicons/react/solid'


const Profile = () => {
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getUser = async () => {
            try{
                const url = 'https://indapi.kumba.io/webdev/assignment'
                const userData = await axios.get(url)
                const getUserDetails = userData.data.user
                setUserDetails(getUserDetails)
                setLoading(false)
            }
            catch (err){
                console.log(err)
            }
        }
        getUser()
    }, [])

    return (
        <>
            {
                loading ? 'loading...' :
                <Container fluid={true} className="profile-container">
                    <Row className="profile-header">  
                        <Col xs="12">
                            <img src={ProfileImage} alt="user-profile-display" />
                        </Col>
                        <Col xs="12">
                            <h4> Welcome, <span> {userDetails.name} - </span>  </h4>
                            <span> {userDetails.id} </span>
                            <p>{userDetails.about}</p>
                        </Col>
                    </Row>
                    <Row className="h5 likes-and-dislikes">
                        <Col xs="12">
                            My Likes are:
                            <List>
                                <ul>
                                    <li>{userDetails.likes[0]}</li>
                                    <li>{userDetails.likes[1]}</li>
                                    <li>{userDetails.likes[2]}</li>
                                </ul>
                            </List>
                        </Col>
                        <Col xs="12">
                            My Dislikes are:
                            <List>
                                <ul>
                                    <li>{userDetails.dislikes[0]}</li>
                                    <li>{userDetails.dislikes[1]}</li>
                                    <li>{userDetails.dislikes[2]}</li>
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
                                    {userDetails.phone}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="1">
                                    <LocationMarkerIcon className="location-icon" /> 
                                </Col>
                                <Col xs="11">
                                    {userDetails.address}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default Profile