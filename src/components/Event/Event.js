import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../../pages/Event/Event.module.css";
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

class Event extends React.Component {
    state = { activeTab: '1' }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
    }
    render() {
        return (
            <div>


                <Container>



                    <div className={classes.owner}>
                        <h5>
                            GREEN NIGHT
                        </h5>

                        <i class="fas fa-calendar-week "></i>
                        <h4>August 3rd to 7th</h4>

                        <i class="fa fa-map-marker orange"></i>
                        <h4>Palo Alto, California.</h4>
                        <Link to="/Event">Show event</Link>

                    </div>


                </Container >



            </div >
        );
    }


}

export default Event;
