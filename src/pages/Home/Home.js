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
class Home extends React.Component {
    state = {

    }
    //Component did mount

    componentDidMount() {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };

    }
    //Component did update

    render() {

        return (

            <div className="page-header clear-filter" filter-color="#5b14ff"> {/*9933ff*/}
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
                                <p>
                                    Create your own event or reserve your ticket !
                            </p>
                            </Col>
                            <Col >
                                <Link to="/signup" >
                                    <Button className="btn-round " color="purple" outline>

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
        );
    }
}
export default Home;
