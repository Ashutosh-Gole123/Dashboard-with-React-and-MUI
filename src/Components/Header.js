// import React, { useState } from "react";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import "../App.css";

import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import logo1 from "../images/emb.png";
import logo2 from "../images/MSCS_LOGO.png";
import { NavLink } from "react-router-dom";
import {
  Box,
  CardMedia,
  Typography,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  CssBaseline,
  Toolbar,
  IconButton,
  Link,
} from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";
// import MuiAppBar from "@mui/material/AppBar";
import { listdata } from "../data/list";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export default function Header() {
  const [openItem, setOpenItem] = React.useState(null);

  const handleClick = (itemId) => {
    setOpenItem(itemId === openItem ? null : itemId);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#54c416",
          boxShadow: "5px 5px 100px rgba(0,0,0,0.8)",
        }}
      >
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ml: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            <CardMedia
              component="img"
              height="100"
              image={logo2}
              sx={{
                width: "100px",
                "@media (max-width: 600px)": {
                  width: "60px",
                  height: "60px",
                },
              }}
              style={{
                objectFit: "contain",
                height: "100px", // Specify the height explicitly to maintain the aspect ratio
              }}
              alt="green iguana"
            />
            <Box
              className="header"
              sx={{
                margin: "10px",
                padding: "10px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                sx={{ color: "#f5f5f5" }}
              >
                MULTI-STATE CO-OPERATIVE SOCIETIES
              </Typography>
              <Typography variant="body2" sx={{ color: "#f5f5f5" }}>
                Ministry of Cooperation, Govt. of India
              </Typography>
            </Box>
            {/* */}
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {" "}
          <DrawerHeader
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <CardMedia
              component="img"
              height="100"
              image={logo1}
              sx={{
                width: "100px",
                borderRadius: "100%",
                backgroundColor: "white",
              }}
              style={{
                objectFit: "contain",
                height: "100px",
                // Specify the height explicitly to maintain the aspect ratio
              }}
              alt="green iguana"
            />
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {listdata.map((item) => (
              <div key={item.id}>
                {item.nestedItems.length > 0 ? (
                  <Link
                    className="navs"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {/* Content for Material-UI Link */}
                    <ListItemButton onClick={() => handleClick(item.id)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.primaryText} />
                      {item.nestedItems.length > 0 ? (
                        openItem === item.id ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : null}
                    </ListItemButton>
                  </Link>
                ) : (
                  <NavLink to={item.link} className="navs">
                    {/* Content for NavLink */}
                    <ListItemButton onClick={() => handleClick(item.id)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.primaryText} />
                      {item.nestedItems.length > 0 ? (
                        openItem === item.id ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : null}
                    </ListItemButton>
                  </NavLink>
                )}{" "}
                <Collapse
                  in={openItem === item.id}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.nestedItems.map((nestedItem) => (
                      <ListItemButton key={nestedItem.id} sx={{ pl: 4 }}>
                        <NavLink to={nestedItem.link} className="navs">
                          <ListItemIcon>{nestedItem.icon}</ListItemIcon>
                          <ListItemText primary={nestedItem.primaryText} />
                        </NavLink>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Drawer>
      </Box>

      <Divider sx={{ border: "1px solid gray" }} />
    </>
  );
}
