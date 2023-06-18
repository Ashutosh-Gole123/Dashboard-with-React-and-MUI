import "./App.css";
import Home from "./Pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import ListOne from "./Pages/ListOne";
import Chart from "./Pages/Chart";
import SectorList from "./Pages/SectorList";
import LoginPage from "./Pages/LoginPage";
import Err from "./Pages/Err";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chart" element={<Chart />} />
          <Route path="list1" element={<ListOne />} />
          <Route path="list2" element={<SectorList />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="error" element={<Err />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
