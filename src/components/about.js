import React from "react";
import "../App.css";
import "./about.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="rgb(216, 216, 216)"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        CMP
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const extra = {
  "& .MuiInputLabel-root": { color: "white" }, //styles the label
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { borderColor: "white" },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "#C4C4C4",
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffebee",
    },
    secondary: {
      main: "#cfd8dc",
    },
  },
});

export default function about() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="form-container">
        <div className="boxform">
          <Container component="main" maxWidth="md">
            <CssBaseline />
            <Grid
              container
              spacing={2}
              direction="column"
              justifyContent="flex-start"
            >
              <Grid item xs={12} container>
                <Grid item xs={12}>
                  <div className="text1"> About us </div>
                </Grid>
              </Grid>

              <Grid item xs={12} container spacing={2}>
                <Grid item xs={7}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor. , quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor. ,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor.
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={4}>
                  <div className="addphoto"></div>
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.aaaa */}
                </Grid>
              </Grid>
            </Grid>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="container py-5">
              <h2 className="h3 font-weight-bold">Some demo content</h2>
              <div className="row">
                <div className="col-lg-10 mb-4">
                  <p className="font-italic text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                  <p className="font-italic text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
                <div className="col-lg-8">
                  <p className="font-italic text-muted">
                    Lorem ipsum dolor sit amet, consectetur{" "}
                    <strong className="font-weight-bold text-dark">
                      adipisicing elit, sed{" "}
                    </strong>
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in{" "}
                    <strong className="font-weight-bold text-dark">
                      reprehenderit in voluptate{" "}
                    </strong>
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
