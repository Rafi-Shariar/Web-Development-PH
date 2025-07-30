"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteButton = ({id}) => {

    const router = useRouter();

    const handleDelete = async (id) =>{
        
        const res = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        router.refresh();

    }
    return (
        <div>
            <button onClick={()=> handleDelete(id)} className="btn btn-error">Delete</button>
        </div>
    );
};

export default DeleteButton;