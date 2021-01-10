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

 

class Event extends React.Component {
     constructor(props) 
     {
        super(props);
        this.state= {
        modal3:false,
        modal2:false
       };
        this.user={ //connected user profile
                id:"",
                first_name: "",
                last_name: "",
                user_name: "",
                admin: ""
                };

     this.buttons = <> </>;
     let check = window.localStorage.getItem('user');
        check = JSON.parse(check);         
                this.user.id= check.id;
                this.user.first_name= check.first_name;
                this.user.last_name= check.last_name;
                this.user.user_name= check.user_name;
                this.user.admin= check.admin;
     if (this.user.id){
        if(this.user.admin){
          this.buttons = <>
                      <Button onClick={() => this.setState({modal2:true})}
                          id="show-event">
                         Show event
                        </Button>

                        <Button onClick={() => this.setState({modal3:true})}
                          id="edit-event">
                         Edit event
                        </Button>

                        <Button onClick={() => this.deleteEvent()}
                          id="delete-event">
                         Delete event
                        </Button>  
                    </>;
        }
        else {
          this.buttons = <>
                          <Button onClick={() => this.setState({modal2:true})}
                          id="show-event">
                         Show event
                        </Button>
                        </>;

        }
    }

  }
     
    
    deleteEvent(){
        let event = {"id": this.props.data.id};
        axios.post('http://localhost/eventsWebSite-api/event/delete.php', event)
            .then(response => {
                window.location.reload();
                })
            .catch(error => {
                console.log(error)
                });
      }



      render(){
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
                        
                            {this.buttons}
                         
                          <Modal  style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
                            toggle={() => this.setState({modal2:false})}
                            isOpen={this.state.modal2}
                          >

                            <ShowEvent event={this.props.data}/>

                          </Modal>

                          <Modal  style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
                            toggle={() => this.setState({modal3:false})}
                            isOpen={this.state.modal3}
                          >

                            <EditEventForm event={this.props.data}/>

                          </Modal>
                        
                        
                   

                    </div>


                </Container >



            </div >
        );
    


  }
}
export default Event;
