/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
    return (
        <footer className="footer" style={{ backgroundColor: '#434345', color: 'white' }} >
            <Container>
                <nav>
                    <ul>
                        <li>
                            <a
                                href="http://presentation.creative-tim.com?ref=nukr-transparent-footer"
                                target="_blank"
                            >
                                About Us
              </a>
                        </li>
                        <li>
                            <a
                                href="http://blog.creative-tim.com?ref=nukr-transparent-footer"
                                target="_blank"
                            >
                                Blog
              </a>
                        </li>
                    </ul>
                </nav>

            </Container>
        </footer>
    );
}

export default Footer;