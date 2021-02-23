import React from "react";
import classes from "./Participations.module.css";
import axios from 'axios';
import Event from "../../components/Event/Event";
import {
    Container,
    Button

} from "reactstrap";

class Participations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events_ids: [],
            events: []
        }

        this.user = { //connected user profile
            id: "",
            first_name: "",
            last_name: "",
            user_name: "",
            admin: ""
        };
        this.tabEvents = [];

    }

    componentDidMount() {
        let check = window.localStorage.getItem('user');
        check = JSON.parse(check);

        this.user.id = check.id;
        this.user.first_name = check.first_name;
        this.user.last_name = check.last_name;
        this.user.user_name = check.user_name;
        this.user.admin = check.admin;

        let user_id = { "user_id": this.user.id };

        axios.post('http://localhost/eventsWebSite-api/participate/user.php', user_id)
            .then(response => {
                this.setState({ events_ids: response.data });
                console.log("state events_ids inside axios", this.state.events_ids);
                //inner loop to get each event info

                let data = this.state.events_ids;
                console.log("state events_ids outside axios", this.state.events_ids);
                data.map((participation) => {
                    console.log("--------------INSIDE DATA MAP-----------");

                    const event_id = { "id": participation.event_id }
                    console.log("event_id", event_id);

                    axios.post('http://localhost/eventsWebSite-api/event/fetch.php', event_id)
                        .then(response => {
                            console.log(response);
                            this.tabEvents.push(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        });

                    console.log("tabEvents inside axios", this.tabEvents);
                });

            })
            .catch(error => {
                console.log(error)
            });
        //if you call setstate in  fct called by render it results in an infinite loop

    }

    deleteParticipation(data) {
        let participation = {
            "event_id": data.id,
            "user_id": this.user.id
        };
        axios.post('http://localhost/eventsWebSite-api/participate/delete.php', participation)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error)
            });
    }

    createPartictipantsTable() {
        let table = [];

        console.log("-------------IN CREATE Participations TABLE--------------")

        console.log("state", this.state.events_ids);
        console.log("tabEvents outside axios", this.tabEvents);
        for (let i = 0; i < this.tabEvents.length; i++) {
            table.push(<tr> <td><Event data={this.tabEvents[i]} loadEvent={this.props.loadEvent} /> </td>
                <td> <Button onClick={() => this.deleteParticipation(this.tabEvents[i])}
                    id="delete-event">
                    Delete Participation
                                        </Button>
                </td>
            </tr>);
        }


        console.log("table", table);
        console.log("--------------------------------------------------")
        return table;



    }

    render() {
        return (
            <Container className={classes.contenu}>


                <table>
                    {this.createPartictipantsTable()}
                </table>


            </Container >
        );
    }
}
export default Participations;