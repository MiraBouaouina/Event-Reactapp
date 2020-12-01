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
                    <i class="fas fa-at"></i>
                </Col>

                <Col xs="3" >
                    <h4>Email:</h4>

                </Col>
                <Col xs="6">
                    <h4>{props.email} </h4>
                </Col>
            </Row>

            <Row >
                <Col xs="3" className={classes.icon}>
                    <i class="fas fa-phone"></i>
                </Col>

                <Col xs="3">
                    <h4>Phone:</h4>

                </Col>
                <Col xs="6">
                    <h4>{props.phone} </h4>
                </Col>
            </Row>

            <Row >

                <Col xs="3" className={classes.icon}>
                    <i class="fab fa-facebook"></i>
                </Col>

                <Col xs="3">
                    <h4>Account:</h4>

                </Col>
                <Col xs="6">
                    <h4>{props.fbaccount} </h4>
                </Col>
            </Row>

        </div>

    );
}
export default Aboutme;