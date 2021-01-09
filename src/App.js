import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// pages for this kit
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Event from "./pages/Event/Event";
import Events from "./pages/Event/Events";
import LoginPage from "./pages/Login/LoginPage";


class App extends React.Component {
   constructor(){
        super();
        this.state = {
            user:{ //connected user profile
                id:"",
                first_name: "",
                last_name: "",
                user_name: "",
                admin: ""
                }
        }
    }

loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        user_name: data.user_name,
        admin: data.admin        
    }});
}

    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path="/home" render={() => <Home loadUser={this.loadUser} />} />
                    <Route path="/signup" render={() => <Signup loadUser={this.loadUser} />} />
                    <Route path="/profile" render={() => <Profile loadUser={this.loadUser} />} />
                    <Route path="/event" render={() => <Event />} />
                    <Route path="/events" render={() => <Events />} />
                    <Route path="/login" render={() => <LoginPage loadUser={this.loadUser} />} />


                    <Redirect to="/home" />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App;