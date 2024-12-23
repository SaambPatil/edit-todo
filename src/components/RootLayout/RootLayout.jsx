import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="m-5">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
