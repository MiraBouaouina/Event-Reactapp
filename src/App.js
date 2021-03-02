import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// pages for this kit
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Events from "./pages/Event/Events";
import Login from "./components/Login/Login";
import Apropos from "./pages/Apropos/Apropos";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: { //connected user profile
                id: "",
                first_name: "",
                last_name: "",
                user_name: "",
                admin: "",
                photo: ""
            }
        }
    }

    componentDidMount() {
        let check = window.localStorage.getItem('user');
        check = JSON.parse(check);
        if (true) {
            console.log("----------in APP GETTING USER FROM LOCAL STORAGE------");
            console.log(check);
            console.log("--------------------------------");
        }
    }


    loadUser = (data) => {
        this.setState(
            (prevState) => (
                {
                    user: {
                        id: data.id,
                        first_name: data.first_name,
                        last_name: data.last_name,
                        user_name: data.user_name,
                        admin: data.admin,
                        photo: data.photo
                    }
                }),
            () => {
                console.log("----------in APP  LOCAL STORAGE SET STATE------");
                window.localStorage.setItem('user', JSON.stringify(this.state.user));
                console.log(window.localStorage.getItem('user'));
                console.log("-----------------------------------------");
            }

        );
    };


    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path="/home" render={(props) => <Home {...props} loadUser={this.loadUser} user={this.state.user} />} />
                    <Route path="/signup" render={(props) => <Signup {...props} loadUser={this.loadUser} />} />
                    <Route path="/profile" render={(props) => <Profile {...props} user={this.state.user} loadUser={this.loadUser} />} />
                    <Route path="/events" render={(props) => <Events {...props} user={this.state.user} loadUser={this.loadUser} />} />
                    <Route path="/login" render={(props) => <Login {...props} loadUser={this.loadUser} user={this.state.user} />} />
                    <Route path="/apropos" render={(props) => <Apropos {...props} user={this.state.user} loadUser={this.loadUser} />} />

                    <Redirect to="/home" />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App;