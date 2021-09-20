import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col } from "reactstrap";


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
        <Container fluid={true}>
            <header className="profile-header"> 
                <Row>
                    <Col xs="12">
                        <h2> Welcome, <span> {user.name} </span> </h2>
                    </Col>
                </Row>
            </header>
            <section>
                <Row>
                    <Col xs="12">
                        Id duis amet consequat quis ea ad laboris aliquip.
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Profile