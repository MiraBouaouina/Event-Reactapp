import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ModalNotif from '../Modals/ModalNotif';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('')


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClose = () => {
        setShowModal(false)

    };

    const signupHandler = (info) => {

        console.log(info)
        if (info.firstName === "" || info.lastName === "" || info.userName === "" || info.password === "") {
            setErrorMessage("Complete all fields")

        } else {
            setErrorMessage("Congrats, your account has been created !")

        }
        setShowModal(true) // to show the modal

    }
    const classes = useStyles();



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
        <div>
            <ModalNotif
                show={showModal}
                handleClose={handleClose}
                message={errorMessage} />
            <div className="page-header clear-filter" filter-color="#4a4a4a">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/event3.jpg") + ")"
                    }}>

                </div>
                <Container component="main" maxWidth="xs">

                    <div className={classes.paper}>

                        <Typography component="h1" variant="h5" >
                            Sign up
                        </Typography>

                        <Grid className={classes.form} container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    id="firstName"
                                    autoComplete="fname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="lastName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="userName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Username"
                                    name="username"
                                    autoComplete="lname"

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput

                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>

                            </Grid>

                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => {
                                signupHandler({
                                    firstName: document.getElementById('firstName').value,
                                    lastName: document.getElementById('lastName').value,
                                    userName: document.getElementById('userName').value,
                                    password: document.getElementById('password').value
                                })
                            }}
                        >
                            Sign Up
                            </Button>


                    </div>


                </Container>

            </div>

        </div>
    );
}