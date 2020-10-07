import React from "react";
import classes from "./Profile.module.css";

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
const Profile = () => {
    return (

        <div>
            <Container className={classes.container}>
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

                        </Col>
                    </Row>
                </div>
                <div className={classes.top}>
                    <Button className="btn-round"
                        color="defaults">
                        About
                    </Button>
                    <Button className="btn-round" color="info">
                        Participations
                    </Button>
                    <h2>
                        Events list
                    </h2>
                    <h2>
                        Events list
                    </h2><h2>
                        Events list
                    </h2>


                </div>

            </Container>


        </div >
    );
}
export default Profile;