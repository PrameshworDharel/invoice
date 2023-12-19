import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/icon-arrow-right.svg";
import PaidStatus from "./PaidStatus";

const InvoiceCard = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    fetchInvoiceData();
  }, []);

  const fetchInvoiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/invoices");
      const data = await response.json();
      setInvoiceData(data);
    } catch (error) {
      console.error("Error fetching invoice data:", error);
    }
  };

  return (
    <>
      {invoiceData &&
        invoiceData.map((invoice) => (
          <Link to={`/InvoiceInfo/${invoice.id}`} key={invoice.id}>
            <div className="flex cursor-pointer duration-100 ease-in-out py-4 shadow-lg text-primary bg-Dark rounded-lg items-center justify-between mt-16 p-9">
              <div className="flex items-center p-2">
                <h2 className="text-primary">
                  <span className="text-tertiary">#{invoice.id}</span>
                </h2>
                <h2 className="text-sm text-gray-400 font-light ml-6">
                  Due {invoice.selectDeliveryDate}
                </h2>
                <h2 className="text-sm text-gray-400 font-light ml-10">
                  {invoice.clientName}
                </h2>
              </div>
              <div className="flex gap-20">
                <h1 className="text-xl  text-primary">£{invoice.amount}</h1>
                <PaidStatus />
                <RightArrow className="mr-2 mt-2" />
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};

export default InvoiceCard;
