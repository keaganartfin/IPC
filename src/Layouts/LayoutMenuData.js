import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  // Actual Website Navigation
  const [isProducts, setIsProducts] = useState(false);
  const [isSpecialtyProducts, setIsSpecialtyProducts] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isHeatShrinkTubing, setIsHeatShrinkTubing] = useState(false);
  const [isNonShrinkTubing, setIsNonShrinkTubing] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Home");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "home",
      label: "Home",
      link: "/home",
    },
    {
      id: "about",
      label: "About Us",
      link: "/about",
    },
    {
      id: "faqs",
      label: "FAQs",
      link: "/faqs",
    },
    {
      id: "contactus",
      label: "Contact Us",
      link: "/contact",
    },
    {
      label: "products",
      isHeader: true,
    },
    {
      id: "products",
      label: "Products",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsProducts(!isProducts);
        setIscurrentState("Products");
        updateIconSidebar(e);
      },
      stateVariables: isProducts,
      subItems: [
        {
          id: "productscatalog",
          label: "Product Catalog",
          link: "/product-catalog",
          parentId: "products",
        },
        {
          id: "productspecifications",
          label: "Product Specifications",
          link: "/product-catalog",
          parentId: "products",
        },
        {
          id: "heatshrinktubing",
          label: "Heat Shrink Tubing",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsHeatShrinkTubing(!isHeatShrinkTubing);
          },
          parentId: "products",
          stateVariables: isHeatShrinkTubing,
          childItems: [
            { id: 1, label: "PVC", link: "/heat-shrink-tubing/pvc" },
            {
              id: 2,
              label: "Polyolefin",
              link: "/heat-shrink-tubing/polyolefin",
            },
            {
              id: 3,
              label: "Adhesive Lined Polyolefin",
              link: "/heat-shrink-tubing/adhesive-lined-polyolefin",
            },
            { id: 4, label: "End Caps", link: "/heat-shrink-tubing/end-caps" },
            {
              id: 5,
              label: "Medical grade Polyolefin",
              link: "/heat-shrink-tubing/medical-grade-polyolefin",
            },
            {
              id: 6,
              label: "Neoprene & Fluoroelastomer",
              link: "/heat-shrink-tubing/neoprene-and-fluoroelastomer",
            },
            { id: 7, label: "Kynar (PVDF)", link: "/heat-shrink-tubing/kynar" },
            {
              id: 8,
              label: "Modified Fluoropolymer",
              link: "/heat-shrink-tubing/modified-fluoropolymer",
            },
            { id: 9, label: "Mylar", link: "/heat-shrink-tubing/mylar" },
            {
              id: 10,
              label: "High Temperature",
              link: "/heat-shrink-tubing/high-temperature",
            },
          ],
        },
        {
          id: "nonshrinktubing",
          label: "Non-Shrink Tubing",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsNonShrinkTubing(!isNonShrinkTubing);
          },
          parentId: "products",
          stateVariables: isNonShrinkTubing,
          childItems: [
            { id: 1, label: "PVC", link: "/non-shrink-tubing/pvc" },
            {
              id: 2,
              label: "PTFE Spaghetti Tubing",
              link: "/non-shrink-tubing/ptfe-spaghetti-tubing",
            },
            {
              id: 3,
              label: "Sleeving",
              link: "/non-shrink-tubing/sleeving",
            },
            {
              id: 4,
              label: "Spiral Wrap",
              link: "/non-shrink-tubing/spiral-wrap",
            },
            {
              id: 5,
              label: "Slit Conduit",
              link: "/non-shrink-tubing/slit-conduit",
            },
          ],
        },
        {
          id: "specialtyproducts",
          label: "Specialty Products",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsSpecialtyProducts(!isSpecialtyProducts);
          },
          parentId: "products",
          stateVariables: isSpecialtyProducts,
          childItems: [
            {
              id: 1,
              label: "Non-Metallic Conduit Tubing",
              link: "/specialty-products/non-metallic-conduit-tubing",
            },
            {
              id: 2,
              label: "Non-Metallic Conduit Connectors & Couplings",
              link: "/specialty-products/non-metallic-conduit-connectors-and-couplings",
            },
            {
              id: 3,
              label: "Adhesives",
              link: "/specialty-products/adhesives",
            },
            {
              id: 4,
              label: "Heat Shrink Tape",
              link: "/specialty-products/heat-shrink-tape",
            },
            { id: 5, label: "Heat Gun", link: "/specialty-products/heat-gun" },
          ],
        },
        {
          id: "services",
          label: "Services",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsServices(!isServices);
          },
          parentId: "products",
          stateVariables: isServices,
          childItems: [
            { id: 1, label: "Value Added", link: "/services/value-added" },
            {
              id: 1,
              label: "Hot Stamp Marking",
              link: "/services/hot-stamp-marking",
            },
            { id: 1, label: "Tubing Kits", link: "/services/tubing-kits" },
          ],
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
