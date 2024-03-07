import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected } from "./AuthProtected";
import { ipcPages } from "../common/data";
import ProductInsights from "../pages/Pages/Products/ProductInsights";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              exact={true}
            />
          ))}
          {ipcPages.map((page, index) => (
          <Route
            key={index}
            path={page.link}
            element={<ProductInsights title={page.title} content={page.content} />}
          />
        ))}
        </Route>

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                // <AuthProtected>
                <VerticalLayout>{route.component}</VerticalLayout>
                // </AuthProtected>
              }
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;
