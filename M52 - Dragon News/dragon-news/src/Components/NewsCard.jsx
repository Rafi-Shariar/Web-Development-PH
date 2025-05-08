import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {

    const formattedDate = new Date(news.author.published_date).toLocaleDateString();
    
  return (
    <div className="border border-slate-300">
      <div className="flex gap-2 items-center bg-base-200 p-2">
        <div>
          <img src={news.author.img} alt="" className="rounded-4xl w-7" />
        </div>
        <div>
          <h1 className="text-sm font-semibold">{news.author.name}</h1>
          <p className="text-xs text-slate-400">{formattedDate  }</p>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-semibold">{news.title}</h1>
        <img
          src={news.thumbnail_url}
          alt=""
          className="rounded-2xl w-full mt-4"
        />

        <p className="text-accent mt-5">{news.details.length > 200 ? (<>
            {news.details.slice(0,200)}...
            <Link to={`/news-details/${news.id}`} className="font-semibold text-blue-600 cursor-pointer">Read More</Link>
        </>) : news.details}</p>

        <div className="flex w-full flex-col">
          <div className="divider"></div>
        </div>

        <div className="flex justify-between">
        <h1>Rating : {news.rating.number}</h1>
        <h1>Views : {news.total_view}</h1>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
