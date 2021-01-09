import React from "react";
import classes from "./Logout.module.css";
import { Link,  BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row
} from "reactstrap";

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstFocus: false,
            lastFocus: false,
            isAuth: false,
            redirectToEvents: false,
        }

    }
    
    submit() {
     
    }
    render() {
        const redirectToEvents = this.state.redirectToEvents;
        if (redirectToEvents===true) {
               return <Redirect to="/Home"/>
            }

        return (

            <>
                <Row>
                    <Card className="card-signup" style={{ backgroundColor: '#a8a7a7' }}> {/*95b3b8 aaaaaa*/}
                        < Form action="" className="form" method="">
                            <CardHeader className="text-center">
                                <CardTitle tag="h3" style={{ color: '#e6e7eb' }}>
                                    <Button
                                    className="btn-round btn-neutral"
                                    color="default"
                                    href="#pablo"
                                    onClick={() => { this.submit() }}
                                    size="lg"
                                >
                                    Sign out
                      </Button>
                                </CardTitle>

                            </CardHeader>
                            <CardBody >
                                <InputGroup
                                    className={
                                        "no-border" + (this.state.firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-user"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
            

                                

                            </CardFooter>
                        </Form>
                    </Card>
                </Row >

            </>
        );
    }

}
export default Login;