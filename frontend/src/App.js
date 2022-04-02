import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminPage from "./page/admin";
import DashbordPage from "./page/dashbord";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/course/:name" element={<DashbordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
