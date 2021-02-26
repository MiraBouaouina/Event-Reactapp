import React from "react";
import classes from "./Signup.module.css";
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col
} from "reactstrap";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstFocus: false,
            lastFocus: false,
            userFocus: false,
            passFocus: false,
            showPassword: false,
            user_name: "",
            pwd: "",
            first_name: "",
            last_name: "",
            redirectToSignIn: false
        }

    }
    register() {
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_name: this.state.user_name,
            pwd: this.state.pwd

        }
        //create account 
        axios.post('http://localhost/eventsWebSite-api/user/signup.php', user)
            .then(response => {
                this.setState({ redirectToSignIn: true });
            })
            .catch(error => {
                console.log(error)
            })

    }
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });

    };
    componentDidMount() {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };

    }
    render() {
        const redirectToSignIn = this.state.redirectToSignIn;
        if (redirectToSignIn === true) {
            return <Redirect to="/login" />
        }
        return (

            <div className="page-header clear-filter" filter-color="#5b14ff">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/event3.jpg") + ")"
                    }}
                ></div>

                <Container>
                    <Col className="ml-auto mr-auto" md="4">
                        <Card className="card-login card-plain">
                            <Form action="" className="form" method="">
                                <CardHeader >
                                    <h1>
                                        Sign Up
                                </h1>
                                </CardHeader>
                                <CardBody>
                                    <InputGroup
                                        className={
                                            "no-border input-lg" +
                                            (this.state.firstFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input

                                            placeholder="First Name..."
                                            type="text"
                                            onChange={(item) => { this.setState({ first_name: item.target.value }) }}

                                            onFocus={() => this.setState({ firstFocus: true })}
                                            onBlur={() => this.setState({ firstFocus: false })}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border input-lg" +
                                            (this.state.lastFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Last Name..."
                                            type="text"
                                            onChange={(item) => { this.setState({ last_name: item.target.value }) }}
                                            onFocus={() => this.setState({ lastFocus: true })}
                                            onBlur={() => this.setState({ lastFocus: false })}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border input-lg" +
                                            (this.state.userFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Username..."
                                            type="text"
                                            onChange={(item) => { this.setState({ user_name: item.target.value }) }}
                                            onFocus={() => this.setState({ userFocus: true })}
                                            onBlur={() => this.setState({ userFocus: false })}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup style={{ marginBottom: "4px" }}
                                        className={
                                            "no-border input-lg" +
                                            (this.state.passFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Password..."
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            onChange={(item) => { this.setState({ pwd: item.target.value }) }}
                                            onFocus={() => this.setState({ passFocus: true })}
                                            onBlur={() => this.setState({ passFocus: false })}
                                        ></Input>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText style={{ padding: "15px 16px 15px" }}>
                                                <i

                                                    className={this.state.showPassword ? 'far fa-eye-slash' : 'fa fa-eye'}
                                                    onClick={this.handleClickShowPassword}

                                                >
                                                </i>
                                            </InputGroupText>


                                        </InputGroupAddon>
                                    </InputGroup>
                                </CardBody>
                                <CardFooter >
                                    <Button
                                        block
                                        className="btn-round"
                                        color="info"
                                        size="lg"
                                        onClick={() => { this.register() }}

                                    >
                                        Get Started
                    </Button>
                                    <div className="pull-left">
                                        <h6>
                                            <Link
                                                compon className="link"
                                                to="/home"                                        >
                                                Go back
                                        </Link>
                                        </h6>
                                    </div>

                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Container>
            </div >
        );
    }
}

export default Signup;