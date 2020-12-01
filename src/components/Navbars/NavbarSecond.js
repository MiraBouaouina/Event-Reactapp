import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login.js";
import classes from "./NavbarSecond.module.css";
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

function NavbarSecond() {
    const [modal1, setModal1] = React.useState(false);
    const [collapseOpen, setCollapseOpen] = React.useState(false);

    return (
        <>

            <Navbar className={classes.navb} expand="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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

                    </div>
                    <button
                        className="navbar-toggler navbar-toggler"
                        onClick={() => {
                            document.documentElement.classList.toggle("nav-open");
                            setCollapseOpen(!collapseOpen);
                        }}
                        aria-expanded={collapseOpen}
                        type="button"
                    >
                        <i className="fas fa-bars" style={{ color: 'white' }}></i>
                    </button>
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
                                <NavLink to="/events" tag={Link}>
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
                            <Modal className="card-signup" style={{ backgroundColor: '#4b86b4', marginTop: '20px' }}
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

export default NavbarSecond;