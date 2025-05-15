import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
const ProductCard = ({ coffee }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/coffees/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            
        })






        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });


      }
    });

    console.log(id);
  };

  return (
    <div className="border flex justify-between items-center w-110 p-10">
      <div>
        <img src={coffee.photourl} alt="" className="w-42" />
      </div>
      <div>
        <p>Name: {coffee.name}</p>
        <p>Chef: {coffee.chefname}</p>
        <p>taste: {coffee.taste}</p>
      </div>
      <div className="grid grid-cols-1 gap-2">
       <Link to={`/coffee/${coffee._id}`}>
        <button className="btn bg-[#D2B48C] text-white">
          <FaRegEye />
        </button>
        </Link>
        <button className="btn bg-slate-900 text-white">
          <FaPenClip />
        </button>
        <button
          className="btn bg-red-700 text-white"
          onClick={() => {
            handleDelete(coffee._id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
