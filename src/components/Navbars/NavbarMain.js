import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login.js";
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function NavbarMain() {
  const [modal1, setModal1] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>

          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              <NavLink to="/home" tag={Link}>
                We Event Together
                </NavLink>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/home" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => setModal1(true)}
                  id="sign-in">
                  <i className="now-ui-icons users_circle-08"></i>
                  <p className="d-lg-none d-xl-none">Sign in</p>
                </NavLink>
                <UncontrolledTooltip target="#sign-in">
                  Sign in
                      </UncontrolledTooltip>
              </NavItem>
              <Modal className="card-signup" style={{ backgroundColor: '#4b86b4', marginTop: '18px' }}
                toggle={() => setModal1(false)}
                isOpen={modal1}
              >

                <Login />

              </Modal>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMain;