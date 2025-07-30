import React from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

const MyBookingSTable = ({data}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            { data?.map((item,index)=>{
                return (

                     <tr className="bg-base-200">
              <th>{index+1}</th>
              <td>{item.service_name}</td>
              <td>{item.service_price}</td>
              <td><Link href={`mybookings/${item._id}`}><button className="btn btn-success">Edit</button></Link></td>
              <td><DeleteButton id={item._id}/></td>
            </tr>

                );
            })}
           
          
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingSTable;
