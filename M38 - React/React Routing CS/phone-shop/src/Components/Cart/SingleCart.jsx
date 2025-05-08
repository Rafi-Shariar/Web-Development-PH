import React from "react";
import { NavLink } from "react-router";

const SingleCart = ({ phone }) => {

    const {model,image,id} = phone;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{model}</h2>

          <div className="flex">
             <NavLink to={`/Phonedetails/${id}`}><button className="btn btn-primary">Show Details</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
