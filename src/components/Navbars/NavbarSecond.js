import React from "react";
import { Link,  BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login/Login.js";
import classes from "./NavbarSecond.module.css";
import CreateEventForm from "../Event/CreateEventForm";
import {
     Button,
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

class NavbarSecond extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            toHome: false,
            modal2:false,
            collapseOpen:false
        };

        console.log("---------NAV BAR SECOND ENTER--------");
        console.log(this.props.user);
        console.log("--------------------------------");
    }

setModalhandler(){
    this.setState({
        modal2:true
    })
}
setCollapsehandler(){
    this.setState({
        collapseOpen:!this.state.collapseOpen

    })
}


   signOut(){
         let user={ 
                id:"",
                first_name: "",
                last_name: "",
                user_name: "",
                admin: ""
                };
        this.props.loadUser(user);
        this.setState({toHome:true});

        console.log("---------NAV BAR SECOND LEAVE--------");
        console.log(this.props.user);
        console.log("--------------------------------");

    }
    
    render(){
        
        if (this.state.toHome){
        
        return <Redirect to="/Home"/>
        }
        return (
        <>

            <Navbar className={classes.navb} expand="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Container>

                    <div className="navbar-translate">
                        <NavbarBrand
                            id="navbar-brand"
                        >
                            <NavLink to="/home" tag={Link}>
                                Events Together
                </NavLink>
                        </NavbarBrand>
                        <UncontrolledTooltip target="#navbar-brand">
                            Designed by us. Coded by us
            </UncontrolledTooltip>

                    </div>
                    <button
                        className="navbar-toggler navbar-toggler"
                        onClick={() => {
                            document.documentElement.classList.toggle("nav-open");
                            this.setCollapsehandler();
                        }}
                        aria-expanded={this.state.collapseOpen}
                        type="button"
                    >
                        <i className="fas fa-bars" style={{ color: 'white' }}></i>
                    </button>
                    <Collapse
                        className="justify-content-end"
                        isOpen={this.state.collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            if (this.props.user.admin) 
                            {
                            <>

                            <NavItem className={classes.nvitem}>

                            <NavLink onClick={() => this.setModalhandler()}
                              id="create-event">
                             
                              <p className="d-lg-none d-xl-none">Create an event</p>
                            </NavLink>
                            
                          </NavItem>
                          <Modal  style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
                            toggle={() => this.setModalhandler()}
                            isOpen={this.state.modal2}
                          >

                            <CreateEventForm user={this.props.user} />

                          </Modal>

                          </>

                          }

                        
                        
                            <NavItem>
                                <NavLink to="/home" tag={Link}>
                                    Home
                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/events" tag={Link}>
                                    Events
                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => this.signOut()}>
                                    Sign Out
                                </NavLink>
    
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

}
export default NavbarSecond;