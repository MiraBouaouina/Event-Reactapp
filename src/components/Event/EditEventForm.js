import React from "react";
import { Link,  BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
            event_name: "",
            start_date: "",
            end_date: "",
            place: "",
            description: "",
            redirectToEvents: false
           }
        }
    create() {
        const event = {
            event_name: this.state.event_name,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            place: this.state.place,
            description: this.state.description,
            creator_id: this.props.user.id
        }
        console.log("--------CREATE EVENT FORM--------------");
        console.log(this.props);
        console.log("---------------------------------------");


        console.log(event);
        //post request 
        axios.post('http://localhost/eventsWebSite-api/event/create.php', event) //CHNAGE THIS
            .then(response => {
                console.log(response)
                this.setState({ redirectToEvents: true });
            })
            .catch(error => {
                console.log(error)
            });



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

        editEvent(){
        let user = window.localStorage.getItem('user');

        const event = {
            id: this.props.event.id,
            event_name: this.props.event.event_name,
            start_date: this.props.event.start_date,
            end_date: this.props.event.end_date,
            place: this.props.event.place,
            description: this.props.event.description,
            creator_id: JSON.parse(user).id
        };
        axios.post('http://localhost/eventsWebSite-api/event/update.php', event)
            .then(response => {
                 window.location.reload();
                })
            .catch(error => {
                console.log(error)
                });
      
    }
    render() {
        const redirectToEvents = this.state.redirectToEvents;
        if (redirectToEvents===true) {
               
               window.location.reload();
               return <Redirect to="/Events"/>
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
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input

                                            defaultValue={this.props.event.event_name}
                                            type="text"
                                            onChange={(item) => { this.props.event.event_name= item.target.value }}

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
                                            defaultValue={this.props.event.start_date}
                                            type="text"
                                            onChange={(item) => { this.props.event.start_date= item.target.value }}
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
                                            defaultValue={this.props.event.end_date}
                                            type="text"
                                            onChange={(item) => { this.props.event.end_date= item.target.value }}
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
                                            defaultValue={this.props.event.place}
                                            onChange={(item) => { this.props.event.place= item.target.value }}
                                            onFocus={() => this.setState({ passFocus: true })}
                                            onBlur={() => this.setState({ passFocus: false })}
                                        ></Input>
                                        </InputGroup>

                                        <InputGroup>
                                        <Input type="textarea"
                                            defaultValue={this.props.event.description}
                                            onChange={(item) => { this.props.event.description= item.target.value }}
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