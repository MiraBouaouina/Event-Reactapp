/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import NavbarMain from "./components/Navbars/Navbar"
import Home from "./pages/Home/Home"
class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <NavbarMain />
                    <Route path="/home" render={() => <Home />} />
                    <Redirect to="/home" />


                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;

