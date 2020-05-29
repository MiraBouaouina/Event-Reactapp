import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

// reactstrap components
import {
    Row,
    Button,
    Container,
    Col
} from "reactstrap";

// core components
import TransparentFooter from "../../components/Footer/TransparentFooter";
import NavbarMain from "../../components/Navbars/NavbarMain";
import Signup from "../../components/Signup/Signup";
function Home() {

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>

            <div className="page-header clear-filter" filter-color="#9933ff">
                <NavbarMain />
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/event3.jpg") + ")"
                    }}>

                </div>
                <Container className={classes.contenu}>
                    <div className="content-center brand">

                        <h3 className="h1-seo">KEEP YOUR EYE</h3>
                        <h1>ON THE MAIN EVENT </h1>
                        <Row>
                            <Col className={classes.header} md="8">
                                <p >
                                    Create your own event or reserve your ticket !
                                </p>
                            </Col>
                            <Col >
                                <Link to="/Signup" >
                                    <Button className="btn-round " color="purple" outline type="button">

                                        Register now
                                    <i className="fas fa-sign-in-alt"></i>

                                    </Button>
                                </Link>

                            </Col>
                        </Row>
                    </div>

                </Container>
                <TransparentFooter />

            </div >
        </>
    );
}
export default Home;
