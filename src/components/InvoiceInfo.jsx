import React from "react";
import Header from "../Home/Header";
import { ReactComponent as LeftArrow } from "../assets/icon-arrow-left.svg";
import { Link } from "react-router-dom";
const InvoiceInfo = () => {
  return (
    <>
      <div className="flex ">
        <div className="fixed">
          <Header />
        </div>
        <div className=" bg-primary ml-20 p-20 w-full text-primary">
          <div className=" flex gap-3 ml-32">
            <Link to="/">
            <button className="mt-2 flex gap-4">
              <LeftArrow className="mt-2" />
              <h1 className="text-secondary">Go back</h1>
            </button>
            </Link>
          </div>
          
          <div className="flex bg-Clay justify-between w-[70%] mt-5 ml-32 p-10 rounded-2xl shadow-md">
            <div>
              <h1 className="mt-2">Status</h1>
            </div>
            <div className="gap-6 flex ">
              <div className=" ">
                <button className="py-2 px-6 rounded-full bg-Mirage">
                  Edit
                </button>
              </div>
              <Link to="/Delete">
              <div>
                <button className="py-2 px-6 rounded-full bg-Red">
                  Delete
                </button>
              </div>
              </Link>
              <div>
                <button className="py-2 px-6 rounded-full bg-tertiary">
                  Mark as Paid
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-Clay justify-between w-[70%] mt-5 ml-32 p-10 rounded-2xl shadow-md">
            <div className="flex justify-between ">
              <div>
                <p>#</p>
                <p></p>
              </div>
              <div className=" ">
                <p>street</p>
                <p>city</p>
                <p>postCode</p>
                <p>country</p>
              </div>
            </div>

            <div className="flex gap-64 mt-6">
              <div className="">
                <p>Invoice Date</p>
                <p className="mt-24">Payment Due</p>
              </div>
              <div>Bill to</div>
              <div>Sent to</div>
            </div>

            <div className="bg-Dark justify-between w-[90%] mt-20 p-2 ml-12 rounded-sm shadow-sm">
              <div className="p-10 flex justify-between mb-20">
                <div>Item name</div>
                <div>Qty.</div>
                <div>Item price</div>
                <div>Total</div>
              </div>
            </div>
            <div className="bg-Mirage justify-between w-[90%] ml-12 shadow-md">
              <div className="flex justify-between p-5">
                <div className="font-bold text-2xl">Amount Due</div>
                <div className=" text-3xl"> £ </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InvoiceInfo;
