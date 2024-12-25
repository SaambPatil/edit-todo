import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="m-5">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default RootLayout;
