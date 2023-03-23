import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Assembly from "../Pages/About Us/Assembly/Assembly";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ViewEntireTeam from "../Pages/About Us/Sections/View Entire Team/ViewEntireTeam";
import Activity from "../Pages/Activity/Activity";
import Activity1 from "../Pages/Activity/Activity1";

const Router = () => {
  return (
    <div className="RouterContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Assembly />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/viewentireteam" element={<ViewEntireTeam />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/activity1" element={<Activity1 />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
