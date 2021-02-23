import React from "react";
import { Link } from "react-router-dom";
import classes from "./Apropos.module.css";

import {
    Modal,
    UncontrolledTooltip,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
} from "reactstrap";

//core components
import NavbarSecond from "../../components/Navbars/NavbarSecond";
import Footer from "../../components/Footer/Footer";
class Apropos extends React.Component {



    render() {

        return (
            <div>
                <NavbarSecond user={this.props.user} loadUser={this.props.loadUser} />
                <Container >


                </Container >
                <Footer />
            </div >


        );
    }

}
export default Apropos;