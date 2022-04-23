import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Creatinvoice = () => {
  const [invoice, setInvoice] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) =>
    setInvoice({ ...invoice, [e.target.name]: e.target.value });

  const handelSubmit = () => {
    alert("invoice create successfully");
    navigate("/invoice", { state: "invoice create successfully" });
  };

  return (
    <div className="page">
      <h2>Create new invoice:</h2>
      <form>
        <label>name:</label>
        <input
          type="text"
          value={invoice.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>number:</label>
        <input
          type="text"
          value={invoice.number}
          name="number"
          onChange={handleChange}
        />
        <br />
        <label>amount:</label>
        <input
          type="text"
          value={invoice.amount}
          name="amount"
          onChange={handleChange}
        />
        <br />
        <label>due:</label>
        <input
          type="text"
          value={invoice.due}
          name="due"
          onChange={handleChange}
        />
        <br />
        <button onClick={handelSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Creatinvoice;
