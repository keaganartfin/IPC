import React from "react";
import { Navigate } from "react-router-dom";

import Faqs from "../pages/Pages/Faqs/Faqs";
import SiteMap from "../pages/Pages/SiteMap/SiteMap";
// Products
import ProductCatalog from "../pages/Pages/Products/ProductCatalog/ProductCatalog";

import PrivacyPolicy from "../pages/Pages/PrivacyPolicy";
import TermsCondition from "../pages/Pages/TermsCondition";
import JobLanding from "../pages/Landing/Job";
import ContactUs from "../pages/Pages/ContactUs/ContactUs";
import OurSuppliers from "../pages/Pages/OurSuppliers/OurSuppliers";
import Company from "../pages/Pages/About/company";
import HeatShrinkAdhesiveLinedPoly from "../pages/Pages/Products/ProductCategories/heatshrink-adhesivelinedpoly";
import HeatShrinkEndCaps from "../pages/Pages/Products/ProductCategories/heatshrink-endcaps";
import HeatShrinkPVC from "../pages/Pages/Products/ProductCategories/heatshrink-pvc";
import HeatShrinkPolyolefin from "../pages/Pages/Products/ProductCategories/heatshrink-polyolefin";
import HeatShrinkMedicalGradePoly from "../pages/Pages/Products/ProductCategories/heatshrink-medicalgradepoly";
import HeatShrinkNeopreneFluro from "../pages/Pages/Products/ProductCategories/heatshrink-neoprenefluro";
import HeatShrinkKynar from "../pages/Pages/Products/ProductCategories/heatshrink-kynar";
import HeatShrinkModifiedFluoro from "../pages/Pages/Products/ProductCategories/heatshrink-modifiedfluoropoly";
import HeatShrinkMylar from "../pages/Pages/Products/ProductCategories/heatshrink-mylar";
import HeatShrinkHighTemp from "../pages/Pages/Products/ProductCategories/heatshrink-hightemp";
import NonShrinkPVC from "../pages/Pages/Products/ProductCategories/nonshrink-pvc";
import NonShrinkPTFE from "../pages/Pages/Products/ProductCategories/nonshrink-ptfe";
import NonShrinkSleeving from "../pages/Pages/Products/ProductCategories/nonshrink-sleeving";
import NonShrinkSpiralWrap from "../pages/Pages/Products/ProductCategories/nonshrink-spiralwrap";
import NonShrinkSlitConduit from "../pages/Pages/Products/ProductCategories/nonshrink-slitconduit";
import SpecialtyConduitTubing from "../pages/Pages/Products/ProductCategories/specialtyproducts-conduittubing";
import SpecialtyConduitConnectors from "../pages/Pages/Products/ProductCategories/specialtyproducts-conduitconnectors";
import SpecialtyAdhesives from "../pages/Pages/Products/ProductCategories/specialtyproducts-adhesives";
import SpecialtyHeatShrinkTape from "../pages/Pages/Products/ProductCategories/specialtyproducts-heatshrinktape";
import SpecialtyHeatGun from "../pages/Pages/Products/ProductCategories/specialtyproducts-heatgun";
import SpecialtyValueAdded from "../pages/Pages/Products/ProductCategories/specialtyproducts-valueadded";
import SpecialtyHotStamp from "../pages/Pages/Products/ProductCategories/specialtyproducts-hotstamp";
import SpecialtyTubingKits from "../pages/Pages/Products/ProductCategories/specialtyproducts-tubingkits";
import HeatShrinkTubing from "../pages/Pages/Products/ProductCategories/heatshrinktubing";
import NonShrinkTubing from "../pages/Pages/Products/ProductCategories/nonshrinktubing";
import SpecialtyProductsAndServices from "../pages/Pages/Products/ProductCategories/specialtyproducts";

