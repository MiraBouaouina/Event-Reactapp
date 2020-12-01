import React from "react";
import classes from "./Participations.module.css";
import {
    Row,
    Col, Card,
    CardTitle, Button, CardText

} from "reactstrap";

const Participations = () => {

    return (
        <div>
            <div className={classes.mg} >
                <h5 style={{ paddingLeft: "7px" }}>Created :</h5>
                <Row className={classes.rw} >
                    <Col sm="6">
                        <Card className={classes.card} body>
                            <CardTitle>EVENT TITLE</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button className={classes.butt}>View details</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card className={classes.card} body>
                            <CardTitle>EVENT TITLE</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button className={classes.butt} >View details</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className={classes.mg} >
                <h5 style={{ paddingLeft: "7px" }}>Partcipated in :</h5>
                <Row className={classes.rw}>
                    <Col sm="6">
                        <Card className={classes.card} body>
                            <CardTitle>EVENT TITLE</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button className={classes.butt}>View details</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card className={classes.card} body>
                            <CardTitle>EVENT TITLE</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button className={classes.butt}>View details</Button>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    );
}
export default Participations;