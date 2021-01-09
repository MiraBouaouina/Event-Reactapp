import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// pages for this kit
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Event from "./pages/Event/Event";
import Events from "./pages/Event/Events";
import LoginPage from "./pages/Login/LoginPage";
import Login from "./components/Login/Login";


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
                    <Route path="/home" render={(props) => <Home {...props} loadUser={this.loadUser} user={this.state.user}/>} />
                    <Route path="/signup" render={(props) => <Signup {...props} loadUser={this.loadUser} />} />
                    <Route path="/profile" render={(props) => <Profile {...props} user={this.state.user} />} />
                    <Route path="/event" render={(props)=> <Event {...props} states={this.state} loadEvent={this.loadEvent} />} />
                    <Route path="/events" render={(props) => <Events {...props} states={this.state} loadUser={this.loadUser}/>} />
                    <Route path="/login" render={(props) => <Login {...props} loadUser={this.loadUser} states={this.state}/>} />


                    <Redirect to="/home" />
                </Switch>

            </BrowserRouter>
        )
    }
}
export default App;