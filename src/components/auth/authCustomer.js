import React from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Page404 from "../../pages/page404";

const AuthCustomer = ({ children }) => {
  const token = Cookies.get("token")
  const customer_id = Cookies.get("customer_id")

  if (!token) {
    Swal.fire({
      text: "Please login",
      type: "warning",
    });
    return <Navigate to="/login" replace="true" />;
  }else if(!customer_id){
    return <Page404 />
  }
  return children;
};

export default AuthCustomer;