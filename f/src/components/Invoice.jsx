import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getInvoices } from "../data";

const Invoice = () => {
  const invoices = getInvoices();
  const location = useLocation();
  const [message, setMesage] = useState(location.state);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (message) {
  //     alert(message);
  //     setMesage(" ");
  //   }
  //   return () => {
  //     navigate(location.pathname, { replace: true });
  //   };
  // }, []);
  return (
    <div className="page">
      <h1>This is invoice page</h1>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
      >
        go to contact
      </NavLink>
      <br></br>
      <NavLink
        to="/invoice"
        style={({ isActive }) => ({ color: isActive ? "green" : "red" })}
      >
        go to invoice
      </NavLink>
      <br></br>
      <h2>Invoices :</h2>
      {invoices.map((invoice) => (
        <div>
          <Link to={`${invoice.number}`}>{invoice.name}</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Invoice;
