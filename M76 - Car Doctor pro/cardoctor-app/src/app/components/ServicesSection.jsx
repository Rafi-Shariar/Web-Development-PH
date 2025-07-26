import dbConnect, { collectionNames } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const  ServicesSection = async() => {

    const data = await dbConnect(collectionNames.servicesColection).find({}).toArray();

    return (
        <div className='max-w-7xl mx-auto grid grid-cols-12 gap-3 mt-16'>

            {
                data.map((item)=>{
                    return <div className='col-span-4 border p-6 border-orange-300 rounded-2xl'>

                        <Image src={item.img} width={300} height={170} alt='image'/>
                        <h1 className='text-2xl'>{item.title}</h1>
                        <h1 className='text-lg font-semibold text-orange-500'>Price: {item.price}</h1>
                        <Link href={`services/${item._id}`}> <p className='btn mt-6'>View Details</p></Link>
                    </div>
                })
            }
        </div>
    );
};

export default ServicesSection;