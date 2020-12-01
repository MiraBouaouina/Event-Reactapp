
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// pages for this kit
import Signup from "./components/Signup/Signup"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Event from "./pages/Event/Event"

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/signup" render={() => <Signup />} />
                    <Route path="/profile" render={() => <Profile />} />
                    <Route path="/event" render={() => <Event />} />

                    <Redirect to="/home" />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App;