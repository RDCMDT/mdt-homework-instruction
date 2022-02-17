import React from 'react'
import { Button, InputGroup, FormControl, Row, Col, Container } from 'react-bootstrap';
import Auth from '../../helpers'
import ButtonDefault from '../../components/Button/ButtonDefault';
import Helpers from '../../helpers/index'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async () => {
        await Auth.register({
            username: this.state.email,
            password: this.state.password
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
                        <h1><strong>Register</strong></h1>
                    </Col>
                    <div className='formLogin'>
                        <Col xs={{ span: 10, offset: 1 }} >
                            <input className='inputDefault' placeholder='Email' onChange={(e) => this.setState({ email: e.target.value })}></input>
                        </Col>
                        <Col xs={{ span: 10, offset: 1 }} >
                            <input type='password' className='inputDefault' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })}></input>
                        </Col>
                    </div>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <ButtonDefault class="buttonRegistration" text="Register" color="black" event={() => { this.handleSubmit() }} float={true} />
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Register;