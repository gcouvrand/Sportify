import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Routing(props) {
  return (
    <Router>
      <Header />
      <Leftbar />
      <Routes>
        <Route exact path="/:id" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Routing;
