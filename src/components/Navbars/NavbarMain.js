import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login.js";
import classes from "./NavbarMain.module.css";
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
class NavbarMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      navbarColor: "navbar-transparent",
      collapseOpen: false
    };
    this.user = { //connected user profile
      id: "",
      first_name: "",
      last_name: "",
      user_name: "",
      admin: ""
    };

    this.eventCreateButton = <></>;

    this.signToggle =
      <NavItem>
        <NavLink onClick={() => this.setState({ modal1: true })}
          id="sign-in">
          Sign in
                </NavLink>
      </NavItem>
      ;


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

      this.signToggle = <>
        <NavItem>
          <NavLink onClick={() => this.signOut()}>
            Sign Out
                                </NavLink>
        </NavItem>

        <NavItem>
          <NavLink style={{ display: 'flex' }} to="/profile" tag={Link}>
            <i className="now-ui-icons users_circle-08"></i>
            <span>{this.user.first_name}</span>
          </NavLink>
        </NavItem>
      </>

    }


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

    console.log("---------NAV BAR SECOND LEAVE--------");
    console.log(user);
    console.log("--------------------------------");

    window.location.reload();

  }


  componentDidMount() {
    if (
      document.documentElement.scrollTop > 399 ||
      document.body.scrollTop > 399
    ) {
      this.setState({ NavbarColor: "" });
    } else if (
      document.documentElement.scrollTop < 400 ||
      document.body.scrollTop < 400
    ) {
      this.setState({ NavbarColor: "navbar-transparent" });
    }
    window.addEventListener("scroll", this.updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", this.updateNavbarColor);
    };



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

    return (
      <>
        {this.state.collapseOpen ? (
          <div
            id="bodyClick"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              this.setState({ collapseOpen: false });
            }}
          />
        ) : null}
        <Navbar className={"fixed-top " + this.state.navbarColor} color="info" expand="lg">
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
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  this.setState({ CollapseOpen: !this.state.collapseOpen });
                }}
                aria-expanded={this.state.collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
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
export default NavbarMain;