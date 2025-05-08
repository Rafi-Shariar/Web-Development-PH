import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/header';
import NewsCardDetails from '../Components/NewsCardDetails';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();

    const [news, setNews] = useState({});

    useEffect(()=>{
        const newsDetails = data.find( singleNews => singleNews.id == id);
        setNews(newsDetails);

    }, [data,id])

    console.log(news);

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto'>
               
               <h1 className='text-2xl '>News Details</h1>
               <NewsCardDetails news={news}></NewsCardDetails>

            </main>
        </div>
    );
};

export default NewsDetails;