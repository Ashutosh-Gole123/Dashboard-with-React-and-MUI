import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import LockOutLinedIcon from "@mui/icons-material/LockOutlined";
function Login() {
  const theme = useTheme();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
    width: 56,
    height: 56,
  };
  const btnStyle = {
    margin: "8px 0",
  };
  return (
    <>
      <Grid
        sx={{
          marginTop: theme.spacing(15),
        }}
      >
        <Paper
          elevation={10}
          style={paperStyle}
          sx={{
            "@media (max-width:1000px)": {
              height: "40vh !important",
            },

            "@media (max-width:900px)": {
              height: "60vh !important",
            },
          }}
        >
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutLinedIcon sx={{ fontSize: 30, color: "white" }} />
            </Avatar>
            <Typography
              variant="h5"
              component={"h2"}
              sx={{ padding: theme.spacing(2) }}
            >
              {" "}
              User Login
            </Typography>
          </Grid>

          <TextField
            label="Username"
            placeholder="Enter User Name"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter User password"
            variant="standard"
            fullWidth
            required
            sx={{ marginTop: "8px" }}
          />
          <FormControlLabel
            control={<Checkbox name="checked" color="primary" />}
            label="Remember me"
            sx={{ marginTop: "8px" }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#" style={{ textDecoration: "none" }}>
              Forgot Password ?
            </Link>
          </Typography>
          <Typography>
            Do you have an acoount ?
            <Link href="#" style={{ textDecoration: "none" }}>
              Sign up{" "}
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
