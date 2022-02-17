import React from 'react'
import { Button, InputGroup, FormControl, Row, Col, Container } from 'react-bootstrap';
import Auth from '../../helpers'
import ButtonDefault from '../../components/Button/ButtonDefault';
import Helpers from '../../helpers/index'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async () => {
        await Auth.login({
            username: this.state.email,
            password: this.state.password
        })
    }

    toRegister = () => {
        window.location.href = "/register"
    }

    render() {
        return (
            <div>
                <Row className='mt-80'>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <h1><strong>Login</strong></h1>
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
                        <ButtonDefault class="buttonLogin" text="Login" color="black" event={() => { this.handleSubmit() }} float={true} />
                        <ButtonDefault class="buttonRegistration" text="Register" color="white" event={() => { this.toRegister() }} float={true} />
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Login;