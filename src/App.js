import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// pages for this kit
import Signup from "./components/Signup/Signup"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Event from "./pages/Event/Event"
import Events from "./pages/Event/Events"


class App extends React.Component {
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/test')
            .then(function (response) {
                response.json().then(function (resp) {
                    console.log(resp);
                })
            })
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" render={() => <Home />} />
                    <Route path="/signup" render={() => <Signup />} />
                    <Route path="/profile" render={() => <Profile />} />
                    <Route path="/event" render={() => <Event />} />
                    <Route path="/events" render={() => <Events />} />


                    <Redirect to="/home" />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App;