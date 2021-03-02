/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <footer className="footer footer-default" >
            <Container>
                <nav>
                    <ul>
                        <li>
                            <Link to="/apropos"

                            >
                                About Us
                            </Link>
                        </li>

                    </ul>
                </nav>
                <div className="copyright" id="copyright">
                    © {new Date().getFullYear()}, Designed by{" "} US. Coded by{" "}US.
                </div>

            </Container>
        </footer >
    );
}

export default Footer;