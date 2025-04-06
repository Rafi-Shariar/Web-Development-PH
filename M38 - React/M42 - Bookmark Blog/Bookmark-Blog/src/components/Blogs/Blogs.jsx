import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookMark,handleReadTime}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch("Blogs.json")
        .then(res=> res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='mt-5'>
            <h1 className='text-2xl font-semibold'>Total Blogs : {blogs.length}</h1>

            <div className="all-blogs grid grid-cols-3 gap-6 mt-5 p-5">
                {
                    blogs.map((blog)=><Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blog>)
                }
            </div>
        
            
        </div>
    );
};

export default Blogs;