import React from "react";
import { ReactComponent as TrashIcon } from "../assets/icon-delete.svg";

function AddItem() {
  return (
    <div className="flex  justify-between gap-10 mt-2 ">
      <div className="font-light ">
        <label>Item Name</label>
        <input
          type="text"
          id="item-name"
          className="bg-primary text-Dark py-2 px-1 rounded-sm mt-5"
        />
      </div>

      <div className="font-light">
        <label>Qty.</label>
        <input
          type="number"
          id="quantity"
          className="bg-primary text-Dark py-2 rounded-sm w-[50px] mt-5"
        />
      </div>

      <div className="font-light">
        <label>Price</label>
        <input
          type="text"
          id="price"
          className="bg-primary text-Dark py-2 px-4 rounded-sm w-[70px] mt-5"
        />
      </div>

      <div className="font-light">
        <label htmlFor="total">Total</label>
        <input
          type="text"
          id="total"
          className="bg-primary text-Dark py-2 px-4 rounded-sm w-[70px] mt-5"
        />
      </div>

      <button>
        <TrashIcon className="mt-10 ml-16" />
      </button>
    </div>
  );
}

export default AddItem;
