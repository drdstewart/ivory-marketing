import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./about";
import Services from "./services";
import Backdrop from "./backdrop";
import TopBar from "./top-bar";
import Contact from "./contact";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Backdrop />

    <TopBar />
    <About />
    <Services />
    <Contact />
  </React.StrictMode>
);
