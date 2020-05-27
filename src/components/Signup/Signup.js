import React from "react";
import classes from "./Signup.module.css"
// reactstrap components
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
    Container,
    Row
} from "reactstrap";

// core components

class Signup extends React.Component {



    state = {
        firstFocus: false,
        lastFocus: false
    }
    render() {

        return (
            <>
                <Row>
                    <Card className="card-signup" style={{ backgroundColor: '#c3afc7' }}>
                        <Form action="" className="form" method="">
                            <CardHeader className="text-center">
                                <CardTitle tag="h3">
                                    Create an account
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
                                            <i className="fas fa-user-edit"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input

                                        placeholder="First name..."
                                        type="text"
                                        onFocus={() => this.setState({ firstFocus: true })}
                                        onBlur={() => this.setState({ firstFocus: false })}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "no-border" + (this.state.firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-user-edit"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input

                                        placeholder="Last name..."
                                        type="text"
                                        onFocus={() => this.setState({ firstFocus: true })}
                                        onBlur={() => this.setState({ firstFocus: false })}
                                    ></Input>
                                </InputGroup>
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
                                        onFocus={() => this.setState({ lastFocus: true })}
                                        onBlur={() => this.setState({ lastFocus: true })}
                                    ></Input>
                                </InputGroup>



                            </CardBody>
                            <CardFooter className="text-center">
                                <Button
                                    className="btn-neutral btn-round"
                                    style={{ color: 'grey' }}
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                    size="lg"
                                >
                                    Sign Up
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Row >

            </>
        );
    }

}

export default Signup;