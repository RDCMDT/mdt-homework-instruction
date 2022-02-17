import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Auth from '../helpers'
import CardBalanceHeader from '../components/Balance/CardBalanceHeader';
import CardBalanceHistory from '../components/Balance/CardBalanceHistory';
import ButtonDefault from '../components/Button/ButtonDefault';
import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    logout = () => {
        Auth.logout().then(() => {
            window.location.reload();
        })
    }

    goTo = (url) => {
        window.location.href = url;
    }

    render() {
        return (
            <div>
                <Container className="pt-3 pb-0 mb-0">
                    <Row>
                        <Col xs={{ span: '1', offset: '9' }}>
                            <p onClick={() => { this.logout() }}>Logout</p>
                        </Col>
                    </Row>
                </Container>
                <CardBalanceHeader />
                <Row className='mt-5'>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <p><strong>Your Transaction History</strong></p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <CardBalanceHistory />
                        <CardBalanceHistory />
                    </Col>
                </Row>
                <Row className='mt-5 mx-5 mb-5'>
                    <ButtonDefault text="Make Transfer" color="black" event={() => { this.goTo('/transfer') }} />
                </Row>
            </div >
        )
    }

}

export default Home;
