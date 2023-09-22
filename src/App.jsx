import React from "react";
import Overview from "./pages/Overview";
import { ReportsOne, ReportsThree, ReportsTwo } from "./pages/Reports";
import Team from "./pages/Team";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./layout/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Overview />} />
            {/* <Route path="/time" element={<Reports />} /> */}
            <Route path="/time/today" element={<ReportsOne />} />
            <Route path="/time/tomorrow" element={<ReportsTwo />} />
            <Route path="/time/past-week" element={<ReportsThree />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
