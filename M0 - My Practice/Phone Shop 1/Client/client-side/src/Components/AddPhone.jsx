import React from 'react';

const AddPhone = ({setPhonesData,phonesData}) => {


    const handleAddPhone = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPhoneData = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/stocks',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newPhoneData)
        })
        .then(res => res.json())
        .then( data =>{
            console.log('Added to DB',data)

            const newStock = [...phonesData, newPhoneData];
            setPhonesData(newStock);
        })
        



    }







    return (
        <div className="mt-20">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Available Phones</h1>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add Phone
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
                <h1 className="my-3 font-semibold">Add New Phone</h1>

              <form action="" className="flex flex-col gap-3" onSubmit={handleAddPhone}>
                <input type="text" className="input" placeholder="Model" name="model" />
                <input type="text" className="input" placeholder="Brand" name="brand"/>
                <input type="text" className="input" placeholder="Storage" name="storage"/>
                <input type="number" className="input" placeholder="price" name="price"/>
                <input type="number" className="input" placeholder="stock" name="stock"/>
                <input type="text" className="input" placeholder="image" name="image"/>

                <input type="submit" className="btn btn-info" value='Submit'/>
              </form>



              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    );
};

export default AddPhone;