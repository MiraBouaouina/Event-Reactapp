import React from "react";
import classes from "../../pages/Event/Event.module.css";
import ShowEvent from "./ShowEvent";
import EditEventForm from "./EditEventForm";
import axios from 'axios';
import {
  Modal,
  Container,
  Button,

} from "reactstrap";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal3: false,
      modal2: false
    };
    this.options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    this.startdate = new Date(this.props.data.start_date);
    //this.enddate = new Date(this.props.data.end_date);

    this.user = { //connected user account
      id: "",
      first_name: "",
      last_name: "",
      user_name: "",
      admin: ""
    };

    this.buttons = <Button onClick={() => this.setState({ modal2: true })}
      id="show-event">
      Show event
                        </Button>;
    let check = window.localStorage.getItem('user');
    check = JSON.parse(check);
    if (check) {
      this.user.id = check.id;
      this.user.first_name = check.first_name;
      this.user.last_name = check.last_name;
      this.user.user_name = check.user_name;
      this.user.admin = check.admin;
    }
    if (this.user.id) {
      if (this.user.admin) {
        this.buttons = <>
          <Button onClick={() => this.setState({ modal2: true })}
            id="show-event">
            Show event
                        </Button>

          <Button onClick={() => this.setState({ modal3: true })}
            id="edit-event">
            Edit event
                        </Button>

          <Button onClick={() => this.deleteEvent()}
            id="delete-event">
            Delete event
                        </Button>
        </>;
      }
      else {
        this.buttons = <>
          <Button onClick={() => this.setState({ modal2: true })}
            id="show-event">
            Show event
                        </Button>
        </>;

      }
    }

  }


  deleteEvent() {
    let event = { "id": this.props.data.id };
    axios.post('http://localhost/eventsWebSite-api/event/delete.php', event)
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error)
      });
  }



  render() {
    return (
      <div>

        <Container>
          <div className={classes.owner}>

            <h5>
              {this.props.data.event_name}
            </h5>

            <i class="fas fa-calendar-week "></i>
            <h4> {this.startdate.toLocaleDateString('en-US', this.options)}</h4>

            <i class="fa fa-map-marker orange"></i>
            <h4> {this.props.data.place}</h4>

            {this.buttons}

            <Modal style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
              toggle={() => this.setState({ modal2: false })}
              isOpen={this.state.modal2}
            >

              <ShowEvent event={this.props.data} />

            </Modal>

            <Modal style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
              toggle={() => this.setState({ modal3: false })}
              isOpen={this.state.modal3}
            >

              <EditEventForm event={this.props.data} />

            </Modal>




          </div>


        </Container >



      </div >
    );



  }
}
export default Event;
