import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";
//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
// import ProductInsights from "../pages/Pages/Products/ProductInsights";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
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
    </React.Fragment>
  );
};

export default Index;
