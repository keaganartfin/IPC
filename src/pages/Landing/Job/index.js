import React from "react";
import Blog from "./Blog";
import Categories from "./Categories";
import Features from "./Features";
import Footer from "./Footer";
import Home from "./Home";
import WorkProcess from "../OnePage/workProcess";
import Client from "../OnePage/client";
import Faqs from "../OnePage/faq";

const JobLanding = () => {
  document.title = "IPC | Materials For The Electrical & Electronic Industry";

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  return (
    <React.Fragment>
      <div className="layout-wrapper landing">
        <Home />
        <WorkProcess />
        <Features />
        <Client />
        <Categories />
        <Faqs />
        <Blog />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default JobLanding;
