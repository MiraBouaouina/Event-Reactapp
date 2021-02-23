/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

// reactstrap components
import {
    Container
} from "reactstrap";

function TransparentFooter() {
    return (
        <footer className="footer">
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
                    © {new Date().getFullYear()}, Designed by{" "} US . Coded by{" "}US.
                </div>

            </Container>
        </footer >
    );
}

export default TransparentFooter;

