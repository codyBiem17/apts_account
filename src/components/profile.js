import { Container, Row, Col } from "reactstrap";


const Profile = () => {
    return (
        <Container fluid={true}>
            <header>
                <Row>
                    <Col xs="12">
                        My Profile
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