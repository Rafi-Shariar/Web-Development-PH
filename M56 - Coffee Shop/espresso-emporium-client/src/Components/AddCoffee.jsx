import React from "react";
import Swal from "sweetalert2";
const AddCoffee = () => {
  
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const cofeeData = Object.fromEntries(formData.entries());
    console.log(cofeeData);

    //send data to the db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cofeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee", data);
        Swal.fire({
          title: "Coffee Added !",
          icon: "success",
          draggable: true,
        });

        
      });
  };
  return (
    <div className="bg-slate-100 mt-10">
      <div className="text-center p-10">
        <h1 className="text-4xl">Add New Coffee</h1>
        <p className="my-5">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <div className="my-10">
        <form
          onSubmit={handleAddCoffee}
          className="grid grid-cols-2 gap-8 p-10"
        >
          <div>
            <fieldset className="fieldset p-4">
              <label className="label">Coffee Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Coffe Name"
                name="name"
              />

              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee Supplier"
                name="supplier"
              />

              <label className="label">Category</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Category"
                name="category"
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset p-4">
              <label className="label">Chef</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Chef name"
                name="chefname"
              />

              <label className="label">Taste</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Taste"
                name="taste"
              />

              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Coffee Details"
                name="details"
              />
            </fieldset>
          </div>

          <div className="col-span-2">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Photo URL"
              name="photourl"
            />

            <input
              type="submit"
              value="Add Coffee"
              className="btn w-full mt-10 bg-[#D2B48C]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
