import React from "react";
import { ReactComponent as RightArrow } from "../assets/icon-arrow-right.svg";
import PaidStatus from "./PaidStatus";
function InvoiceCard() {
  return (
    <div className="flex cursor-pointer duration-100 ease-in-out  py-4 shadow-lg text-primary bg-Dark rounded-lg items-center justify-between mt-16 p-9">
      <div className="flex items-center p-2">
        <h2 className="text-primary">
          <span className="text-tertiary">#</span>
        </h2>

        <h2 className="text-sm text-gray-400 font-light ml-6">Due</h2>

        <h2 className="text-sm text-gray-400 font-light ml-10">ClientName</h2>
      </div>
      <PaidStatus />
      <h1 className="text-xl mr-8 text-primary">£</h1>
      <RightArrow className=" mr-2" />
    </div>
  );
}

export default InvoiceCard;
