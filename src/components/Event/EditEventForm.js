import React from "react";
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

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstFocus: false,
            lastFocus: false,
            userFocus: false,
            passFocus: false,
            showPassword: false,
            heureFocus: false,
            event_name: this.props.event.event_name,
            start_date: this.props.event.start_date,
            end_date: this.props.event.end_date,
            heure_deb: "",
            heure_fin: "",
            place: this.props.event.place,
            description: this.props.event.description,
            redirectToEvents: false
        }
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

    editEvent() {
        let user = window.localStorage.getItem('user');
        let currentDate = new Date();
        let start = new Date(this.state.start_date);
        console.log(currentDate);
        if (currentDate > start) {
            alert('Choose another date please')

        }
        else {

            let event = {
                id: this.props.event.id,
                event_name: this.state.event_name,
                start_date: this.state.start_date,
                end_date: this.state.start_date,
                heure_deb: this.state.heure_deb,
                heure_fin: this.state.heure_fin,
                place: this.state.place,
                description: this.state.description,
                creator_id: JSON.parse(user).id

            };
            console.log(event)
            axios.post('http://localhost/eventsWebSite-api/event/update.php', event)
                .then(response => {
                    console.log('event updated');
                    alert('Event updated successfully ');
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }
    render() {
        const redirectToEvents = this.state.redirectToEvents;
        if (redirectToEvents === true) {

            window.location.reload();
            return <Redirect to="/Events" />
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
                    <Col className="ml-auto mr-auto" md="12">
                        <Card className="card-login card-plain">
                            <Form action="" className="form" method="">
                                <CardHeader >
                                    <h2>
                                        Edit Event
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
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input

                                            defaultValue={this.props.event.event_name}
                                            type="text"
                                            onChange={(item) => this.setState({ event_name: item.target.value })}
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
                                            type="date"
                                            onChange={(item) => this.setState({ start_date: item.target.value })}
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
                                            </InputGroupText>
                                        </InputGroupAddon>

                                        <Input
                                            type="time"
                                            onChange={(item) => this.setState({ heure_deb: item.target.value })}
                                            onFocus={() => this.setState({ userFocus: true })}
                                            onBlur={() => this.setState({ userFocus: false })}
                                        ></Input>
                                    </InputGroup>
                                    <InputGroup
                                        className={
                                            "no-border input-lg" +
                                            (this.state.heureFocus ? " input-group-focus" : "")
                                        }
                                    >
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            </InputGroupText>
                                        </InputGroupAddon>

                                        <Input
                                            type="time"
                                            onChange={(item) => this.setState({ heure_fin: item.target.value })}
                                            onFocus={() => this.setState({ heureFocus: true })}
                                            onBlur={() => this.setState({ heureFocus: false })}
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
                                                defaultValue={this.props.event.place}
                                                onChange={(item) => this.setState({ place: item.target.value })}
                                                onFocus={() => this.setState({ passFocus: true })}
                                                onBlur={() => this.setState({ passFocus: false })}
                                            ></Input>
                                        </InputGroup>

                                        <InputGroup>
                                            <Input type="textarea"
                                                defaultValue={this.props.event.description}
                                                onChange={(item) => this.setState({ description: item.target.value })}
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
                                        onClick={() => { this.editEvent() }}

                                    >
                                        Edit Event
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
export default EditEventForm;