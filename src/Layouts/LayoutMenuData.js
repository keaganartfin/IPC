import React, { useState } from "react";

const Navdata = () => {
  // Actual Website Navigation
  const [isProducts, setIsProducts] = useState(false);
  const [isSpecialtyProducts, setIsSpecialtyProducts] = useState(false);
  const [isHeatShrinkTubing, setIsHeatShrinkTubing] = useState(false);
  const [isNonShrinkTubing, setIsNonShrinkTubing] = useState(false);
  const [isSupport, setIsSupport] = useState(false);
  const [isAboutCompany, setIsAboutCompany] = useState(false);

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
      label: "support",
      isHeader: true,
    },
    {
      id: "support",
      label: "Support",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsSupport(!isSupport);
        setIscurrentState("Support");
        updateIconSidebar(e);
      },
      stateVariables: isSupport,
      subItems: [
        {
          id: "contactus",
          label: "Contact Us",
          link: "/company?tab=contact",
          parentId: "support",
        },
        {
          id: "faqs",
          label: "FAQs",
          link: "/company?tab=faqs",
          parentId: "support",
        },
        {
          id: "customersurvey",
          label: "Customer Survey",
          link: "/company?tab=survey",
          parentId: "support",
        },
      ],
    },
    {
      label: "aboutcompany",
      isHeader: true,
    },
    {
      id: "aboutcompany",
      label: "About Us",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsAboutCompany(!isAboutCompany);
        setIscurrentState("aboutcompany");
        updateIconSidebar(e);
      },
      stateVariables: isAboutCompany,
      subItems: [
        {
          id: "companyprofile",
          label: "Company Profile",
          link: "/company?tab=aboutus",
          parentId: "aboutcompany",
        },
        // {
        //   id: "ipcpartners",
        //   label: "IPC Partners",
        //   link: "/company?tab=6",
        //   parentId: "aboutcompany",
        // },
        // {
        //   id: "awards",
        //   label: "Awards",
        //   link: "/company?tab=7",
        //   parentId: "aboutcompany",
        // },
        {
          id: "mediaresources",
          label: "Media Resources",
          link: "/company?tab=resources",
          parentId: "aboutcompany",
        },
      ],
    },
    {
      label: "products",
      isHeader: true,
    },
    {
      id: "products",
      label: "Our Products",
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
          id: "productspecifications",
          label: "Product Specifications",
          link: "/product-specs",
          parentId: "products",
        },
        {
          id: "heatshrinktubing",
          label: "Heat Shrink Tubing",
          link: "/products/heat-shrink-tubing",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsHeatShrinkTubing(!isHeatShrinkTubing);
          },
          parentId: "products",
          stateVariables: isHeatShrinkTubing,
          childItems: [
            {
              id: 1,
              label: "PVC",
              link: "/products/heat-shrink-tubing/pvc",
            },
            {
              id: 2,
              label: "Polyolefin",
              link: "/products/heat-shrink-tubing/polyolefin",
            },
            {
              id: 3,
              label: "Adhesive Lined Polyolefin",
              link: "/products/heat-shrink-tubing/adhesive-lined-polyolefin",
            },
            {
              id: 4,
              label: "End Caps",
              link: "/products/heat-shrink-tubing/end-caps",
            },
            {
              id: 5,
              label: "Medical grade Polyolefin",
              link: "/products/heat-shrink-tubing/medical-grade-polyolefin",
            },
            {
              id: 6,
              label: "Neoprene & Fluoroelastomer",
              link: "/products/heat-shrink-tubing/neoprene-and-fluoroelastomer",
            },
            {
              id: 7,
              label: "Kynar (PVDF)",
              link: "/products/heat-shrink-tubing/kynar",
            },
            {
              id: 8,
              label: "Modified Fluoropolymer",
              link: "/products/heat-shrink-tubing/modified-fluoropolymer",
            },
            {
              id: 9,
              label: "Mylar",
              link: "/products/heat-shrink-tubing/mylar",
            },
            {
              id: 10,
              label: "High Temperature",
              link: "/products/heat-shrink-tubing/high-tempeture",
            },
          ],
        },
        {
          id: "nonshrinktubing",
          label: "Non-Shrink Tubing",
          link: "/products/non-shrink-tubing",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsNonShrinkTubing(!isNonShrinkTubing);
          },
          parentId: "products",
          stateVariables: isNonShrinkTubing,
          childItems: [
            {
              id: 1,
              label: "PVC",
              link: "/products/non-shrink-tubing/pvc",
            },
            {
              id: 2,
              label: "PTFE Spaghetti Tubing",
              link: "/products/non-shrink-tubing/ptfe-spaghetti-tubing",
            },
            {
              id: 3,
              label: "Sleeving",
              link: "/products/non-shrink-tubing/sleeving",
            },
            {
              id: 4,
              label: "Spiral Wrap",
              link: "/products/non-shrink-tubing/spiral-wrap",
            },
            {
              id: 5,
              label: "Slit Conduit",
              link: "/products/non-shrink-tubing/slit-conduit",
            },
          ],
        },
        {
          id: "specialtyproducts",
          label: "Specialty Products & Services",
          link: "/products/specialty-products-services",
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
              link: "/products/specialty-products-services/non-metallic-conduit-tubing",
            },
            {
              id: 2,
              label: "Non-Metallic Conduit Connectors & Couplings",
              link: "/products/specialty-products-services/non-metallic-conduit-connectors-and-couplings",
            },
            {
              id: 3,
              label: "Adhesives",
              link: "/products/specialty-products-services/adhesives",
            },
            {
              id: 4,
              label: "Heat Shrink Tape",
              link: "/products/specialty-products-services/heat-shrink-tape",
            },
            {
              id: 5,
              label: "Heat Gun",
              link: "/products/specialty-products-services/heat-gun",
            },
            {
              id: 6,
              label: "Value Added",
              link: "/products/specialty-products-services/value-added",
            },
            {
              id: 7,
              label: "Identification Markers",
              link: "/products/specialty-products-services/identification-markers",
            },
            {
              id: 8,
              label: "Tubing Kits",
              link: "/products/specialty-products-services/tubing-kits",
            },
          ],
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
