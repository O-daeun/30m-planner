import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DayListToThree from "./pages/DayListToThree";
import Week from "./pages/Week";
import ThirtyMinutes from "./pages/ThirtyMinutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<DayListToThree />} />
          <Route path='week' element={<Week />} />
          <Route path='30mins' element={<ThirtyMinutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
