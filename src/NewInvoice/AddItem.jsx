import React from 'react';
import { ReactComponent as TrashIcon } from '../assets/icon-delete.svg';

function AddItem() {
  return (
    <div className="flex  justify-between gap-10">
      <div className="font-light">
        <label >Item Name</label>
        <input
          type="text"
          id="item-name"
          className="bg-primary text-Dark py-2 px-1 rounded-sm "
        />
      </div>

      <div className="font-light">
        <label htmlFor="quantity">Qty.</label>
        <input
          type="number"
          id="quantity"
          className="bg-primary text-Dark py-2 rounded-sm w-[50px]"
        />
      </div>

      <div className="font-light">
        <label>Price</label>
        <input
          type="text"
          id="price"
          className="bg-primary text-Dark py-2 px-4 rounded-sm w-[70px]"
        />
      </div>

      <div className="font-light">
        <label htmlFor="total">Total</label>
        <input
          type="text"
          id="total"
          className="bg-primary text-Dark py-2 px-4 rounded-sm w-[70px]"
          readOnly
        />
      </div>

      
        <button>
          <TrashIcon className="mt-6 ml-16" />
        </button>
      
    </div>
  );
}

export default AddItem;
