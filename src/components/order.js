import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, List } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const OrderSummaryPage = () => {
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
        <Container fluid={true} className="">
      
        </Container>
    )
}

export default OrderSummaryPage