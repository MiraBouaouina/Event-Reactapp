import React from "react";
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login/Login.js";
import classes from "./NavbarSecond.module.css";
import CreateEventForm from "../Event/CreateEventForm";
import {
  Modal,
  UncontrolledTooltip,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class NavbarSecond extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
      modal2: false,
      collapseOpen: false,
    };
    this.user = { //connected user profile
      id: "",
      first_name: "",
      last_name: "",
      user_name: "",
      admin: ""
    };

  }

  componentDidMount() {
    let check = window.localStorage.getItem('user');
    check = JSON.parse(check);
    if (check) {
      this.user.id = check.id;
      this.user.first_name = check.first_name;
      this.user.last_name = check.last_name;
      this.user.user_name = check.user_name;
      this.user.admin = check.admin;
    }

    this.signToggle =
      <NavItem>
        <NavLink onClick={() => this.setState({ modal1: true })}
          id="sign-in">
          Sign in
                </NavLink>
      </NavItem>
      ;

    if (this.user.id) {
      if (this.user.admin) {
        this.eventCreateButton =
          <>
            <NavItem className={classes.nvitem}>

              <NavLink onClick={() => this.setState({ modal2: true })}
                id="create-event">
                Create an event
                  <p className="d-lg-none d-xl-none"></p>
              </NavLink>

            </NavItem>

          </>;
      }

      this.signToggle = <React.Fragment>
        <NavItem>
          <NavLink onClick={() => this.signOut()}>
            Sign Out
                                </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/profile" tag={Link}>
            <i className="now-ui-icons users_circle-08">

            </i>
            {this.user.first_name}


          </NavLink>
        </NavItem>
      </React.Fragment>

    }
  }

  setModalhandler() {
    this.setState({
      modal2: true
    })
  }
  setCollapsehandler() {
    this.setState({
      collapseOpen: !this.state.collapseOpen

    })
  }


  signOut() {
    let user = {
      id: "",
      first_name: "",
      last_name: "",
      user_name: "",
      admin: ""
    };

    this.props.loadUser(user);
    this.setState({ toHome: true });

  }

  renderNavBar() {
    let navBar =
      <Nav navbar>

        {this.eventCreateButton}

        <Modal style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
          toggle={() => this.setState({ modal2: false })}
          isOpen={this.state.modal2}
        >

          <CreateEventForm user={this.props.user} />

        </Modal>
        <NavItem>
          <NavLink to="/home" tag={Link}>
            Home
                </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/events" tag={Link}>
            Events
                </NavLink>
        </NavItem>


        {this.signToggle}


        <Modal className="card-signup" style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
          toggle={() => this.setState({ modal1: false })}
          isOpen={this.state.modal1}
        >

          <Login loadUser={this.props.loadUser} />

        </Modal>

      </Nav>;
    return navBar;
  }

  render() {

    if (this.state.toHome) {

      return <Redirect to="/Home" />
    }
    return (
      <>

        <Navbar className={classes.navb} expand="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Container>

            <div className="navbar-translate">
              <NavbarBrand
                id="navbar-brand"
              >
                <NavLink to="/home" tag={Link}>
                  Events Together
                </NavLink>
              </NavbarBrand>
              <UncontrolledTooltip target="#navbar-brand">
                Designed by us. Coded by us
            </UncontrolledTooltip>

            </div>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                this.setCollapsehandler();
              }}
              aria-expanded={this.state.collapseOpen}
              type="button"
            >
              <i className="fas fa-bars" style={{ color: 'white' }}></i>
            </button>
            <Collapse
              className="justify-content-end"
              isOpen={this.state.collapseOpen}
              navbar
            >
              {this.renderNavBar()}
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }

}
export default NavbarSecond;