import React from "react";

const BeARiderForm = () => {
  return (
    <div>
      <form action="" className="grid grid-cols-2 gap-5">
        <div>
          <legend className="fieldset-legend">Your Name</legend>
          <input type="text" className="input" placeholder="name" name="name" />

          <legend className="fieldset-legend">Your Email</legend>
          <input
            type="email"
            className="input "
            placeholder="email"
            name="email"
          />

          <legend className="fieldset-legend">NID No</legend>
          <input
            type="number"
            className="input "
            placeholder="NID no"
            name="nid"
          />
        </div>

        <div>
          <legend className="fieldset-legend">Your Age</legend>
          <input type="number" className="input" placeholder="age" name="age" />

          <legend className="fieldset-legend">Your Region</legend>
          <select name="" id="" className="select">
            <option value="">Select Region</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
            <option value="Sylhet">Sylhet</option>
          </select>

          <legend className="fieldset-legend">Contact No</legend>
          <input
            type="number"
            className="input "
            placeholder="Contact no"
            name="contact"
          />
        </div>

        <div className="col-span-2">
          <legend className="fieldset-legend">
            Which warehouse you like to work?
          </legend>
          <select name="" id="" className="select w-full">
            <option value="">Select Warehouse</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
            <option value="Sylhet">Sylhet</option>
          </select>

          <button className="btn btn-primary text-black block w-full my-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeARiderForm;
