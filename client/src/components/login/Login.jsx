import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from "axios";
import { FETCH } from "../../Fetch";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import './login.css'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    if (mail && password) {
      await Axios.post(`${FETCH}/login`, {
        mail_user: mail,
        user_password: password,
      })
        .then((res) => res.data)
        .then((data) => {
          let infoUser = JSON.stringify(data.result[0]);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", infoUser);
          document.location.reload();
        })
        .catch((err) => {
          confirmAlert({
            message: "Mot de passe ou adresse incorrect(e) ",
            buttons: [
              {
                label: "Ok",
              },
            ],
          });
        });
    } else {
      confirmAlert({
        message:
          "Veuillez entrer une adresse électronique et un mot de passe valides",
        buttons: [
          {
            label: "Ok",
          },
        ],
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="login">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => e.preventDefault()}>
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e) => {
                setMail(e.target.value);
              }}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onChange={(e) => {
                setPassword(e.target.value);
              }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            onClick={login}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button >
        </form>
      </div>
    </Container>
  );
}
