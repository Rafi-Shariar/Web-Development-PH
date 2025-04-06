import React from "react";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookMark,handleReadTime }) => {
  return (
    <div>
      <div className="card w-80 shadow-2xl">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body text-start">
          <div className="flex ">
            <h2 className="card-title">{blog.title}</h2>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-1 ml-2">
                <img src={blog.author_img} />
              </div>
            </div>
          </div>

          <h2 className="text-base font-semibold">Author : {blog.author}</h2>
          <div className="text-base">
            <h1>Posted time: {blog.posted_date}</h1>
            <h1>Read Time : {blog.reading_time}</h1>
          </div>
          <div className="card-actions justify-between mt-5 ">
            <button className="btn btn-primary" onClick={()=>handleBookMark(blog)}>
              <FaBookmark />
            </button>
            <button className="btn btn-primary bg-green-900" onClick={()=>handleReadTime(blog.reading_time, blog.id)}>
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
