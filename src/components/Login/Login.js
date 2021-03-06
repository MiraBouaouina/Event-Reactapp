import React from "react";
import classes from "./Login.module.css";
import { Link, Redirect } from "react-router-dom";
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

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstFocus: false,
            lastFocus: false,
            isAuth: false,
            redirectToEvents: false,
            username: "",
            password: ""
        }

        console.log("---------login BEFORE--------");
        console.log(this.props);
        console.log("-----------------");

    }

    submit() {
        const user = {
            user_name: this.state.user_name,
            pwd: this.state.pwd
        }
        axios.post('http://localhost/eventsWebSite-api/user/signin.php', user)
            .then(response => {
                let data = response.data;
                console.log("---------login DATA FROM AXIOS RESPONSE--------");
                console.log(data);
                console.log("--------------------------------------");
                if (true) {
                    this.props.loadUser(data);
                    this.setState({ redirectToEvents: true });
                    console.log("---------login AFTER--------");
                    console.log(this.props);
                    console.log("-----------------");

                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const redirectToEvents = this.state.redirectToEvents;
        if (redirectToEvents === true) {
            return <Redirect to="/Events" />
        }

        return (

            <>
                <Row>
                    <Card className="card-signup" style={{ backgroundColor: '#a8a7a7' }}> {/*95b3b8 aaaaaa*/}
                        < Form action="" className="form" method="">
                            <CardHeader className="text-center">
                                <CardTitle tag="h3" style={{ color: '#e6e7eb' }}>
                                    Sign In
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
                                    <Input

                                        placeholder="Username..."
                                        type="text"
                                        onChange={(item) => { this.setState({ user_name: item.target.value }) }}
                                        onFocus={() => this.setState({ firstFocus: true })}
                                        onBlur={() => this.setState({ firstFocus: false })}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "no-border" + (this.state.lastFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-lock"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password..."
                                        type="password"
                                        onChange={(item) => { this.setState({ pwd: item.target.value }) }}
                                        onFocus={() => this.setState({ lastFocus: true })}
                                        onBlur={() => this.setState({ lastFocus: true })}
                                    ></Input>
                                </InputGroup>
                                <strong className={classes.not}>
                                    Not a member?
                                <Link to="/Signup" variant="body2">
                                        <strong> Create an account</strong>
                                    </Link>

                                </strong>

                            </CardBody>
                            <CardFooter className="text-center">

                                <Button
                                    className="btn-round btn-neutral"
                                    color="default"
                                    href="#pablo"
                                    onClick={() => { this.submit() }}
                                    size="lg"
                                >
                                    Get Started
                      </Button>

                            </CardFooter>
                        </Form>
                    </Card>
                </Row >

            </>
        );
    }

}
export default Login;