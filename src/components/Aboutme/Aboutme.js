import React from "react";
import classes from "./Aboutme.module.css";
import {
    Row,
    Col

} from "reactstrap";

const Aboutme = (props) => {

    return (
        <div className={classes.about}>
            <Row >
                <Col xs="3" className={classes.icon} >
                    <i class="fas fa-user"></i>
                </Col>

                <Col xs="3" >
                    <h4>First Name:</h4>

                </Col>
                <Col xs="6">
                    <h4>{props.first_name} </h4>
                </Col>
            </Row>

            <Row >
                <Col xs="3" className={classes.icon}>
                    <i class="fas fa-user"></i>
                </Col>

                <Col xs="3">
                    <h4>Last Name:</h4>

                </Col>
                <Col xs="6">
                    <h4>{props.last_name} </h4>
                </Col>
            </Row>

        </div>

    );
}
export default Aboutme;