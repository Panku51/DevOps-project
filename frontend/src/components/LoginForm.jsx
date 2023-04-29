import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = ({handleSubmit, setUsername, setPassword}) => {
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username or email</Form.Label>
                <Form.Control type="username" onChange={(ev) => setUsername(ev.target.value)} placeholder="Write your username" required/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(ev) => setPassword(ev.target.value)} placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                  Log in
            </Button>
        </Form>
    );
};

export default LoginForm;