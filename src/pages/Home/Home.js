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
     constructor(props) {
        super(props);
        this.user={ //connected user profile
                id:"",
                first_name: "",
                last_name: "",
                user_name: "",
                admin: ""
                };
        this.button=    <Link to="/signup" >
                                    <Button className="btn-round " color="purple" outline>

                                        Register now
                                    <i className="fas fa-sign-in-alt"></i>

                                    </Button>
                                </Link>;
        let check = window.localStorage.getItem('user');
        check = JSON.parse(check);

        this.user.id= check.id;
        this.user.first_name= check.first_name;
        this.user.last_name= check.last_name;
        this.user.user_name= check.user_name;
        this.user.admin= check.admin;
        
        if (this.user.id) {
            this.button=
             <Link to="/Events" >
               <Button className="btn-round " color="purple" outline>
                    See All Events!
                  <i className="fas fa-sign-in-alt"></i>

                </Button>
             </Link>;

        }

                                    
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

    render() {

        return (

            <div className="page-header clear-filter" filter-color="#5b14ff"> {/*9933ff*/}
                <NavbarMain loadUser={this.props.loadUser} user={this.props.user}/>
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
                                    Reserve your seat NOW !
                            </p>
                            </Col>
                            <Col >

                                {this.button}
                                
                                    

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
