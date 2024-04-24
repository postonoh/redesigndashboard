import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
import Sidebar from "./screens/global/Sidebar";
import Dashboard from "./screens/dashboard";
import Team from "./screens/team";
import Invoices from "./screens/invoices";
import BarChart from "./components/BarChart";
import Contacts from "./screens/contacts";
import Bar from "./screens/bar";
import Form from "./screens/form";
import Line from "./screens/line";
import Pie from "./screens/pie";
import FAQ from "./screens/faq";
import Geography from "./screens/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./screens/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
    <Sidebar isSidebar={isSidebar}  />
      <main className="content">
      <Topbar setIsSidebar={setIsSidebar} />
        <Routes>
        <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>    
  </ColorModeContext.Provider>
  );
};

export default App;
