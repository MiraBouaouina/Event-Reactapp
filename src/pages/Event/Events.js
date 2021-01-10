import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Events.module.css";
import Event from "../../components/Event/Event";
import axios from 'axios';
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
     constructor(props) {
        super(props);
        this.state= {
            events:[],
            
        }

        this.user={ //connected user profile
                id:"",
                first_name: "",
                last_name: "",
                user_name: "",
                admin: ""
                };

        console.log("-------------EVENTS--------------");
        console.log(this.props);
        console.log("--------------------------------");
    }
    //must create event list outside of render else React returns error
    componentDidMount(){
        axios.get('http://localhost/eventsWebSite-api/event/fetch_all.php')
            .then(response => {
                this.setState({events: response.data});
                })
            .catch(error => {
                console.log(error)
                });

        let check = window.localStorage.getItem('user');
        check = JSON.parse(check);
        
        console.log("----------in EVENTS GETTING USER FROM LOCAL STORAGE------");
       
         
                this.user.id= check.id;
                this.user.first_name= check.first_name;
                this.user.last_name= check.last_name;
                this.user.user_name= check.user_name;
                this.user.admin= check.admin;
                       
       

        if (true) {
            console.log(check);
            console.log(this.user);
            console.log("--------------------------------");
        }

    }
    createEventsTable(){
        let table=[];
        let data= [];
        
        data = this.state.events;       

            data.map( (event) => {
                table.push(<tr><Event data={event} loadEvent={this.props.loadEvent} /> </tr>);

            })
            return table;
                    
               
        
    }
        
    render() {
        return (
            <div>
                <NavbarSecond user={this.props.user} loadUser={this.props.loadUser}/>
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