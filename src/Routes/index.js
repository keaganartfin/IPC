import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Layouts
import VerticalLayout from "../Layouts/index";
//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
// import ProductInsights from "../pages/Pages/Products/ProductInsights";

const Index = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<VerticalLayout>{route.component}</VerticalLayout>}
            key={`public-${idx}`}
          />
        ))}

        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<VerticalLayout>{route.component}</VerticalLayout>}
            key={`auth-${idx}`}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Index;
