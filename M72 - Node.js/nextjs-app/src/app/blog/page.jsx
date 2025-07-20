"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const BlogPage = () => {

    const router = useRouter();

    const isLoggedIn = true;

    const handleRouter = () =>{
        if(isLoggedIn){
            router.push('/blog/personal')
        }else{
            router.push('/')
        }

    }
    return (
        <div>
            <p>This is Blog Page</p>
            <button type='button' onClick={handleRouter}>Personal Blogs</button>
            
        </div>
    );
};

export default BlogPage;