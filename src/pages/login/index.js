import { useState, useEffect } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import Auth from '../../helpers/auth'

const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [login, setLogin] = useState(null);

    let handleSubmit = async () => {
        await Auth.login({
            username: email,
            password: password
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputGroup>
            <Button variant="outline-primary" onClick={() => handleSubmit()}>Login</Button>
        </div>
    );
}

export default Login;