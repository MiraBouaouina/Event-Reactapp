/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
    return (
        <footer className="footer">
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
                <div className="copyright" id="copyright">
                    © {new Date().getFullYear()}, Designed by{" "} US . Coded by{" "}US.
                </div>

            </Container>
        </footer>
    );
}

export default TransparentFooter;

