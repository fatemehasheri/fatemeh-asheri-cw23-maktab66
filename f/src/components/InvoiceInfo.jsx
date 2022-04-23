import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import Notfind from "./NotFind";

const InvoiceInfo = () => {
  let params = useParams();
  const invoice = getInvoice(+params.invoiceNumber);

  if (invoice === undefined) return <Notfind />;
  else {
    return (
      <div style={{ marginTop: "3rem" }}>
        <h2>your invoice:</h2>
        <p>-name: {invoice.name}</p>
        <p>-number: {invoice.number}</p>
        <p>-amount: {invoice.amount}</p>
        <p>-due: {invoice.due}</p>
      </div>
    );
  }
};

export default InvoiceInfo;
