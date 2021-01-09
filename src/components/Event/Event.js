import React, { useState } from "react";
import { Link,  BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
     constructor(props) {
     super(props);
     console.log(props); 
    }

    toEvent(data) {
        //this.props.loadEvent(data);
        //return 
          // ( <Redirect to="/event" />)
        
    }

    render() {
        return (
            <div>

                <Container>



                    <div className={classes.owner}>

                        <h5>
                             {this.props.data.event_name}
                        </h5>

                        <i class="fas fa-calendar-week "></i>
                        <h4> {this.props.data.start_date}  {this.props.data.end_date}</h4>

                        <i class="fa fa-map-marker orange"></i>
                        <h4> {this.props.data.place}</h4>

                        <button onClick={this.toEvent(this.props.data)}> Show event</button>
                        
                   

                    </div>


                </Container >



            </div >
        );
    }


}

export default Event;
