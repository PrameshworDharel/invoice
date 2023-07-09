import React from "react";
import Header from "../Home/Header";
const Delete = () => {
  return (
    <>
      <div className="flex gap-64">
        <div>
          <Header />
        </div>
        <div className="mt-36">
          <div className="bg-Dark w-[85%]">
            <div className="p-16 mb-6 text-primary">
              <h1 className="font-bold text-2xl ">Confirm Deletion</h1>
              <p className="mt-9">
                Are you sure you want to delete invoice ? This action cannot be
                undone.
              </p>
              <div className="flex justify-end gap-9 mt-3">
                <button className="rounded-full shadow-2xl px-3 py-2 bg-Clay">
                  Cancel
                </button>
                <button className="rounded-full shadow-2xl px-3 py-2 bg-Red">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Delete;
