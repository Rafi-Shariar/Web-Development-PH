import React from "react";
import { Link, useLoaderData } from "react-router";

const Update = () => {
  const phone = useLoaderData();
  const { _id, model, brand, storage, price, stock, } = phone;

  return (
    <div className="my-10">
      <div>
        <h1 className="text-2xl font-extralight mb-10">Current Data</h1>

        <div className="text-xl grid grid-cols-5 font-semibold">
          <h2>Model : {model}</h2>
          <h2>Brand : {brand}</h2>
          <h2>Storage : {storage}</h2>
          <h2>Price : {price}</h2>
          <h2>Stocks : {stock}</h2>
        </div>
      </div>

      {/* form */}
      <div className="mt-10">
        <form action="" className="flex gap-10">
          <input
            type="number"
            className="input"
            placeholder="Updated Price"
            name="updatedPrice"
          />

          <input
            type="number"
            className="input"
            placeholder="Updated Stocks"
            name="updatedStock"
          />

          <input type="submit" className="btn btn-info" value="Update" />
        </form>
      </div>

      <Link to='/' className="btn btn-dash mt-20">Back</Link>
    </div>
  );
};

export default Update;
