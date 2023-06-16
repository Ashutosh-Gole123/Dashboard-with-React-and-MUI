import "./App.css";
import Home from "./Pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import ListOne from "./Pages/ListOne";
import Chart from "./Pages/Chart";
import SectorList from "./Pages/SectorList";
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
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
