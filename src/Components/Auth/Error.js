import { Avatar, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
function Error() {
  const theme = useTheme();
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 380,
    margin: "20px auto",
    backgroundColor: "#651fff",
  };
  const avatarStyle = {
    backgroundColor: "#f44336",
    width: 76,
    height: 76,
  };
  return (
    <Grid sx={{ marginTop: theme.spacing(15) }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <ErrorOutlineIcon sx={{ fontSize: 50, color: "white" }} />
          </Avatar>
          <Typography
            variant="h2"
            component={"h2"}
            sx={{ padding: theme.spacing(2) }}
          >
            {" "}
            404 Error
          </Typography>
          <Typography
            variant="h5"
            component={"h2"}
            sx={{ padding: theme.spacing(2) }}
          >
            {" "}
            Please Select Another Menu Link
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Error;
