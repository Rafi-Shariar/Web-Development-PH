import BookingUpdateForm from '@/app/components/forms/BookingUpdateForm';
import React from 'react';

const UpdateBookingPage = async ({params}) => {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/mybookings/${p.id}`);
    const data = await res.json();

    return (
        <div>
            <BookingUpdateForm data={data}/>
        </div>
    );
};

export default UpdateBookingPage;