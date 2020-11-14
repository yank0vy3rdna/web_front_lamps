import React from 'react';
import NavBar from "./NavBar";
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {
    Switch,
    Route
} from "react-router-dom";
import Map from "./pages/Map";

function HomePage() {
    return (
        <div>
            <NavBar/>
            <Router>
                <Switch>
                    <Route path="/about">
                        {/*<About />*/}
                    </Route>
                    <Route path="/users">
                        {/*<Users />*/}
                    </Route>
                    <Route path="/">
                        <Map/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default HomePage;
