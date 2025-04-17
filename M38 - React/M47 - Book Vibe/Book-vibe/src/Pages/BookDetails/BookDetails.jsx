import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/AddtoDB';

const BookDetails = () => {

    const {id} = useParams();
    const data = useLoaderData();
    const theBook = data.find(book => book.bookId == id);


    const {bookName,author,image,review} = theBook;


    const handleMarkAsRead = () =>{
        addToStoredDB(id);
    }
    

    return (
        <div>
            <h1>Book Details</h1>
            <h2>{bookName}</h2>
            <h3>{author}</h3>
            <img src={image} alt="" className='w-40'/>
            <p>{review}</p>

            <button className='btn m-10' onClick={()=>handleMarkAsRead(id)}>Mark as Read</button>
            <button className='btn'> Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;