import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Events.module.css";
import classnames from 'classnames';
import picture from "../../assets/img/event3.jpg";
import {
    Container,
    Row,
    Col,
    Button,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

//core components
import NavbarSecond from "../../components/Navbars/NavbarSecond";
import Footer from "../../components/Footer/Footer";


class Events extends React.Component {
    state = {

    }


    render() {
        return (
            <div>
                <NavbarSecond />
                <Container className={classes.contenu}>
                    {/* Sousou you continue here*/}


                </Container >
                <Footer />




            </div >
        );
    }


}

export default Events;