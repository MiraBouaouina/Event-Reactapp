import React, { useState } from "react";
import { Link,  BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import classes from "../../pages/Event/Event.module.css";
import ShowEvent from "./ShowEvent";
import EditEventForm from "./EditEventForm";
import classnames from 'classnames';
import axios from 'axios';
import picture from "../../assets/img/event3.jpg";
import {
    Modal,
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

 

const Event =(props) =>{
     
     const [modal2, setModal2] = React.useState(false);
     const [modal3, setModal3] = React.useState(false);
    
    const deleteEvent = () =>{
        let event = {"id": props.data.id};
        axios.post('http://localhost/eventsWebSite-api/event/delete.php', event)
            .then(response => {
                window.location.reload();
                })
            .catch(error => {
                console.log(error)
                });
      }



    /*toEvent(data) {
        //this.props.loadEvent(data);
        //return 
          // ( <Redirect to="/event" />)
        
    }*/

        return (
            <div>

                <Container>



                    <div className={classes.owner}>

                        <h5>
                             {props.data.event_name}
                        </h5>

                        <i class="fas fa-calendar-week "></i>
                        <h4> {props.data.start_date}  {props.data.end_date}</h4>

                        <i class="fa fa-map-marker orange"></i>
                        <h4> {props.data.place}</h4>
                        <Button onClick={() => setModal2(true)}
                          id="show-event">
                         Show event
                          <p className="d-lg-none d-xl-none">Create an event</p>
                        </Button>

                        <Button onClick={() => setModal3(true)}
                          id="edit-event">
                         Edit event
                          <p className="d-lg-none d-xl-none">Create an event</p>
                        </Button>

                        <Button onClick={() => deleteEvent()}
                          id="delete-event">
                         Delete event
                          <p className="d-lg-none d-xl-none">Create an event</p>
                        </Button>
                
                         
                          <Modal  style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
                            toggle={() => setModal2(false)}
                            isOpen={modal2}
                          >

                            <ShowEvent event={props.data}/>

                          </Modal>

                          <Modal  style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
                            toggle={() => setModal3(false)}
                            isOpen={modal3}
                          >

                            <EditEventForm event={props.data}/>

                          </Modal>
                        
                        
                   

                    </div>


                </Container >



            </div >
        );
    


}

export default Event;
