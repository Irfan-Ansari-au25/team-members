import React from "react";
import { Route, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Redirect from "./Redirect";

const UserRoute = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Outlet /> : <Navigate to='/login' />;
};

export default UserRoute;
