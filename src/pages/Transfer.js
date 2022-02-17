import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../helpers'
import CardBalanceHeader from '../components/Balance/CardBalanceHeader';
import CardBalanceHistory from '../components/Balance/CardBalanceHistory';
import ButtonDefault from '../components/Button/ButtonDefault';
import React from 'react';

class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receipientAccountNo: '',
            amount: '',
            description: ''
        }
    }
    logout = () => {
        Helpers.logout().then(() => {
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
                        <Col xs={{ span: '1' }}>
                            <div className='buttonLeft'>
                                <i className="fa fa-arrow-left" onClick={() => { this.goTo('/') }}></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Row className='mt-80'>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <h1><strong>Transfer</strong></h1>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        {/* <input className='inputDefault' placeholder='Payee'></input> */}
                        <select className='inputDefault' placeholder='Payee'>
                            <option disabled selected>Payee</option>
                            <option>asd</option>
                            <option>dsa</option>
                        </select>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <input className='inputDefault' placeholder='Amount'></input>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <textarea className='textAreaDefault' placeholder='Description'></textarea>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <ButtonDefault text="Transfer Now" color="black" event={() => { this.goTo('/transfer') }} float={true} />
                    </Col>
                </Row>
            </div >
        )
    }

}

export default Transfer;
