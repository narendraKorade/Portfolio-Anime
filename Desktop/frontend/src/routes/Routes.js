import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import IntConverter from "../components/IntConverter";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="" element={<IntConverter />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
