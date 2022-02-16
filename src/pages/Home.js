import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Auth from '../helpers/auth'

function Home() {
    let navigate = useNavigate();

    const logout = () => {
        Auth.logout().then(() => {
            navigate('/login', { replace: true })
        });
    }
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <h1>EXPRESS.JS + VUE.JS</h1>
                            <p className="lead">Tutorial FullStack Express.js dan React.js oleh <strong>SantriKoding.com</strong></p>
                            <Button variant="primary" size="lg" onClick={() => logout()}>LOGOUT</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
