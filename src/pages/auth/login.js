import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Auth from '../../helpers'

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
                <h1>Login</h1>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Email</InputGroup.Text>
                    <FormControl
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Password</InputGroup.Text>
                    <FormControl
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </InputGroup>
                <Button variant="outline-primary" onClick={() => this.handleSubmit()}>Login</Button>
                <Button variant="dark" onClick={() => this.toRegister()}>Register</Button>
            </div>
        );
    }
}

export default Login;