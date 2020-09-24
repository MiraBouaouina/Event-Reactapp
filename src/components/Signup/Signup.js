import React from "react";
import { Link } from "react-router-dom";

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

function SignUp() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <div className="page-header clear-filter" filter-color="blue">
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
                                        (firstFocus ? " input-group-focus" : "")
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
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (firstFocus ? " input-group-focus" : "")
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
                                        onFocus={() => setLastFocus(true)}
                                        onBlur={() => setLastFocus(false)}
                                    ></Input>
                                </InputGroup>
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (firstFocus ? " input-group-focus" : "")
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
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                </InputGroup>
                                <InputGroup style={{ marginBottom: "4px" }}
                                    className={
                                        "no-border input-lg" +
                                        (lastFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password..."
                                        type={showPassword ? 'text' : 'password'}
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                    <InputGroupAddon addonType="append">
                                        <Button color="secondary">
                                            I'm a button
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </CardBody>
                            <CardFooter >
                                <Button
                                    block
                                    className="btn-round"
                                    color="info"
                                    size="lg"
                                >
                                    Get Started
                    </Button>
                                <div className="pull-left">
                                    <h6>
                                        <Link
                                            className="link"
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
        </div>

    );
}
export default SignUp;