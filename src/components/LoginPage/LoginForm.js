import React, {useState} from 'react';
import {CardTitle, Form, Button, Alert, Input, Card, Row, Col, Label, Container} from 'reactstrap';
import './LoginForm.css';
import {login} from "../../services/Login";

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertText, setAlertText] = useState("Error");
    const onDismiss = () => {
        setAlertVisible(false)
    };

    const onLogin = (e) => {
        login(username, password, setAlertVisible, setAlertText)
    }
    return (
        <Col sm="12" md="7" xl="5" style={{"margin": "auto"}}>
            <Card style={{"margin-top": "20%", "text-align": "left"}}>
                <Container>
                    <Form>
                        <CardTitle tag="h3" style={{"padding": "5%"}}>Sign In</CardTitle>
                        <Alert color="error" isOpen={alertVisible} toggle={onDismiss}>
                            {alertText}
                        </Alert>
                        <Row style={{"margin-bottom": "2%"}}>
                            <Col sm="2" md="4" xl="6">
                                <label htmlFor="username" style={{"padding-left": "5%"}}>Username</label>
                            </Col>
                            <Col sm="12" md="7" xl="5">
                                <Input placeholder="username" value={username} onChange={setUsername}/>
                            </Col>
                        </Row>
                        <Row style={{"margin-bottom": "4%"}}>
                            <Col sm="2" md="4" xl="6">
                                <Label htmlFor="password" style={{"padding-left": "5%"}}>Password</Label>
                            </Col>
                            <Col sm="12" md="7" xl="5">
                                <Input type="password" name="password" value={password} onChange={setPassword}
                                       placeholder="password"/>
                            </Col>
                        </Row>
                        <Row style={{"margin-bottom": "2%", "text-align": "right", "padding-right": "9%"}}>
                            <Col style={{"margin-left": "auto"}} sm="12" md="7" xl="5">
                                <Button type="button" size="sm" block onClick={onLogin}>Sign In</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Card>
        </Col>
    );
}


export default LoginForm;
