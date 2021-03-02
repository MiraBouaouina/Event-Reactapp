import React from "react";
import classes from "./Apropos.module.css";
import {
    Container
} from "reactstrap";

//core components
import NavbarSecond from "../../components/Navbars/NavbarSecond";
import Footer from "../../components/Footer/Footer";
import logo1 from '../../assets/img/react.png';
import logo2 from '../../assets/img/php.png';

class Apropos extends React.Component {


    render() {

        return (
            <div>
                <NavbarSecond user={this.props.user} loadUser={this.props.loadUser} />
                <Container className={classes.contain}>
                    <div>

                        <h3>
                            Les développeurs
                        </h3>
                        <p>
                            FIA2-01
                        </p>
                        <p>Amira Bouaouina</p>

                        <p>Cyrine Gammoudi</p>
                        <h3>
                            A propos du site web
                        </h3>
                        <p>Nous avons développé un site web dynamique pour les événements. </p>
                        <h5>Les technologies utilisées dans ce projet :</h5>
                        <img src={logo1} />
                        <img src={logo2} />

                        <p>Reactjs (Frontend) et PHP7 native (Backend).</p>
                        <h4>
                            Comment ça marche?
                        </h4>
                        <p><strong>L'administrateur</strong> de site web a les privilèges de publier,modifier et supprimer un événement. </p>
                        <p><strong>Un utilisateur simple </strong>peut participer à un événement publié et peut annuler sa participation à tout moment.</p>
                        <p><strong>Un visiteur</strong> qui n'a pas un compte ne peut que consulter la liste des événements crées et peut créer son compte pour participer.</p>


                    </div>


                </Container >
                <Footer />
            </div >


        );
    }

}
export default Apropos;