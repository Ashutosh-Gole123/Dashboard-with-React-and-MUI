import {
  Box,
  Grid,
  Link,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          bgcolor: "#1A2027",
          marginTop: theme.spacing(3),
          padding: theme.spacing(5),
          borderTop: "8px solid #023047",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={3} sx={{}}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="State Registrars " />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Societies in the Second Schedule" />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Complaint & Hearing Notice " />
              </ListItemButton>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Hearing Order Sheet " />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary=" Circulars" />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary=" Latest Certificates" />
              </ListItemButton>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Amendment (Bye Laws)" />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="  Notices (New Registration) " />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Rejection Orders " />
              </ListItemButton>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Feedback " />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="  RTI  " />
              </ListItemButton>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Other Links " />
              </ListItemButton>
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} xl={3}>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Contact Us " />
              </ListItemButton>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <Link style={{ color: "white", textDecoration: "none" }}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary=" Grievance  " />
              </ListItemButton>
            </Link>
          </Grid>
        </Grid>
        <Box
          sx={{
            marginLeft: theme.spacing(2),
            textAlign: "center",
            marginTop: theme.spacing(2),
          }}
        >
          <Typography variant="p">
            {" "}
            Designed and Developed by Agriculture Informatics Division, National
            Informatics Centre{" "}
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Disclaimer
            </Link>{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
