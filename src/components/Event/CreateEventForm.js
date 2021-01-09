import React from "react";
import { Link } from "react-router-dom";
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

class CreateEventForm extends React.Component {
    state = {
        firstFocus: false,
        lastFocus: false,
        userFocus: false,
        passFocus: false,
        showPassword: false,
        event_name: "",
        start_date: "",
        end_date: "",
        place: "",
        description: "",
        creator_id: ""

    }
    create() {
        const event = {
            event_name: this.state.event_name,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            place: this.state.place,
            description: this.state.description,
            //creator_id: this.props.creator_id

        }

        //post request 
        axios.post('http://localhost/EventsWebsite-API/event/signup.php', event) //CHNAGE THIS
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }

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

        return (

            <div className="page-header clear-filter" filter-color="#5b14ff">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/event3.jpg") + ")"
                    }}
                ></div>

                <Container>
                    <Col className="ml-auto mr-auto" md="12">
                        <Card className="card-login card-plain">
                            <Form action="" className="form" method="">
                                <CardHeader >
                                    <h2>
                                        Create Event
                                </h2>
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

                                            placeholder="Event Name..."
                                            type="text"
                                            onChange={(item) => { this.setState({ event_name: item.target.value }) }}

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
                                            placeholder="Start Date..." //Change to date fields!!!
                                            type="text"
                                            onChange={(item) => { this.setState({ start_date: item.target.value }) }}
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
                                            placeholder="End Date..."
                                            type="text"
                                            onChange={(item) => { this.setState({ end_date: item.target.value }) }}
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
                                       

                                        <InputGroup>
                                        <Input
                                            placeholder="Place..."
                                            onChange={(item) => { this.setState({ place: item.target.value }) }}
                                            onFocus={() => this.setState({ passFocus: true })}
                                            onBlur={() => this.setState({ passFocus: false })}
                                        ></Input>
                                        </InputGroup>

                                        <InputGroup>
                                        <Input type="textarea"
                                            placeholder="Description..."
                                            onChange={(item) => { this.setState({ description: item.target.value }) }}
                                            onFocus={() => this.setState({ passFocus: true })}
                                            onBlur={() => this.setState({ passFocus: false })}
                                        ></Input>
                                        </InputGroup>
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
                                        Create Event
                    </Button>
                                  
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Container>
            </div >

        );
    }
}

export default CreateEventForm;