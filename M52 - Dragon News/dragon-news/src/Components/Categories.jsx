import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('categories.json').then(res => res.json());

const Categories = () => {

    const categories = use(categoryPromise);
    
    return (
        <div>
            <h1 className='font-semibold'>All Categories</h1>
            <div className='grid grid-cols-1 mt-5'>
                {
                    categories.map(category => 
                    <NavLink key={category.id}
                    className='text-accent hover:bg-base-200 py-2 pl-5'
                    to={`/category/${category.id}`} id='Cat'>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;