import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../Components/Auth/Login";
import { Box } from "@mui/material";

function LoginPage() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
