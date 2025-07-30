import React from "react";
import MyBookingSTable from "./components/MyBookingSTable";
import { headers } from "next/headers";

const mybookings = async () => {
  const res = await fetch("http://localhost:3000/api/service",{
     headers: headers(),
  });
 
  const d = await res.json();
  return d;
};


const MyBookingsPage = async () => {

    const data = await mybookings();
  
  return (
    <div>
      <h1>My Bookings</h1>

      <div className="max-w-7xl mx-auto mt-16">
        <MyBookingSTable data={data} />
      </div>
    </div>
  );
};

export default MyBookingsPage;
