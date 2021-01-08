import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Events.module.css";
import Event from "../../components/Event/Event"
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
    //must create event list outside of render else React returns error
    createEventsTable = () => {

        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < 5; j++) {
                children.push(<Event />)
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }


    render() {
        return (
            <div>
                <NavbarSecond />
                <Container className={classes.contenu}>

                    <table>
                        {this.createEventsTable()}
                    </table>


                </Container >
                <Footer />




            </div >
        );
    }


}

export default Events;