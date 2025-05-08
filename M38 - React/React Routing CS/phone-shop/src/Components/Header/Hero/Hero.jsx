import React, { useState } from 'react';
import banner from './banner.png';

const Hero = ({ handleSearch }) => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <div className='pt-5'>
                <img src={banner} alt="" className='w-8/12 mx-auto' />
                <div className='text-3xl font-light text-center mt-3'>
                    <h1>Browse | Search | View | Buy</h1>
                </div>

                <div className='text-center mt-4'>
                    <form onSubmit={(e) => handleSearch(e, search)}>
                        <input
                            type="text"
                            className='border border-slate-400 rounded-xl p-2 w-1/3 focus:outline-none'
                            placeholder='Search by Name'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button className='btn btn-primary ml-2' type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
