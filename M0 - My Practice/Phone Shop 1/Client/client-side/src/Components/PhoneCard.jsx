import React from "react";
import { Link } from "react-router";
import { MdDelete, MdOutlineUpdate } from "react-icons/md";
import Swal from 'sweetalert2'
const PhoneCard = ({ phone,phonememory }) => {
  const { _id, model, brand, storage, price, stock, image } = phone;
  const {phonesData,setPhonesData} = phonememory;

  const handleDelelte = (id) => {
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

        fetch(`http://localhost:3000/delete/${id}`, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then( data => {
          console.log('Delete', data);
          
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const remainingPhones = phonesData.filter(phone => phone._id !== id);
        setPhonesData(remainingPhones);
      }
    });
  };

  const handlePurchase = () =>{


  }

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{model}</h2>
          <p className="flex justify-between">
            <span>Brand:{brand}</span>
            Storage: {storage}
          </p>
          <div className="flex justify-between mt-5">
            <button className="btn btn-dash">$ {price}</button>
            <button className="btn btn-primary" onClick={()=>{handlePurchase(_id)}}>Buy Now</button>
          </div>
          <p className="text-slate-400">Available Stock : {stock}</p>

          <div>
            <Link
              to={`/update/${_id}`}
              className="btn bg-amber-200 mr-5 btn-circle"
            >
              <MdOutlineUpdate />
            </Link>
            <button
              className="btn bg-red-300 btn-circle"
              onClick={() => {
                handleDelelte(_id);
              }}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
