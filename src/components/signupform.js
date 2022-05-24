import React from "react";
import "../App.css";
import "./signupform.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  input: { color: "white" },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#ffff",
    },
  },
});

export default function signupform() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("firstName"),
      description: data.get("description"),
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
              spacing={0}
              direction="column"
              justifyContent="flex-start"
            >
              <Grid item xs={12} container spacing={0}>
                <Grid item xs={7}>
                  <div className="sendform">
                    <Box
                      sx={{
                        marginTop: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    >
                      <Typography
                        component="h1"
                        className="formheading"
                        variant="h5"
                        color="rgb(216, 216, 216)"
                        sx={{
                          marginTop: 3,
                        }}
                      >
                        Send us a message
                      </Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-name"
                              name="Name"
                              required
                              fullWidth
                              id="Name"
                              label="Name"
                              autoFocus
                              sx={extra}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              fullWidth
                              id="phoneNumber"
                              label="Phone Number"
                              name="phoneNumber"
                              sx={extra}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              sx={extra}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              multiline={true}
                              fullWidth
                              rows={3}
                              required
                              id="description"
                              name="description"
                              label="Description"
                              placeholder="Description"
                              autoComplete="Description"
                              variant="outlined"
                              sx={extra}
                              inputProps={{
                                style: { color: "white", height: "200px" },
                              }}
                              //   value={description}
                              //   onChange={(e) => setDescription(e.target.value)}
                            />
                          </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                          <Grid item sx={{ mt: 1 }}>
                            <Link href="#" variant="body2">
                              FAQ?
                            </Link>
                          </Grid>
                        </Grid>
                        <Button
                          id="submitb"
                          type="submit"
                          variant="outlined"
                          fullWidth
                          sx={{ mt: 2, mb: 3 }}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </div>
                </Grid>

                <Grid item xs={5}>
                  <div className="ourinformation">
                    <div>&emsp;</div>
                    <div className="information">
                      <div className="infoheading">Contact Information</div>
                      <div className="subinfoheading">
                        Fill up the form and our team will get back to you in 24
                        hours
                      </div>
                      <div className="info">
                        <i className="fas fa-address-book"></i>
                        &emsp;
                        <Link to="/"  className="linkinfo">+828 32232</Link>
                      </div>
                      <div className="info">
                        <i className="fas fa-envelope"></i>&emsp;
                        <Link to="/" className="linkinfo">aaaaa@gmail.com</Link>
                      </div>
                      <div className="info">
                        <i className="fab fa-instagram"></i>&emsp;
                        <Link to="/" className="linkinfo">CMP</Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Copyright sx={{ mt: 5 }} />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

// function signupform() {
//   return (

//     <div className='form'>
//       <h1>ADVENTURE AWAITS</h1>
//       <div id='text'>What are you waiting for?</div>

//     </div>
//   );
// }
