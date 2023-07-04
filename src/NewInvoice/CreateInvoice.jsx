import React, { useState } from "react";
import AddItem from "./AddItem";
import Header from "../Home/Header";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
const CreateInvoice = () => {
  
  return (
    <>
    <div className="flex">
    <div className="fixed">
    <Header/>
    </div>
      <div className="bg-Mirage text-primary w-[50%] shadow-sm p-20 ml-[60px]">
        <div className="mb-12">
          <h1 className="font-medium text-3xl">New Invoice</h1>
        </div>
        <div className="mb-5">
          <h1 className="text-secondary">Bill From</h1>
        </div>
        <div className="grid grid-cols-3">
          <form className="">
            <div className="font-light">
              <label>Street Address</label>
              <input
                type="text"
                id="address"
                class="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
              ></input>
            </div>

            <div className="flex justify-between gap-2">
              <div className="font-light  ">
                <label>City</label>
                <input
                  type="text"
                  id="city"
                  class="bg-primary text-Dark py-2 px-4 rounded-sm "
                ></input>
              </div>
              <div className="font-light  ">
                <label>Post Code</label>
                <input
                  type="text"
                  id="postCode"
                  class="bg-primary text-Dark py-2 px-4 rounded-sm"
                ></input>
              </div>
              <div className="font-light  ">
                <label>Country</label>
                <input
                  type="text"
                  id="country"
                  class="bg-primary text-Dark py-2 px-4 rounded-sm "
                ></input>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-secondary">Bill To</h1>
            </div>
            <div class="font-light  mt-5">
              <label>Client Name</label>
              <input
                type="text"
                id="clientName"
               
                class="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
              ></input>
            </div>

            <div class="font-light ">
              <label>Client Email</label>
              <input
                type="email"
                id="clientEmail"
                class="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
              ></input>
            </div>
            <div className="font-light ">
              <label>Street Address</label>
              <input
                type="text"
                id="streetAddress"
                className="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
              ></input>
            </div>
            <div className="flex justify-between gap-2">
              <div className="font-light  ">
                <label>City</label>
                <input
                  type="text"
                  id="city"
                  class="bg-primary text-Dark py-2 px-4 rounded-sm "
                ></input>
              </div>
              <div className="font-light  ">
                <label>Post Code</label>
                <input
                  type="text"
                  id="postCode"
                  class="bg-primary text-Dark py-2 px-4 rounded-sm"
                ></input>
              </div>
              <div className="font-light ">
                <label>Country</label>
                <input
                  type="text"
                  id="country"
                  class="bg-primary text-Dark py-2 px-4 rounded-sm "
                ></input>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="font-light ">
                <label >Invoice Date</label>
                <input
                  type="date"
                  id="invoiceDate"
                  className="bg-primary text-Dark py-2 px-4 rounded-sm w-[300px]"
                />
              </div>
              <div className="">
                <label>Payment Terms</label>
                <select
                  id="paymentTerms"
                  className="bg-primary text-Dark py-2 px-4 rounded-sm w-[300px]"
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="font-light">
              <label>Project Description</label>
              <input
                id="description"
                className="py-2 px-4 rounded-sm w-[620px] text-Dark"
              ></input>
            </div>
            <div className="mt-10 text-xl ">
              <h1>Item List</h1>
            </div>
            <div className="mb-4 ">
              <AddItem />
            </div>
            <button className="mt-9 flex bg-Clay shadow-sm rounded-full w-[550px] h-[50px]">
              <div className="text-center mt-[18px] ml-44 ">
                <PlusIcon className="" />
              </div>
              <p className=" text-primary font-semibold text-lg mt-2">
                Add New Item
              </p>
            </button>
            <div className="flex mt-10">
              <button className="bg-primary py-3 px-3 rounded-full ">
                <p className="text-Dark">Discard</p>
              </button>
              <button className="bg-Grey py-3 px-3 rounded-full ml-64 ">
                <p className="text-LinkWater">SaveasDraft</p>
              </button>
              <button
                className="bg-tertiary py-3 px-3 rounded-full ml-20"
              
              >
                <p className="text-LinkWater">Save&Send</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};
export default CreateInvoice;
