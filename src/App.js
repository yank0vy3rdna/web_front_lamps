import './App.css';
import React from "react";
import store from "./storage/store";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/Home/HomePage";
import {Container} from "reactstrap";

const Login = () => (
    <LoginPage/>
);

const Home = () => (
    <HomePage/>
);

function App() {
    return (
        <div className="App">
            <Container  fluid={true}>
                {store.getState().token !== null ? <Home/> : <Login/>}
            </Container>
        </div>
    );
}

export default App;
