import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/icon-arrow-left.svg";
import Header from "../Home/Header";
import moment from "moment";
import CreateInvoice from "../NewInvoice/CreateInvoice";

const InvoiceInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchInvoiceData();
  }, []);

  const fetchInvoiceData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/invoices/${id}`);
      const data = await response.json();
      setInvoice(data);
    } catch (error) {
      console.error("Error fetching invoice data:", error);
    }
  };

  const calculateInvoiceDate = () => {
    const { selectDeliveryDate, paymentTerms } = invoice;
    const daysToAdd = getDaysToAdd(paymentTerms);
    const invoiceDate = moment(selectDeliveryDate).add(daysToAdd, "days");
    return invoiceDate.format("MMM D, YYYY");
  };

  const getDaysToAdd = (paymentTerms) => {
    switch (paymentTerms) {
      case "next1day":
        return 1;
      case "next7days":
        return 7;
      case "next14days":
        return 14;
      case "next30days":
        return 30;
      default:
        return 0;
    }
  };

  const handleEdit = () => {
    setIsFormOpen(!isFormOpen);
    navigate(`/CreateInvoice/${id}`);
  };

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex">
        <div className="fixed">
          <Header />
        </div>
        <div className="bg-primary ml-20 p-20 w-full text-primary">
          <div className="flex gap-3 ml-32">
            <Link to="/">
              <button className="mt-2 flex gap-4">
                <LeftArrow className="mt-2" />
                <h1 className="text-secondary">Go back</h1>
              </button>
            </Link>
          </div>
          {isFormOpen ? (
            <CreateInvoice />
          ) : (
            <div>
              <div className="flex bg-Clay justify-between w-[70%] mt-5 ml-32 p-10 rounded-2xl shadow-md">
                <div>
                  <h1 className="mt-2">Status: {invoice.status}</h1>
                </div>
                <div className="gap-6 flex ">
                  <div className=" ">
                    <button
                      className="py-2 px-6 rounded-full bg-Mirage"
                      onClick={handleEdit}
                    >
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
                    <p> #{invoice.id}</p>
                    <p> {invoice.clientName}</p>
                  </div>
                  <div className=" ">
                    <p>{invoice.address}</p>
                    <p>{invoice.city}</p>
                    <p>{invoice.postCode}</p>
                    <p>{invoice.country}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <div className="">
                    <p>Invoice Date</p>
                    {moment(invoice.selectDeliveryDate).format("MMM D, YYYY")}
                  </div>
                  <div className=" ">
                    <p>Bill to:</p>
                    <p>{invoice.clientName}</p>
                    <p>{invoice.clientCity}</p>
                    <p>{invoice.clientAddress}</p>
                    <p>{invoice.clientPostCode}</p>
                    <p>{invoice.clientCity}</p>
                  </div>
                  <div>
                    <p>Sent to</p>
                    <p>{invoice.clientEmail}</p>
                  </div>
                </div>
                <div>
                  <p className="">Payment Due</p>
                  <p>{calculateInvoiceDate()}</p>
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
                    <div className="text-3xl">£{invoice.amount}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InvoiceInfo;
