import React from "react";
import { ReactComponent as ArrowdownIcon } from "../assets/icon-arrow-down.svg";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
import InvoiceCard from "./InvoiceCard";
const Center = () => {
  return (
    <>
      <div className="p-32 ">
        <div className="flex">
          <div>
            <h1 className="text-3xl font-bold">Invoices</h1>
            <p className="mt-2 text-Grey font-light">
              There are 7 total invoices.
            </p>
          </div>
          <div className="flex ml-[600px]">
            <div className="flex mt-5">
              <p className="font-semibold">Filter by status</p>
              <ArrowdownIcon className="mt-3 text-secondary" />
            </div>

            <button className="ml-6 gap-4 flex items-center px-4 bg-secondary rounded-full">
              <div className="rounded-full w-[50px] h-[50px] bg-primary">
                <PlusIcon className="relative mt-5 ml-5" />
              </div>
              <p className="text-primary font-semibold text-lg">New invoice</p>
            </button>
          </div>
        </div>
        <InvoiceCard/>
      </div>
    </>
  );
};
export default Center;
