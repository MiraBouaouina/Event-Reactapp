import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Event.module.css";
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


class Event extends React.Component {
    state={activeTab:'1'}

     toggle = (tab) => {
        if (this.state.activeTab !== tab) this.setState({activeTab:tab});
    }
    render(){
        return (
            <div>
                <NavbarSecond />
                <div className={`${classes.header} clear-filter`} filter-color="#5b14ff" style={{ backgroundImage: `url(${picture})` }}>
                   <div className={classes.filterBackground}></div>
                   <div className={classes.infoContainer}>
                   <div  >
                        <h1 className={classes.title}>
                            GREEN NIGHT
                        </h1>
    
                        <i class="fas fa-calendar-week "></i>
                        <h4>August 3rd to 7th</h4>
    
                        <i class="fa fa-map-marker orange"></i>
                        <h4>Palo Alto, California.</h4>
                        <Row>
                            <Col>
                                <Col >
                                    <Link to="/signup" >
                                        <Button className="btn-round " color="purple" outline >
    
                                            Register
                                        <i className="fas fa-sign-in-alt" ></i>
    
                                        </Button>
                                    </Link>
                                    <a href="#discover" >
                                        <Button className="btn-round " color="purple" outline style={{ marginLeft: '5px' }} >
    
                                            Discover
    
                                        </Button>
                                    </a>
    
                                </Col></Col>
                        </Row>
                    </div>
                   </div>
    
                </div>
                <Container>
    
                    <Row style={{ marginTop: "15px" }}>
                        <Col sm="8" xs="12">
                            <h4 id="discover">
                                Description
                            </h4>
                            <p>
                                Design must be functional, and functionality must be translated into visual aesthetics without any reliance on gimmicks that have to be explained.
    
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        </Col>
                        <Col sm="4" xs="6" >
                            <div className={classes.owner}>
                                <h4>
                                    Owner:
                                </h4>
                                <h5>
                                    Amira Bouaouina
                                </h5>
                                <Button className={classes.butt}>
                                    View Profile
                                </Button>
    
                            </div>
    
                        </Col>
                    </Row>
    
                    <Row>
                        <Col>
                            <h4>
                                Event schedule
                            </h4>
                            <Nav tabs style={{display: 'flex'}}>
    
                                <NavItem>
                                    <NavLink style={{maxWidth: '150px'}}
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Nov 8
                                </NavLink>
                                </NavItem>
    
                                <NavItem>
                                    <NavLink  style={{maxWidth: '150px'}}
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        Nov 9
                                </NavLink>
                                </NavItem>
                            </Nav>
    
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <div>
                                        <h3>
                                            9:00-10:00 Registration
                                        </h3>
                                        <p>
                                            description, all participants should be present at 8am to confirm their presence.
                                        </p>
                                    </div>
                                    <div>
                                        <h3>
                                            10:15-12:00 Workshop
                                        </h3>
                                        <p>
                                            there will be 4 workshops; you can choose between them during the registration part.
                                        </p>
                                    </div>
    
                                </TabPane>
                                <TabPane tabId="2">
                                    <div>
                                        <h3>
                                            14:00-16:00 Presentation
                                        </h3>
                                        <p>
                                            description, all participants should be present at 8am to confirm their presence.
                                        </p>
                                    </div>
                                    <div>
                                        <h3>
                                            10:00:15-:00 Certification
                                        </h3>
                                        <p>
                                            there will be 4 workshops; you can choose between them during the registration part.
                                        </p>
                                    </div>
    
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4>
                            Speakers
                        </h4>


                        </Col>
                    </Row>
                    <div>
                    </div>
                </Container >
                <Footer />

                
    
            </div >
        );
    }

  
}

export default Event;
