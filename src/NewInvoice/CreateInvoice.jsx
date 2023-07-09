import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AddItem from "./AddItem";
import axios from "axios";
import Header from "../Home/Header";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
const CreateInvoice = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    address: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    selectDeliveryDate: "",
    paymentTerms: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      fetchInvoiceData();
    }
  }, [id]);

  const fetchInvoiceData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/invoices/${id}`);
      const invoiceData = response.data;
      setValues(invoiceData);
    } catch (error) {
      console.error("Error fetching invoice data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateInvoice();
    } else {
      createInvoice();
    }

    setValues({
      address: "",
      city: "",
      postCode: "",
      country: "",
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      clientCity: "",
      clientPostCode: "",
      clientCountry: "",
      selectDeliveryDate: "",
      paymentTerms: "",
      description: "",
    });
  };

  const createInvoice = () => {
    axios
      .post("http://localhost:5000/invoices", values)
      .then((response) => {
        console.log("Invoice created:", response.data);
        navigate(`/InvoiceInfo/${response.data.id}`);
      })
      .catch((error) => {
        console.error("Error creating invoice:", error);
      });
  };

  const updateInvoice = () => {
    axios
      .put(`http://localhost:5000/invoices/${id}`, values)
      .then((response) => {
        console.log("Invoice updated:", response.data);
        navigate(`/InvoiceInfo/${id}`);
      })
      .catch((error) => {
        console.error("Error updating invoice:", error);
      });
  };

  return (
    <>
      <div className="flex">
        <div className="fixed">
          <Header />
        </div>
        <div className="bg-Mirage text-primary w-[50%] shadow-sm p-20 ml-[60px]">
          <div className="mb-12">
            <h1 className="font-medium text-3xl">New Invoice</h1>
          </div>
          <div className="mb-5">
            <h1 className="text-secondary">Bill From</h1>
          </div>
          <div className="grid grid-cols-3">
            <form onSubmit={handleSubmit} className="">
              <div className="font-light">
                <label>Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  class="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
                ></input>
              </div>

              <div className="flex justify-between gap-2">
                <div className="font-light  ">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    class="bg-primary text-Dark py-2 px-4 rounded-sm "
                  ></input>
                </div>
                <div className="font-light  ">
                  <label>Post Code</label>
                  <input
                    type="text"
                    name="postCode"
                    value={values.postCode}
                    onChange={handleChange}
                    class="bg-primary text-Dark py-2 px-4 rounded-sm"
                  ></input>
                </div>
                <div className="font-light  ">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
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
                  name="clientName"
                  value={values.clientName}
                  onChange={handleChange}
                  class="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
                ></input>
              </div>

              <div class="font-light ">
                <label>Client Email</label>
                <input
                  type="email"
                  name="clientEmail"
                  value={values.clientEmail}
                  onChange={handleChange}
                  class="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
                ></input>
              </div>
              <div className="font-light ">
                <label>Street Address</label>
                <input
                  type="text"
                  name="clientAddress"
                  value={values.clientAddress}
                  onChange={handleChange}
                  className="bg-primary text-Dark py-2 px-4 rounded-sm w-[620px]"
                ></input>
              </div>
              <div className="flex justify-between gap-2">
                <div className="font-light  ">
                  <label>City</label>
                  <input
                    type="text"
                    name="clientCity"
                    value={values.clientCity}
                    onChange={handleChange}
                    class="bg-primary text-Dark py-2 px-4 rounded-sm "
                  ></input>
                </div>
                <div className="font-light  ">
                  <label>Post Code</label>
                  <input
                    type="text"
                    name="clientPostCode"
                    value={values.clientPostCode}
                    onChange={handleChange}
                    class="bg-primary text-Dark py-2 px-4 rounded-sm"
                  ></input>
                </div>
                <div className="font-light ">
                  <label>Country</label>
                  <input
                    type="text"
                    name="clientCountry"
                    value={values.clientCountry}
                    onChange={handleChange}
                    class="bg-primary text-Dark py-2 px-4 rounded-sm "
                  ></input>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="font-light ">
                  <label>Invoice Date</label>
                  <input
                    type="date"
                    name="selectDeliveryDate"
                    value={values.selectDeliveryDate}
                    onChange={handleChange}
                    className="bg-primary text-Dark py-2 px-4 rounded-sm w-[300px]"
                  />
                </div>
                <div className="">
                  <label>Payment Terms</label>
                  <select
                    name="paymentTerms"
                    value={values.paymentTerms}
                    onChange={handleChange}
                    className="bg-primary text-Dark py-2 px-4 rounded-sm w-[300px]"
                  >
                    <option value="next1day">Next 1 day</option>
                    <option value="next7days">Next 7 days</option>
                    <option value="next14days">Next 14 days</option>
                    <option value="next30days">Next 30 days</option>
                  </select>
                </div>
              </div>
              <div className="font-light">
                <label>Project Description</label>
                <input
                  name="description"
                  value={values.description}
                  onChange={handleChange}
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
                <button className="bg-tertiary py-3 px-3 rounded-full ml-20">
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
