import React from "react";
import classes from "./Home.module.css";

// reactstrap components
import {
    Row,
    Button,
    Container,
    Col,
    Modal
} from "reactstrap";

// core components
import TransparentFooter from "../../components/Footer/TransparentFooter";
import Signup from "../../components/Signup/Signup";
function Home() {
    const [modal2, setModal2] = React.useState(false);
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
                                <Button className="btn-round " color="purple" outline type="button" onClick={() => setModal2(true)}>

                                    Register now
                                    <i className="fas fa-sign-in-alt"></i>

                                </Button>
                                <Modal className="card-signup" style={{ backgroundColor: '#4b86b4', marginTop: '18px' }}
                                    toggle={() => setModal2(false)}
                                    isOpen={modal2}
                                >

                                    <Signup />

                                </Modal>
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
