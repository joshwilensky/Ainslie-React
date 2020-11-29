import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ onSubmit }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label><b>First and Last Name:</b></Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={false}
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label><b>Email Address:</b></Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required={false}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label><b>Password:</b></Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Create your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={false}
                />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
                <Form.Label><b>Enter Your Apt #:</b></Form.Label>
                <Form.Control placeholder="Ex... 1001 Ainslie B" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me!" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Sign Up
      </Button>
        </Form >
    );
};

function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "10vh" }}
            >
                <Button block variant="primary" onClick={handleShow}>
                    Sign Up
        </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Create your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm onSubmit={onLoginFormSubmit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login