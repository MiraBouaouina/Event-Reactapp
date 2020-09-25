
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// pages for this kit
import Signup from "./components/Signup/Signup"
import Home from "./pages/Home/Home"
import Events from "./pages/Events/Events"
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/signup" render={() => <Signup />} />
                    <Route path="/events" render={() => <Events />} />
                    <Redirect to="/home" />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App;