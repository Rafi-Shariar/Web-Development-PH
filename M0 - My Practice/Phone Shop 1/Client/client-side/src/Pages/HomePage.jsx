import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import AddPhone from "../Components/AddPhone";
import PhoneCard from "../Components/PhoneCard";
import { AuthContext } from "../Context/AuthContex";

const HomePage = () => {

    const initialPhones = useLoaderData();
    const [phonesData, setPhonesData] = useState(initialPhones);

    const phonememory ={phonesData,setPhonesData};
    
 
  return (
    <div className="my-10">
      <h1 className="text-5xl font-extralight">
        Find The Best Phone in your Budget
      </h1>
      <p className="text-slate-400">See | Compare | Buy</p>

      <AddPhone setPhonesData={setPhonesData} phonesData={phonesData}></AddPhone>
      <div className="mt-10 grid grid-cols-3 gap-10">

        {
            phonesData.map(phone => <PhoneCard phone={phone} key={phone._id} phonememory={phonememory}></PhoneCard>)
        }


      </div>

      
    </div>
  );
};

export default HomePage;
