import React, { useState } from "react";
import classes from "./Profile.module.css";
import { Link } from "react-router-dom";
import classnames from 'classnames';
// reactstrap components
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
import Aboutme from "../../components/Aboutme/Aboutme";
import Participations from "../../components/Participations/Participations";
import Footer from "../../components/Footer/Footer";


const Profile = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <NavbarSecond />
            <Container>
                <div className={classes.head}>
                    <Row>
                        <Col md="2" xs="4">
                            <img
                                className={`${classes.img} rounded-circle img-raise`}

                                src={require("assets/img/julie.jpg")}
                            ></img>

                        </Col>
                        <Col md="8" xs="8" style={{ marginTop: "20px" }}>
                            <h3>
                                Amira Bouaouina
                            </h3>
                            <h5>
                                Software Engineering Student
                            </h5>

                            <Button style={{
                                backgroundColor: "#2c2c2c"
                            }} size="sm">
                                Edit
                            </Button>
                        </Col>
                    </Row>
                </div>
                <div className={classes.body}>

                    <Nav tabs style={{ display: 'flex', justifyContent: "center" }} >
                        <NavItem>
                            <NavLink
                                style={{ maxWidth: '150px' }}
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Contact
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                style={{ maxWidth: '150px' }}

                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Participations
                            </NavLink>
                        </NavItem>
                    </Nav>


                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Aboutme email="mira@gmail.com" phone="50605161" fbaccount="Mira Bouaouina" />
                        </TabPane>
                        <TabPane tabId="2">
                            <Participations />
                        </TabPane>
                    </TabContent>

                </div>

            </Container>
            <Footer />

        </div >
    );
}
export default Profile;