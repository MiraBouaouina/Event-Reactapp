
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// pages for this kit
import NavbarMain from "./components/Navbars/NavbarMain"
import Signup from "./components/Signup/Signup"
import Home from "./pages/Home/Home"
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <NavbarMain />
                <Switch>
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/signup" render={() => <Signup />} />
                    <Redirect to="/home" />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App;

