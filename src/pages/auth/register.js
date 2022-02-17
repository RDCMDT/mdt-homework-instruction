import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Auth from '../../helpers'

class Register extends React.Component {

    // navigation = useNavigate();

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

    render() {
        return (
            <div>
                <h1>Register</h1>
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
                <Button variant="outline-primary" onClick={() => this.handleSubmit()}>Sign Up</Button>
            </div>
        );
    }
}

export default Register;