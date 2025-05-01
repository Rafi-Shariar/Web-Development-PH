import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {

    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setcategoryNews] = useState([]);
    

    useEffect(()=>{
        if(id == "0"){
            setcategoryNews(data);
            return;
        }
        else if( id == '1'){

            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setcategoryNews(filteredNews);

        }
        else{
            const filteredNews = data.filter(news => news.category_id == id);
            setcategoryNews(filteredNews);
        }
       
    },[data,id])

    
    
    return (
        <div>
            <h1 className='font-semibold'>Dragon News Home</h1>
            <div className='grid grid-cols-1 gap-3'>
                {
                    categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default CategoryNews;