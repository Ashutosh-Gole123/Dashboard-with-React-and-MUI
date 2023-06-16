import React from "react";
import {
  Box,
  Button,
  Grid,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  styled,
  useTheme,
  Divider,
} from "@mui/material";
import "../css/main.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Main() {
  const theme = useTheme();

  return (
    <>
      <Box
        className="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2} sx={{ marginTop: theme.spacing(15) }}>
          <Grid item xs={12} md={8} xl={8}>
            <Item className="list">
              <Box>
                <Typography variant="h4" component="h2" sx={{ padding: "5px" }}>
                  Multi State Cooperative Societies ACT, 2002{" "}
                </Typography>
                <Divider />
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ textAlign: "left", padding: "8px" }}
                >
                  An Act to consolidate and amend the law relating to
                  co-operative societies, with objects not confined to one State
                  and serving the interests of members in more than one State,
                  to facilitate the voluntary formation and democratic
                  functioning of co-operatives as people's institutions based on
                  self-help and mutual aid and to enable them to promote their
                  economic and social betterment and to provide functional
                  autonomy ,was being felt necessary by the various cooperative
                  societies, and federation of various cooperative societies as
                  well as by the Government. In order to achieve the objective
                  The Multi State Cooperative Societies Bill was introduced in
                  the Parliament.The bill having been passed by both the Houses
                  of Parliament received the assent of the President on 3rd July
                  2002 and it came on the Statute Book as The Multi State
                  Cooperative Societies ACT 2002 (39 of 2002).
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Item className="list">
              {" "}
              <Box>
                <Typography variant="h4" component="h2" sx={{ padding: "5px" }}>
                  Latest Hearings{" "}
                </Typography>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Shree Ninaidevi Multi Specialty Cooperative Hospital and Research Center Ltd.,MAHARASHTRA" />
                </ListItemButton>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Global Federation of Natural Farming Cooperative Ltd.,UTTAR PRADESH" />
                </ListItemButton>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Tamil Nadu Multi State Societies Cooperative Housing Federation Ltd.,TAMIL NADU" />
                </ListItemButton>
                <Divider />
                <Box sx={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{
                      padding: ".6rem",
                      margin: ".3rem",
                    }}
                  >
                    Read More
                  </Button>{" "}
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={8} xl={8}>
            <Item
              className="list"
              sx={{
                overflow: "hidden",
              }}
            >
              {" "}
              <Typography variant="h4" component="h2">
                News/Events{" "}
              </Typography>
              <Box sx={{ overflow: "hidden" }}>
                <Box className="marqueeContainer">
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText
                      primary="Hon’ble Delhi High Court vide Order dated 22.03.2022 passed
                    in W.P. (C) 669/2021, W.P. (C) 670/2021; W.P. (C) 817/2021
                    has restrained Sahara Credit Cooperative Society Ltd.,
                    Lucknow, Uttar Pradesh, Saharayn Universal Multipurpose
                    Society Ltd., Bhopal, Madhya Pradesh & Humara India Credit
                    Cooperative Society Ltd., Kolkata, West Bengal from
                    collecting any deposits from the public."
                    />
                  </ListItemButton>
                  <Divider />
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText
                      primary="
                      Notification : Appointment of Shri Vijay Kumar,
                      IAS(AGMUT:92) as Central Registrar of Cooperative Societies"
                    />
                  </ListItemButton>
                  <Divider />

                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText
                      primary=" 
                    Filling of Annual Returns for the year 2020-21 and earlier
                    years under section 120 of the MSCS Act,2002"
                    />
                  </ListItemButton>
                  <Divider />

                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText
                      primary="
                      Under Section 97 of the Multi State Co-operative Societies
                      Act,2002"
                    />
                  </ListItemButton>
                  <Divider />

                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText
                      primary="
                      
                    Liquidator Change Order_subh kalyan Multistate Cooperative
                    Credit Society Ltd dated 05.06.2023.pdf"
                    />
                  </ListItemButton>
                  <Divider />

                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText
                      primary="
                      
                    Provisions of Multi-State Cooperative Societies Act,2002 &
                    Rules made there under for Liquidation proceedings of a
                    multi-state cooperative society-reg."
                    />
                  </ListItemButton>
                  <Divider />

                  {/* Add more lines of text as needed */}
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Item className="list">
              {" "}
              <Box>
                <Typography variant="h4" component="h2" sx={{ padding: "5px" }}>
                  Latest Certificates{" "}
                </Typography>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Chambal Agriculture Marketing Cooperative Ltd,MADHYA PRADESH" />
                </ListItemButton>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Heaven Multi State Agro Cooperative Society Ltd,UTTAR PRADESH" />
                </ListItemButton>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Lakshyavedh multi specialty cooperative Hospital and Research Center Ltd. society ltd.,MAHARASHTRA" />
                </ListItemButton>
                <Divider />
                <Box sx={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{
                      padding: ".6rem",
                      margin: ".3rem",
                    }}
                  >
                    Read More
                  </Button>{" "}
                </Box>
              </Box>
            </Item>
            <Item
              className="list"
              sx={{
                marginTop: "1rem",
              }}
            >
              {" "}
              <Box>
                <Typography variant="h4" component="h2" sx={{ padding: "5px" }}>
                  Latest Order Sheet
                </Typography>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Home Multi State Cooperative Housing Society Ltd" />
                </ListItemButton>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Lokmanya Multipurpose Cooperative Society Limited, Belgaum, Karnataka: Order Sheet of Hearing held on 14.02.2022" />
                </ListItemButton>
                <Divider />
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Lotus Agricultural and Marketing Cooperative Society Ltd., Pitampura, New Delhi: Order Sheet of Hearing held on 04.02.2022" />
                </ListItemButton>
                <Divider />
                <Box sx={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{
                      padding: ".6rem",
                      margin: ".3rem",
                    }}
                  >
                    Read More
                  </Button>{" "}
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Main;
