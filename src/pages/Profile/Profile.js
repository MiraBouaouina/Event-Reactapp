import React, { useState } from "react";
import classes from "./Profile.module.css";
import classnames from 'classnames';
import axios from 'axios';

// reactstrap components
import {
    Container,
    Row,
    Col,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
//core components
import NavbarSecond from "../../components/Navbars/NavbarSecond";
import Aboutme from "../../components/Aboutme/Aboutme";
import Participations from "../../components/Participations/Participations";
import Footer from "../../components/Footer/Footer";

const Profile = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [user, setUser] = useState({});
    const inputRef = React.useRef(null)
    React.useEffect(() => {
        let check = window.localStorage.getItem('user');
        check = JSON.parse(check);
        let _user = {
            id: "",
            first_name: "",
            last_name: "",
            user_name: "",
            admin: "",
            photo: ""
        };

        _user.id = check.id;
        _user.first_name = check.first_name;
        _user.last_name = check.last_name;
        _user.user_name = check.user_name;
        _user.admin = check.admin;
        _user.photo = check.photo;
        setUser({
            ..._user
        })

    }, [])
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const uploadHandler = (event) => {
        const fd = new FormData()
        fd.append('image', event.target.files[0])
        fd.append('userId', user.id)
        axios.post('http://localhost/eventsWebSite-api/user/upload.php', fd)
            .then(res => {
                console.log(res)
                console.log('done');
                setUser({ ...user, photo: res.data });
                props.loadUser({ ...user, photo: res.data });

            }
            );

    }

    return (
        <div>
            <NavbarSecond user={props.user} loadUser={props.loadUser} />
            <Container>
                <div className={classes.head}>
                    <Row>
                        <Col md="2" xs="4">
                            <img
                                className={classes.img}

                                src={"http://localhost/eventsWebSite-api/" + user.photo}
                            ></img>

                        </Col>
                        <Col md="8" xs="8" style={{ marginTop: "20px" }}>
                            <h3>
                                {user.user_name}
                            </h3>

                            <input ref={inputRef} type="file" style={{ display: 'none' }} onChange={uploadHandler} />

                            <button className={classes.btn} onClick={() => {
                                inputRef.current.click();
                            }} >
                                Update image
                            </button>
                        </Col>
                    </Row>
                </div>
                <div className={classes.body}>

                    <Nav tabs style={{ display: 'flex', justifyContent: "center" }} >
                        <NavItem>
                            <NavLink
                                style={{ maxWidth: '150px' }}
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Infos
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                style={{ maxWidth: '150px' }}

                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Participations
                            </NavLink>
                        </NavItem>
                    </Nav>


                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Aboutme first_name={user.first_name} last_name={user.last_name} />
                        </TabPane>
                        <TabPane tabId="2">
                            <Participations />
                        </TabPane>
                    </TabContent>

                </div>

            </Container>
            <Footer />

        </div >
    );
}
export default Profile;