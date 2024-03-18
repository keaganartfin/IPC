import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";
import CatalogMain from "../pages/Pages/Products/ProductCategories/catalog-main"; // Ensure this import is correct

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { ipcPages } from "../common/data";
import ProductInsights from "../pages/Pages/Products/ProductInsights";

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

        {/* Dynamic route for PDFs */}
        <Route
          path="/product-catalog/:pdfName"
          element={
            <VerticalLayout>
              <CatalogMain />
            </VerticalLayout>
          }
        />

        {ipcPages.map((page, index) => (
          <Route
            key={`ipc-${index}`}
            path={page.link}
            element={
              <ProductInsights title={page.title} content={page.content} />
            }
          />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default Index;