const authProtectedRoutes = [
  { path: "/home", component: <JobLanding /> },
  { path: "/sitemap", component: <SiteMap /> },
  { path: "/privacy-policy", component: <PrivacyPolicy /> },
  { path: "/term-conditions", component: <TermsCondition /> },
  { path: "/faqs", component: <Faqs /> },
  { path: "/contact", component: <ContactUs /> },
  { path: "/our-suppliers", component: <OurSuppliers /> },
  { path: "/product-specs", component: <ProductCatalog /> },
  { path: "/company", component: <Company /> },

  // Product Categories
  {
    path: "/products/heat-shrink-tubing",
    component: <HeatShrinkTubing />,
  },
  {
    path: "/products/heat-shrink-tubing/adhesive-lined-polyolefin",
    component: <HeatShrinkAdhesiveLinedPoly />,
  },
  {
    path: "/products/heat-shrink-tubing/end-caps",
    component: <HeatShrinkEndCaps />,
  },
  {
    path: "/products/heat-shrink-tubing/pvc",
    component: <HeatShrinkPVC />,
  },
  {
    path: "/products/heat-shrink-tubing/polyolefin",
    component: <HeatShrinkPolyolefin />,
  },
  {
    path: "/products/heat-shrink-tubing/medical-grade-polyolefin",
    component: <HeatShrinkMedicalGradePoly />,
  },
  {
    path: "/products/heat-shrink-tubing/neoprene-and-fluoroelastomer",
    component: <HeatShrinkNeopreneFluro />,
  },
  {
    path: "/products/heat-shrink-tubing/kynar",
    component: <HeatShrinkKynar />,
  },
  {
    path: "/products/heat-shrink-tubing/modified-fluoropolymer",
    component: <HeatShrinkModifiedFluoro />,
  },
  {
    path: "/products/heat-shrink-tubing/mylar",
    component: <HeatShrinkMylar />,
  },
  {
    path: "/products/heat-shrink-tubing/high-tempeture",
    component: <HeatShrinkHighTemp />,
  },
  {
    path: "/products/non-shrink-tubing",
    component: <NonShrinkTubing />,
  },
  {
    path: "/products/non-shrink-tubing/pvc",
    component: <NonShrinkPVC />,
  },
  {
    path: "/products/non-shrink-tubing/ptfe-spaghetti-tubing",
    component: <NonShrinkPTFE />,
  },
  {
    path: "/products/non-shrink-tubing/sleeving",
    component: <NonShrinkSleeving />,
  },
  {
    path: "/products/non-shrink-tubing/spiral-wrap",
    component: <NonShrinkSpiralWrap />,
  },
  {
    path: "/products/non-shrink-tubing/slit-conduit",
    component: <NonShrinkSlitConduit />,
  },
  {
    path: "/products/specialty-products-services",
    component: <SpecialtyProductsAndServices />,
  },
  {
    path: "/products/specialty-products-services/non-metallic-conduit-tubing",
    component: <SpecialtyConduitTubing />,
  },
  {
    path: "/products/specialty-products-services/non-metallic-conduit-connectors-and-couplings",
    component: <SpecialtyConduitConnectors />,
  },
  {
    path: "/products/specialty-products-services/adhesives",
    component: <SpecialtyAdhesives />,
  },
  {
    path: "/products/specialty-products-services/heat-shrink-tape",
    component: <SpecialtyHeatShrinkTape />,
  },
  {
    path: "/products/specialty-products-services/heat-gun",
    component: <SpecialtyHeatGun />,
  },
  {
    path: "/products/specialty-products-services/value-added",
    component: <SpecialtyValueAdded />,
  },
  {
    path: "/products/specialty-products-services/identification-markers",
    component: <SpecialtyHotStamp />,
  },
  {
    path: "/products/specialty-products-services/tubing-kits",
    component: <SpecialtyTubingKits />,
  },
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
  },
  { path: "*", component: <Navigate to="/home" /> },
];

const publicRoutes = [];

export { authProtectedRoutes, publicRoutes };
