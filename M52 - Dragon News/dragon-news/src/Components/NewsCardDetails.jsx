import React, { } from 'react';
import { Link } from 'react-router';
import NewsDetails from '../Pages/NewsDetails';

const NewsCardDetails = ({news}) => {

   console.log(news);
   
    
    return (
        <div className='space-y-5'>
            <img src={news.image_url} alt="" className='h-[350px] object-cover'/>
            <h1 className='text-3xl font-semibold'>{news.title}</h1>
            <p>{news.details}</p>

            <Link className='btn btn-primary' to={`/category/${news.category_id}`}>Back</Link>

        </div>
    );
};

export default NewsCardDetails;