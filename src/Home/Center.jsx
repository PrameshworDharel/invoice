import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowdownIcon } from "../assets/icon-arrow-down.svg";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
import InvoiceCard from "../components/InvoiceCard";

const Center = () => {
  const [invoiceCount, setInvoiceCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchInvoiceCount();
  }, []);

  const fetchInvoiceCount = async () => {
    try {
      const response = await fetch("http://localhost:5000/invoices");
      const data = await response.json();
      setInvoiceCount(data.length);
    } catch (error) {
      console.error("Error fetching invoice count:", error);
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="p-32">
        <div className="flex">
          <div>
            <h1 className="text-3xl font-bold">Invoices</h1>
            <p className="mt-2 text-Grey font-light">
              There are {invoiceCount} total invoices.
            </p>
          </div>
          <div className="flex ml-[600px]">
            <div className="flex mt-5 gap-2 relative">
              <p className="font-semibold">Filter by status</p>
              <ArrowdownIcon
                className={`mt-3 text-secondary ${
                  isDropdownOpen ? "shadow" : ""
                }`}
                onClick={handleDropdownClick}
              />
              {isDropdownOpen && (
                <div className="absolute bg-white rounded-md mt-7 shadow-md p-2">
                  <label htmlFor="draft">
                    <input type="checkbox" id="draft" />
                    Draft
                  </label>
                  <br></br>
                  <label htmlFor="pending">
                    <input type="checkbox" id="pending" />
                    Pending
                  </label>
                  <br></br>
                  <label htmlFor="paid">
                    <input type="checkbox" id="paid" />
                    Paid
                  </label>
                </div>
              )}
            </div>
            <Link to="CreateInvoice">
              <button className="ml-6 gap-4 flex items-center px-4 py-2 bg-secondary rounded-full">
                <div className="rounded-full w-[50px] h-[50px] bg-primary">
                  <PlusIcon className="relative mt-5 ml-5" />
                </div>
                <p className="text-primary font-semibold whitespace-nowrap">
                  New invoice
                </p>
              </button>
            </Link>
          </div>
        </div>
        <InvoiceCard />
      </div>
    </>
  );
};

export default Center;
